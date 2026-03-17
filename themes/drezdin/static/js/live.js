/**
 * live.js — Kick + YouTube live detection
 * Requires window.SITE_CONFIG = { kickUsername, youtubeChannelId, youtubeApiKey }
 */
(function () {
  "use strict";

  const cfg = window.SITE_CONFIG || {};

  // ── Kick live check ─────────────────────────────────────────────────────────
  async function checkKick() {
    const user = cfg.kickUsername;
    if (!user) return null;
    try {
      const res = await fetch(
        `https://kick.com/api/v1/channels/${user}`,
        { headers: { Accept: "application/json" } }
      );
      if (!res.ok) return null;
      const data = await res.json();
      if (data && data.livestream) {
        return {
          platform: "Kick",
          url: `https://kick.com/${user}`,
          title: data.livestream.session_title || "Live Now",
          viewers: data.livestream.viewer_count || 0,
        };
      }
    } catch (_) {
      // CORS or network — fail silently
    }
    return null;
  }

  // ── YouTube live check (requires API key) ────────────────────────────────────
  async function checkYouTube() {
    const key = cfg.youtubeApiKey;
    const channelId = cfg.youtubeChannelId;
    if (!key || !channelId || channelId === "YOUR_YOUTUBE_CHANNEL_ID") return null;
    try {
      const url =
        `https://www.googleapis.com/youtube/v3/search` +
        `?part=snippet&channelId=${channelId}&type=video&eventType=live&key=${key}`;
      const res = await fetch(url);
      if (!res.ok) return null;
      const data = await res.json();
      if (data.items && data.items.length > 0) {
        const v = data.items[0];
        return {
          platform: "YouTube",
          url: `https://www.youtube.com/watch?v=${v.id.videoId}`,
          title: v.snippet.title,
          viewers: 0,
        };
      }
    } catch (_) {}
    return null;
  }

  // ── Render banner ────────────────────────────────────────────────────────────
  function showBanner(live) {
    const el = document.getElementById("live-banner");
    if (!el) return;

    const viewers =
      live.viewers > 0
        ? ` <span style="opacity:0.8">· ${live.viewers.toLocaleString()} watching</span>`
        : "";

    el.innerHTML =
      `<span class="live-dot"></span>` +
      `<strong>LIVE on ${live.platform}</strong> — ` +
      `<a href="${live.url}" target="_blank" rel="noopener">${live.title}</a>` +
      viewers;

    el.style.display = "block";
  }

  // ── Nav toggle (mobile) ───────────────────────────────────────────────────────
  function initNav() {
    const toggle = document.getElementById("nav-toggle");
    const links = document.getElementById("nav-links");
    if (toggle && links) {
      toggle.addEventListener("click", () => links.classList.toggle("open"));
    }
  }

  // ── Init ─────────────────────────────────────────────────────────────────────
  async function init() {
    initNav();

    const [kick, yt] = await Promise.all([checkKick(), checkYouTube()]);
    const live = kick || yt;
    if (live) showBanner(live);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
