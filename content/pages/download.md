::u-page-hero{class="flex justify-center dark:bg-gradient-to-b from-neutral-900 to-neutral-950"}
---
orientation: vertical
---
#top
:hero-background

#title
Download latest [RasterFlow]{.text-primary} version.

#description
Get the newest release of **RasterFlow 0.1.0**, powered by GEGL and GTK4.  
Choose the native build for your platform — Flatpak for Linux, or installers for Windows and macOS.  
Each package includes all dependencies required to start generating procedural images right away.

#links
  ::download-button
  ---
  version: "0.1.0"
  downloads:
    windows: "https://github.com/flatscrew/rasterflow/releases/download/v0.1.0/RasterFlow-0.1.0-Setup.exe"
    macos: "https://github.com/flatscrew/rasterflow/releases/download/v0.1.0/RasterFlow-0.1.0.dmg"
    linux: "https://github.com/flatscrew/rasterflow/releases/download/v0.1.0/RasterFlow-0.1.0.flatpak"
  ---
  ::

  :::u-button
  ---
  icon: i-lucide-arrow-right
  color: neutral
  variant: outline
  to: /downloads
  ---
  See other systems
  :::
::

::u-page-section
---
icon: i-lucide-history
title: Changelog
description: Keep track of every improvement, fix, and new feature added to RasterFlow over time.
class: dark:bg-neutral-950
---
  ::u-changelog-versions
  ---
  indicator-motion: true
  ---
    ::u-changelog-version
    ---
    title: 'RasterFlow 0.1.0 — Initial Release'
    date: '2025-11-07'
    badge: '0.1.0'
    description: 'The first public release of RasterFlow.'
    ---
    #body
    - First public release of **RasterFlow**
    - Node-based procedural editor powered by **GEGL** and **GTK4**
    - Includes over **250 operations**
    - Real-time preview and non-destructive workflow
    - Cross-platform builds for Linux, Windows, and macOS
    ::
  ::
::

::u-page-section
---
class: dark:bg-neutral-950
title: Download older version
icon: i-lucide-calendar-arrow-down
---
::