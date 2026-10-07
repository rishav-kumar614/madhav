/**
 * MADHAV SOLAR ENERGY — FULL-PAGE SCROLL-DRIVEN BACKGROUND SEQUENCE
 * Scrubbed 300-frame 4K storyboard background animation across the entire website scroll
 * File: hero-sequence.js
 */

(function () {
  'use strict';

  const TOTAL_FRAMES = 300;
  const BASE_PATH = './frames/';
  const EXTENSION = '.jpg';
  const BG_COLOR = '#FFFFF6'; // Exact parchment drafting paper color

  // State
  const frameCache = new Map();
  let canvas = null;
  let ctx = null;

  let currentProgress = 0;
  let targetProgress = 0;
  let isTicking = false;
  let canvasWidth = 0;
  let canvasHeight = 0;
  let dpr = 1;

  function pad4(n) {
    return String(n).padStart(4, '0');
  }

  function getFrameUrl(index) {
    return `${BASE_PATH}frame_${pad4(index + 1)}${EXTENSION}`;
  }

  // Retrieve or create Image with load tracking
  function getOrLoadFrame(index) {
    if (index < 0 || index >= TOTAL_FRAMES) return null;
    let entry = frameCache.get(index);
    if (!entry) {
      const img = new Image();
      img.decoding = 'async';
      entry = { img, loaded: false, index };
      frameCache.set(index, entry);

      img.onload = () => {
        entry.loaded = true;
        // If this frame is within the active display window, request a render
        requestTick();
      };
      img.onerror = () => {
        console.warn(`[HeroSequence] Failed to load frame ${index + 1}`);
      };
      img.src = getFrameUrl(index);
    }
    return entry;
  }

  // Find nearest loaded frame if the requested frame isn't ready
  function getNearestLoadedFrame(targetIndex) {
    const direct = frameCache.get(targetIndex);
    if (direct && direct.loaded) return direct;

    // Search outwards from target
    for (let offset = 1; offset < 35; offset++) {
      const prev = frameCache.get(targetIndex - offset);
      if (prev && prev.loaded) return prev;
      const next = frameCache.get(targetIndex + offset);
      if (next && next.loaded) return next;
    }

    // Fallback to frame 0
    const frameZero = frameCache.get(0);
    return frameZero && frameZero.loaded ? frameZero : null;
  }

  // Preload priority scheduler
  function startPreloading() {
    // Phase 1: Load Frame 1 immediately
    const firstFrame = getOrLoadFrame(0);
    if (firstFrame && firstFrame.img.complete && firstFrame.img.naturalWidth > 0) {
      firstFrame.loaded = true;
      requestTick();
    }

    // Phase 2: Load keyframes across the sequence (every 4th frame, ~75 frames)
    const keyframes = [];
    for (let i = 0; i < TOTAL_FRAMES; i += 4) {
      keyframes.push(i);
    }
    if (keyframes[keyframes.length - 1] !== TOTAL_FRAMES - 1) {
      keyframes.push(TOTAL_FRAMES - 1);
    }

    // Concurrent batch loader
    const concurrency = 6;
    let keyIdx = 0;

    function loadNextKeyframeBatch() {
      let active = 0;
      while (keyIdx < keyframes.length && active < concurrency) {
        const idx = keyframes[keyIdx++];
        const item = getOrLoadFrame(idx);
        active++;
        if (item.loaded) {
          active--;
        } else {
          const prevOnload = item.img.onload;
          item.img.onload = () => {
            if (prevOnload) prevOnload();
            loadNextKeyframeBatch();
          };
        }
      }

      // When keyframes are underway or done, begin filling remaining in-between frames
      if (keyIdx >= keyframes.length) {
        loadRemainingFrames();
      }
    }

    function loadRemainingFrames() {
      let remainIdx = 0;
      function loadNextBatch() {
        let count = 0;
        while (remainIdx < TOTAL_FRAMES && count < 8) {
          const idx = remainIdx++;
          if (!frameCache.has(idx)) {
            getOrLoadFrame(idx);
            count++;
          }
        }
        if (remainIdx < TOTAL_FRAMES) {
          setTimeout(loadNextBatch, 50);
        }
      }
      setTimeout(loadNextBatch, 100);
    }

    loadNextKeyframeBatch();
  }

  // Resize canvas with devicePixelRatio
  function resizeCanvas() {
    if (!canvas || !ctx) return;
    dpr = Math.min(window.devicePixelRatio || 1, 2); // Cap at 2 for optimal GPU performance

    const header = document.querySelector('.site-header');
    const headerHeight = header ? header.offsetHeight : 68;

    // Keep CSS variable in sync with actual navbar height
    document.documentElement.style.setProperty('--header-height', headerHeight + 'px');

    // Canvas strictly occupies visible area below the navbar
    canvasWidth = document.documentElement.clientWidth || window.innerWidth;
    canvasHeight = Math.max(100, window.innerHeight - headerHeight);

    canvas.width = Math.round(canvasWidth * dpr);
    canvas.height = Math.round(canvasHeight * dpr);
    canvas.style.width = '100%';
    canvas.style.height = '100%';

    requestTick();
  }

  // Draw frame on canvas with full-bleed cover sizing (100% length & breadth) and smooth crossfading
  function drawFrames() {
    if (!ctx || canvasWidth === 0 || canvasHeight === 0) return;

    // Reset transform & clear to parchment background
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = BG_COLOR;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Apply dpr scaling for drawing operations
    ctx.scale(dpr, dpr);

    // Map full page scroll progress (0 to 1) across the entire 300 frames
    const exactFrame = currentProgress * (TOTAL_FRAMES - 1);
    const lowerIdx = Math.floor(exactFrame);
    const upperIdx = Math.min(TOTAL_FRAMES - 1, lowerIdx + 1);
    const blendRatio = exactFrame - lowerIdx;

    // Ensure frames are loaded or get nearest
    getOrLoadFrame(lowerIdx);
    getOrLoadFrame(upperIdx);

    const frameA = getNearestLoadedFrame(lowerIdx);
    const frameB = getNearestLoadedFrame(upperIdx);

    if (!frameA) return;

    const imgA = frameA.img;
    const iw = imgA.naturalWidth || 3840;
    const ih = imgA.naturalHeight || 2160;
    const imgAspect = iw / ih; // 16:9 = 1.7777778
    const canvasAspect = canvasWidth / canvasHeight;

    let renderW, renderH, renderX, renderY;

    // FULL-BLEED COVER: Guarantee 100% breadth (width) and 100% length (height)
    if (canvasAspect >= imgAspect) {
      // Screen is wider than 16:9: fill 100% of canvas width, height scales proportionally
      renderW = canvasWidth;
      renderH = canvasWidth / imgAspect;
      renderX = 0;
      renderY = (canvasHeight - renderH) / 2;
    } else {
      // Screen is taller than 16:9: fill 100% of canvas height, width scales proportionally
      renderH = canvasHeight;
      renderW = canvasHeight * imgAspect;
      renderX = (canvasWidth - renderW) / 2;
      renderY = 0;
    }

    // Draw base frame A
    ctx.globalAlpha = 1.0;
    ctx.drawImage(imgA, renderX, renderY, renderW, renderH);

    // Crossfade to frame B if available and ratio is non-trivial
    if (frameB && frameB !== frameA && blendRatio > 0.01) {
      ctx.globalAlpha = Math.min(1.0, Math.max(0, blendRatio));
      ctx.drawImage(frameB.img, renderX, renderY, renderW, renderH);
    }

    ctx.globalAlpha = 1.0;
  }

  function renderLoop() {
    isTicking = false;

    // Smooth lerp damping towards targetProgress
    const delta = targetProgress - currentProgress;
    if (Math.abs(delta) > 0.0001) {
      currentProgress += delta * 0.28;
      drawFrames();
      requestTick();
    } else {
      currentProgress = targetProgress;
      drawFrames();
    }
  }

  function requestTick() {
    if (!isTicking) {
      isTicking = true;
      requestAnimationFrame(renderLoop);
    }
  }

  function onScroll() {
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const maxScroll = Math.max(1, docHeight - winHeight);
    const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;

    targetProgress = Math.max(0, Math.min(1, scrollY / maxScroll));
    requestTick();
  }

  // Initialize
  function initHeroSequence() {
    canvas = document.getElementById('heroScrubCanvas');

    if (!canvas) {
      console.warn('[HeroSequence] Missing canvas element #heroScrubCanvas');
      return;
    }

    ctx = canvas.getContext('2d', { alpha: false, desynchronized: true });

    // Initial sizing
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    // Start preloading frames
    startPreloading();

    // Initial position check
    onScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeroSequence);
  } else {
    initHeroSequence();
  }
})();
