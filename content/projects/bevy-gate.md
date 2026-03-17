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
    type: "video"
    src: "/vids/Screencast_20260206_000341.webm"
    poster: ""
    caption: "Early world editor session — placing structures, testing terrain, and working out the RON-based level format."

  - enabled: true
    type: "video"
    src: "/vids/Screencast_20260206_001832.webm"
    poster: ""
    caption: "Third-person controller rebuild using bevy-tnua and Rapier. Center-screen raycasting for aim, smoother camera handling."

  - enabled: false
    type: "video"
    src: "/vids/Screencast_20260206_003518.webm"
    poster: ""
    caption: "Add your caption here."

  - enabled: false
    type: "video"
    src: "/vids/Screencast_20260206_163139.webm"
    poster: ""
    caption: "Add your caption here."

  - enabled: false
    type: "video"
    src: "/vids/Screencast_20260206_164336.webm"
    poster: ""
    caption: "Add your caption here."

  - enabled: false
    type: "video"
    src: "/vids/Screencast_20260206_213114.webm"
    poster: ""
    caption: "Add your caption here."

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
    type: "video"
    src: "/vids/Screencast_20260223_114519.webm"
    poster: ""
    caption: "Add your caption here."

  - enabled: false
    type: "video"
    src: "/vids/Screencast_20260224_124858.webm"
    poster: ""
    caption: "Add your caption here."

  - enabled: false
    type: "video"
    src: "/vids/Screencast_20260228_171618.webm"
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
