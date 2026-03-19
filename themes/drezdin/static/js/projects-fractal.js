(function () {
  const canvas = document.getElementById("projects-fractal-canvas");
  if (!canvas) return;

  const gl = canvas.getContext("webgl", {
    alpha: true,
    antialias: true,
    premultipliedAlpha: false,
  });

  if (!gl) {
    canvas.style.display = "none";
    return;
  }

  const vertexSource = `
    attribute vec2 a_position;
    void main() {
      gl_Position = vec4(a_position, 0.0, 1.0);
    }
  `;

  const fragmentSource = `
    precision highp float;

    uniform vec2 u_resolution;
    uniform float u_time;

    #define PI 3.141592653589793

    mat2 rot(float a) {
      float s = sin(a);
      float c = cos(a);
      return mat2(c, -s, s, c);
    }

    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }

    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);

      float a = hash(i);
      float b = hash(i + vec2(1.0, 0.0));
      float c = hash(i + vec2(0.0, 1.0));
      float d = hash(i + vec2(1.0, 1.0));

      return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
    }

    float fbm(vec2 p) {
      float v = 0.0;
      float a = 0.5;
      for (int i = 0; i < 5; i++) {
        v += a * noise(p);
        p = rot(0.45) * p * 2.03 + vec2(0.32, -0.21);
        a *= 0.52;
      }
      return v;
    }

    float paisley(vec2 uv, vec2 center, float scale, float twist) {
      vec2 p = (uv - center) / scale;
      p *= rot(twist + 0.7 * sin(u_time * 0.22));
      p.x += 0.30 * sin(p.y * 3.8 + twist + u_time * 0.16);
      p.y += 0.12 * cos(p.x * 3.2 - twist + u_time * 0.12);
      float r = length(p);
      float a = atan(p.y, p.x);
      float drop = smoothstep(0.74, 0.15, length(vec2(p.x * 0.88, p.y + 0.12)));
      float hook = smoothstep(0.34, -0.18, length(vec2(p.x - 0.26, p.y - 0.26)));
      float swirl = 0.5 + 0.5 * cos(7.0 * a - 8.0 * r + twist * 2.0);
      return drop * (0.58 + 0.42 * swirl) + hook * 0.4;
    }

    vec3 palette(float t) {
      vec3 c1 = vec3(0.96, 0.77, 0.34);
      vec3 c2 = vec3(0.83, 0.46, 0.17);
      vec3 c3 = vec3(0.43, 0.28, 0.10);
      vec3 c4 = vec3(0.56, 0.45, 0.18);
      return c1
        + 0.22 * cos(6.28318 * (t + vec3(0.0, 0.12, 0.24)))
        + 0.18 * mix(c2, c3, t)
        + 0.10 * c4;
    }

    void main() {
      vec2 uv = gl_FragCoord.xy / u_resolution.xy;
      vec2 p = uv - 0.5;
      p.x *= u_resolution.x / u_resolution.y;

      float t = u_time * 0.32;
      vec2 flow = vec2(
        fbm(p * 2.7 + vec2(0.0, t)),
        fbm(p * 2.7 + vec2(4.1, -t))
      );

      vec2 warped = p + 0.24 * (flow - 0.5);
      warped *= rot(0.10 * sin(u_time * 0.18));
      float field = fbm(warped * 3.1 + vec2(0.0, t * 1.5));
      float plume = smoothstep(0.18, 0.95, field);

      float motif = 0.0;
      motif += paisley(uv, vec2(0.21, 0.25), 0.23, 0.6);
      motif += paisley(uv, vec2(0.78, 0.23), 0.28, -0.8);
      motif += paisley(uv, vec2(0.38, 0.74), 0.31, 1.7);
      motif += paisley(uv, vec2(0.84, 0.74), 0.20, -1.4);
      motif += paisley(uv, vec2(0.57, 0.48), 0.17, 2.2);

      float tracer = 0.0;
      tracer += 0.5 + 0.5 * sin(17.0 * warped.x + 10.0 * field + u_time * 0.65);
      tracer += 0.5 + 0.5 * cos(15.0 * warped.y - 8.5 * field - u_time * 0.42);
      tracer *= 0.22;

      vec3 base = vec3(0.98, 0.95, 0.90);
      vec3 smoky = mix(vec3(0.70, 0.45, 0.22), vec3(0.93, 0.73, 0.35), plume);
      vec3 color = mix(base, smoky, 0.42 * plume);

      float embossed = smoothstep(0.28, 0.92, motif);
      color += palette(0.14 + 0.55 * plume + 0.08 * sin(u_time * 0.28)) * embossed * 0.30;
      color += vec3(0.15, 0.07, 0.02) * tracer * plume;

      float vignette = smoothstep(1.28, 0.18, length(p * vec2(0.95, 1.08)));
      color = mix(base, color, vignette);

      gl_FragColor = vec4(color, 0.96);
    }
  `;

  function compileShader(type, source) {
    const shader = gl.createShader(type);
    if (!shader) return null;
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.warn(gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  const vertexShader = compileShader(gl.VERTEX_SHADER, vertexSource);
  const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentSource);
  if (!vertexShader || !fragmentShader) {
    canvas.style.display = "none";
    return;
  }

  const program = gl.createProgram();
  if (!program) {
    canvas.style.display = "none";
    return;
  }

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.warn(gl.getProgramInfoLog(program));
    canvas.style.display = "none";
    return;
  }

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
      -1,  1,
       1, -1,
       1,  1,
    ]),
    gl.STATIC_DRAW
  );

  const positionLocation = gl.getAttribLocation(program, "a_position");
  const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
  const timeLocation = gl.getUniformLocation(program, "u_time");

  let width = 0;
  let height = 0;
  let animationFrame = 0;
  let start = 0;

  function resize() {
    const ratio = Math.min(window.devicePixelRatio || 1, 1.75);
    const nextWidth = Math.floor(canvas.clientWidth * ratio);
    const nextHeight = Math.floor(canvas.clientHeight * ratio);
    if (nextWidth === width && nextHeight === height) return;
    width = nextWidth;
    height = nextHeight;
    canvas.width = width;
    canvas.height = height;
    gl.viewport(0, 0, width, height);
  }

  function render(now) {
    if (!start) start = now;
    resize();

    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
    gl.uniform2f(resolutionLocation, width, height);
    gl.uniform1f(timeLocation, (now - start) * 0.001);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    animationFrame = window.requestAnimationFrame(render);
  }

  function onVisibilityChange() {
    if (document.hidden) {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = 0;
      return;
    }
    if (!animationFrame) {
      animationFrame = window.requestAnimationFrame(render);
    }
  }

  window.addEventListener("resize", resize, { passive: true });
  document.addEventListener("visibilitychange", onVisibilityChange);
  animationFrame = window.requestAnimationFrame(render);
})();
