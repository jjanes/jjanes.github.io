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
    src: "/vids/emugae-early-first-test.webm"
    poster: ""
    caption: "Very early Emugate test clip. Crude, but it captures the original proof that browser-based emulator streaming was viable."

  - enabled: true
    type: "video"
    src: "/vids/emugate-drezdlabs-first-conept-cool-debug-screen-emugate.webm"
    poster: ""
    caption: "First Drezdin Labs-era Emugate concept screen with heavy debug UI still visible. The platform idea is already there even if the presentation is not."

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

  - enabled: true
    type: "video"
    src: "/vids/Screencast_20251204_223709.webm"
    poster: ""
    caption: "Session UX keeps improving here. More of the operator-side controls and multiplayer room management are starting to settle."

  - enabled: true
    type: "video"
    src: "/vids/Screencast_20251205_092049.webm"
    poster: ""
    caption: "Another early product pass focused on reliability and flow. Less pure streaming demo, more recognizable multiplayer platform."

  - enabled: true
    type: "video"
    src: "/vids/Screencast_20251210_121735.webm"
    poster: ""
    caption: "December checkpoint showing the project maturing past the first prototype stage. Core streaming, sessions, and browser UX are all improving together."

  - enabled: true
    type: "video"
    src: "/vids/emugate-comparing-encoding-video.webm"
    poster: ""
    caption: "Encoding comparison work for Emugate. This kind of testing matters because the whole platform lives or dies on stream quality versus latency."

  - enabled: true
    type: "video"
    src: "/vids/emugate-signup-page-first-pass.webm"
    poster: ""
    caption: "First pass on account creation and onboarding. A good emulator backend is not enough by itself; the product surface has to be coherent too."

  - enabled: true
    type: "video"
    src: "/vids/emugate-discord login.webm"
    poster: ""
    caption: "Discord login integration for Emugate. This is the sort of practical auth work that makes a multiplayer platform easier to adopt."

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
