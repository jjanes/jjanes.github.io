---
title: "Emugate"
date: 2026-03-17
summary: "Browser-based multiplayer retro gaming platform. Stream classic games in real-time over H.264/WebSocket — no plugins, no installs, up to 4 players."
tech: ["Zig", "LibRetro", "WebSocket", "H.264", "Go", "NixOS"]
status: "active"
featured: true
project_url: "https://drezdin.com"
external_link_label: "Visit Drezdin Labs"
github_url: ""

# ─────────────────────────────────────────────────────────────────────────────
# MEDIA GALLERY
# Each item can be enabled: true/false — easy to toggle without deleting.
# Types: "video" (local webm/mp4), "image" (local or absolute URL), "youtube" (video ID only)
# Add a caption — treat it like a short news article blurb for each clip.
# ─────────────────────────────────────────────────────────────────────────────
media:
  - enabled: true
    type: "video"
    src: "/vids/Screencast_20251203_215927.webm"
    poster: ""
    caption: "First recorded session — early Emugate prototype running locally. H.264 stream over WebSocket, no WebRTC required."

  - enabled: true
    type: "video"
    src: "/vids/Screencast_20251204_182403.webm"
    poster: ""
    caption: "Input handling and session management — player slots, observer mode, and the kick/ban system coming together."

  - enabled: false
    type: "video"
    src: "/vids/Screencast_20251204_223709.webm"
    poster: ""
    caption: "Add your caption here."

  - enabled: false
    type: "video"
    src: "/vids/Screencast_20251205_092049.webm"
    poster: ""
    caption: "Add your caption here."

  - enabled: false
    type: "video"
    src: "/vids/Screencast_20251210_121735.webm"
    poster: ""
    caption: "Add your caption here."

  - enabled: false
    type: "image"
    src: ""
    caption: "Add a screenshot — set src and enabled: true."

  - enabled: false
    type: "youtube"
    id: ""
    caption: "Add a YouTube video ID and set enabled: true."
---

Emugate is a browser-based multiplayer retro gaming platform built under [Drezdin Labs](https://drezdin.com). The core idea is dead simple: run LibRetro emulation cores server-side, stream the output as H.264 video over WebSocket, and push controller input back the other direction. No WebRTC, no plugins, no installs — just a browser and a URL.

## Why WebSocket instead of WebRTC

Most game streaming solutions reach for WebRTC because of its low latency story. The problem is WebRTC is a nightmare to deploy behind Cloudflare tunnels and standard reverse proxies — it wants to punch through NAT, negotiate ICE candidates, and generally be difficult. H.264 over WebSocket works everywhere. It's simpler to reason about, easier to tune, and the latency for retro gaming content is entirely acceptable.

## What it supports

- **Emulation cores**: NES, SNES, GBA, PS1, N64 via LibRetro
- **Multiplayer**: Up to 4 concurrent players with additional observer slots
- **Session features**: Save states, worker profiles, kick/ban, session management
- **Infrastructure**: Designed to run behind Cloudflare tunnels with zero special config

## Status

Active development at Drezdin Labs. Visit [drezdin.com](https://drezdin.com) to check it out.
