---
title: "Gate Bevy"
date: 2026-03-17
summary: "Multiplayer 3D action game engine and world editor built on Bevy. Third-person gameplay, dedicated server, Lua-scripted UI, and a browser-based map editor."
tech: ["Rust", "Bevy", "Rapier3D", "Lightyear", "Lua", "Redis", "Axum", "NixOS"]
status: "wip"
featured: false
project_url: ""
github_url: ""

# ─────────────────────────────────────────────────────────────────────────────
# MEDIA GALLERY
# Set enabled: true to show, false to hide. Types: video, image, youtube.
# caption is your news-article-style blurb for each clip.
# ─────────────────────────────────────────────────────────────────────────────
media:
  - enabled: true
    type: "image"
    src: "/bevy-gate-browser-based-wam-map-builder-spawn3d-map-builder.webp"
    caption: "Browser-based map builder pass for Gate Bevy. Spawning and arranging 3D content from a web UI is the direction for fast world-authoring."

  - enabled: true
    type: "video"
    src: "/vids/bevy-gate-first.webm"
    poster: ""
    caption: "First proper Gate Bevy gameplay clip. Rough around the edges, but this is the point where the project starts to read as an actual game."

  - enabled: true
    type: "video"
    src: "/vids/bevy-gte-char-select.webm"
    poster: ""
    caption: "Character select prototype for the Bevy client. Early UI work, but it shows the direction for player-facing flow before entering the world."

  - enabled: true
    type: "video"
    src: "/vids/Screencast_20260312_200626.webm"
    poster: ""
    caption: "March browser-editor progress clip. More of the web tooling is becoming usable for direct world-building instead of just being scaffolding."

  - enabled: true
    type: "video"
    src: "/vids/Screencast_20260312_200704.webm"
    poster: ""
    caption: "Follow-up browser-based builder pass with tighter spawning and map manipulation. The gap between engine tools and web tools keeps shrinking."

  - enabled: true
    type: "video"
    src: "/vids/Screencast_20260312_211304.webm"
    poster: ""
    caption: "Longer March checkpoint showing the browser-side editor moving toward something practical enough to use daily."

  - enabled: true
    type: "video"
    src: "/vids/bevy-gate-bloopers.webm"
    poster: ""
    caption: "Blooper reel from Gate Bevy development. Networking glitches, controller weirdness, and the usual physics disrespect."

  - enabled: true
    type: "video"
    src: "/vids/bevygate-blooper.webm"
    poster: ""
    caption: "Another small failure montage from the Bevy side of the project. Worth keeping because it shows the actual texture of iteration."

  - enabled: false
    type: "image"
    src: ""
    caption: "Add a screenshot and set enabled: true."

  - enabled: false
    type: "youtube"
    id: ""
    caption: "Add a YouTube video ID and set enabled: true."
---

Gate Bevy is a multiplayer 3D action game and editor suite built on the Bevy game engine in Rust. The scope sits somewhere between an indie multiplayer RPG and a platform for building those kinds of games — third-person combat, a dedicated server, Lua-scripted UI, and browser-based tooling for map and asset editing.

## Architecture

The project splits into four distinct binaries sharing a common protocol:

- **Client** — the Bevy desktop game client, handles rendering, input, and UI
- **Server** — headless dedicated server with Redis persistence, manages game state and player sessions
- **Editor** — standalone Bevy apps for map editing and asset management, synced to the server over the same protocol as the game client
- **Web** — Axum HTTP server for admin tooling and web-based editor bootstrap

This means the map editor is just another Bevy application — it talks to the server over the same WebSocket protocol as the game client, reusing the same message types without the full simulation running.

## Key technical choices

**Physics**: Rapier3D via `bevy_rapier3d`, with `bevy-tnua` for the third-person character controller. Camera uses center-screen raycasting to find the world aim point — clean and predictable.

**Networking**: `lightyear` over UDP with netcode for client-server state sync. WebSocket for editor and admin connections.

**UI scripting**: Active work to move UI layout (node positions, anchors, sizes, theme tokens) into Lua scripts in `assets/ui/`. Rust stays focused on gameplay logic; Lua drives layout. Decoupled and easy to tweak.

**Asset pipeline**: Blender automation scripts for importing FBX/GLTF character models, validating bone compatibility against animation clips, and retargeting animations between different rigs (e.g. MMD to Mixamo). Outputs compatibility reports before final GLB export.

## Status

Mid-refactor toward the clean client/server/editor architecture described above. The third-person controller rebuild is mostly done. Web editor scaffolding is in progress.
