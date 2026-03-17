---
title: "Emugate Alpha — Register Now"
date: 2026-03-17
featured: true
announcement: true
announcement_image: "/emugate.png"
announcement_label: "Drezdin Labs"
tags: ["emugate", "drezdin-labs", "retro-gaming", "announcement"]
summary: "Emugate alpha testing is open. Browser-based multiplayer retro gaming — NES, SNES, GBA, PS1, N64, and more. No installs, no plugins. Register at drezdin.com."
---

Emugate is open for alpha testing. If you want in, head to [drezdin.com](https://drezdin.com) and register.

## What is Emugate

Emugate is a browser-based multiplayer retro gaming platform built under Drezdin Labs. The pitch is simple: classic games, in your browser, with friends. No plugins. No emulator installs. No ROM management. Just a URL and up to four players.

The tech stack is a bit unusual. Most browser game streaming projects reach for WebRTC. I went a different direction — H.264 video streams over WebSocket. It works cleanly behind Cloudflare tunnels and standard reverse proxies without any NAT traversal headaches. The emulation runs server-side via LibRetro cores.

{{< figure src="/emugate.png" alt="Emugate — account and session interface" >}}

## What's supported

- **Consoles**: NES, SNES, GBA, PS1, N64, and anything with a LibRetro core
- **Multiplayer**: Up to 4 concurrent players + observer slots
- **Session features**: Save states, player profiles, kick/ban, session management
- **Zero client install**: Works in any modern browser

## Alpha registration

Head to [drezdin.com](https://drezdin.com) to register for the alpha. Accounts are going out in batches. I want real feedback on latency, input feel, and the session management flow before opening it up further.

## Videos

A few recordings from recent sessions:

{{< video src="/vids/Screencast_20251203_215927.webm" >}}

{{< video src="/vids/Screencast_20251204_182403.webm" >}}

More to come as the alpha progresses. Follow on [Kick](https://kick.com/drezdin) or [YouTube](https://youtube.com/@drezOG) — I stream Emugate sessions regularly.
