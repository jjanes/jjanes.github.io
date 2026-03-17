---
title: "orbis-v1"
date: 2026-03-17
summary: "AI-powered video editor built in Zig. A high-performance inference server backed by ONNX Runtime and AMD ROCm/HIP drives face detection, embedding, and swapping — all composable as JSON playbooks. Python GUI on top for timeline editing and real-time preview."
tech: ["Zig", "ONNX/ORT", "ROCm/HIP", "HIPRTC", "OpenCV", "Python", "PyAV", "FFmpeg", "Raylib", "Dear ImGui"]
status: "wip"
featured: false
project_url: ""
github_url: ""

# ─────────────────────────────────────────────────────────────────────────────
# MEDIA — set enabled: true to show, false to hide.
# Add captions like a news article blurb for each clip.
# ─────────────────────────────────────────────────────────────────────────────
media:
  - enabled: true
    type: "video"
    src: "/vids/Screencast_20260223_114519.webm"
    poster: ""
    caption: "Inference server processing — Zig-based ORT pipeline with face detection and embedding running against test frames."

  - enabled: true
    type: "video"
    src: "/vids/Screencast_20260224_124858.webm"
    poster: ""
    caption: "GUI editor session — timeline view, frame scrubbing, and the per-frame metadata system coming together."

  - enabled: true
    type: "video"
    src: "/vids/Screencast_20260228_171618.webm"
    poster: ""
    caption: "Playbook pipeline run — multi-step JSON playbook chaining face detection → embedding → swap ops in a single pass."

  - enabled: false
    type: "video"
    src: "/vids/Screencast_20260211_021231.webm"
    poster: ""
    caption: "Add your caption here."

  - enabled: false
    type: "video"
    src: "/vids/Screencast_20260211_102929.webm"
    poster: ""
    caption: "Add your caption here."

  - enabled: false
    type: "image"
    src: ""
    caption: "Add a screenshot and set enabled: true."

  - enabled: false
    type: "youtube"
    id: ""
    caption: "Add a YouTube video ID and set enabled: true."
---

orbis-v1 is a video editor built around a custom inference engine. The core is written in Zig — a compiled server that wraps ONNX Runtime and OpenCV behind a clean JSON pipe protocol, with GPU acceleration via AMD ROCm/HIP for custom image kernels. A Python layer sits on top handling video I/O, the GUI, and project state.

The idea is to separate the expensive computation (inference, GPU ops) from the editorial layer entirely. The Zig server speaks newline-delimited JSON over stdin/stdout — send it a frame as base64 with a model tag, get structured results back. No ceremony, no RPC overhead. The GUI doesn't care what's running inference; it just sends requests and renders results.

## The Inference Server

The server is a single Zig binary built around a model registry (`models.json`) that describes every supported model — its path, its tag, and its configurable options. At runtime it loads whichever session is requested and dispatches to the appropriate op handler.

Supported models:
- **YuNet** — face detection, 5-point landmarks (OpenCV native)
- **ArcFace w600k_r50** — 512-dim L2-normalized face embeddings
- **inswapper_128 / simswap_256 / simswap_512 / ghost_unet** — face swapping via ORT
- **DWPose** — 133-point COCO-WholeBody pose estimation
- **FER2013** — 7-class emotion classification
- **Age / Gender** — GoogLeNet attribute models

All ONNX models run through a shared `ort.zig` wrapper around the ORT C API. No Python, no overhead, direct C interop.

## Playbooks

The playbook system is what makes this composable. A playbook is a JSON file defining a directed graph of operations — each play has an id, an op type, optional upstream dependencies, and output routing.

```json
{
  "name": "detect_and_swap",
  "plays": [
    { "id": "detect", "op": "model",   "model": "yunet",      "emit": false },
    { "id": "embed",  "op": "model",   "model": "arcface",    "from": "detect", "emit": false },
    { "id": "swap",   "op": "model",   "model": "inswapper",  "from": "embed",  "emit": true }
  ]
}
```

Op types: `model` (ORT inference), `builtin` (OpenCV — canny, blur, resize, CLAHE, Poisson blend), `custom:rocm` (GPU kernel dispatch via HIP). The DAG executes in dependency order, each play receiving the output of its upstream as input.

## GPU Acceleration

ROCm/HIP handles the custom kernel path. The `hiprtc.zig` wrapper compiles HIP C++ source at runtime and caches the result — so you can write a `.hip` kernel file, drop it in, and the server picks it up without a rebuild. GPU tensor management supports HWC_u8, HWC_f32, CHW_f32, and NC4HW4_f32 (RDNA-vectorized layout) memory layouts.

Built-in kernels handle format conversion (BGR↔RGB, HWC↔CHW) and image prep for model input. User-definable kernels live in `kernels/user.hip` — write your own GPU ops and route to them via playbook.

## The GUI

Python on top via Dear ImGui + Raylib. The video player runs in a background thread using PyAV for multi-threaded frame decoding with audio playback. Per-frame metadata (face detections, landmarks, pose, emotion) is stored as JSON alongside the video and loaded lazily on scrub.

The project system tracks keyframes, layer generations, and processing history with autosave. The timeline lets you tag frames, inspect per-frame AI output, and queue processing runs against frame ranges.

## Layer Editing

The ORA (OpenRaster) format is used for multi-layer composition — fully compatible with Krita. Frame layers are written back into ORA stacks after processing, preserving the editing history as actual layer data you can open in any ORA-compatible tool.

## Status

Active development. The inference server architecture is stable. GUI and project system are being refined. orbis-v1 is the prototype stage; the full orbvis-v1 rewrite consolidates everything into a single clean system.
