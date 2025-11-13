::u-page-hero{class="dark:bg-gradient-to-b from-neutral-900 to-neutral-950"}
---
orientation: vertical
---

#title
Download latest [RasterFlow]{.text-primary} version.

#description
Get the newest release of **RasterFlow**, powered by GEGL and GTK4.  
Choose the native build for your platform — Flatpak for Linux, or installers for Windows and macOS.  
Each package includes all dependencies required to start generating procedural images right away.

#default
::u-page-grid{class="flex justify-center"}

  ::u-page-feature
  ---
  title: Release Date
  description: 12.11.2025
  icon: i-lucide-calendar
  ---
  ::
  
  ::u-page-feature
  ---
  title: File Size
  description: 26MB
  icon: i-lucide-weight
  ---
  ::
  
  ::u-page-feature
  ---
  title: SHA256
  icon: i-lucide-hash
  ---
  
  #description
    
    ::ellipsis-copy
    ---
    text: sha256:1041140a12ecb9c3ca213af2db5455ae3f7dda6915ab8636e89f40ec44326cb3
    ---
    ::
  ::
  
::

#links
  :download-button{version="0.1.0"}

  :::u-button
  ---
  icon: i-lucide-arrow-right
  color: neutral
  variant: outline
  to: https://github.com/flatscrew/rasterflow/releases?_target=blank
  label: See all releases
  ---
  :::
::

::u-page-section
---
title: How to install on Linux (Flatpak)
icon: i-lucide-terminal
class: dark:bg-neutral-950
---

::steps{level="4" class="place-self-center"}

#### Download the Flatpak package

Click **Download for Linux (Flatpak)** and save the `.flatpak` file.

#### Install RasterFlow

```bash [Terminal]
flatpak install RasterFlow-{{$doc.version}}.flatpak
```

#### Launch RasterFlow

```bash [Terminal]
flatpak run io.flatscrew.RasterFlow
```
::

::u-page-section
---
title: Changelog
icon: i-lucide-history
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
icon: i-lucide-download
---

#title 
## All available downloads

#description
Browse all platform-specific builds of RasterFlow.
Choose the package that matches your operating system to download the latest version.


#body
::u-page-grid

  ::u-page-section
  ---
  title: Linux
  icon: i-simple-icons-linux
  ---
  
  #links
  :download-button{version="0.1.0" system="linux"}
  ::
  
  ::u-page-section
  ---
  title: Windows
  icon: i-simple-icons-windows
  ---
  
  #links
  :download-button{version="0.1.0" system="windows"}
  ::
  
  ::u-page-section
  ---
  title: MacOS
  icon: i-simple-icons-apple
  ---
  
  #links
  :::u-button
  ---
  color: neutral
  variant: outline
  label: Coming soon ...
  disabled: true
  ---
  :::
  ::
::
