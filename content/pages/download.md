---
version: 0.1.0
---

::u-page-hero{class="dark:bg-gradient-to-b from-neutral-900 to-neutral-950 -mb-12"}
---
orientation: vertical
---

#title
<span class="text-5xl sm:text-7xl">Download latest [RasterFlow]{.text-primary} version.</span>

#description
Get the newest release of **RasterFlow**, powered by GEGL and GTK4.  
Choose the native build for your platform — Flatpak for Linux, or installers for Windows and macOS.  
Each package includes all dependencies required to start generating procedural images right away.

#links
  ::download-tabs
  #linux
    ::div{class="flex flex-col items-center py-12 gap-12"}
      :download-button{:version="version" system="linux"}

      ::u-page-grid{class="flex flex-col md:flex-row justify-center"}

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
    ::
    
    ::steps{level="4" class="place-self-center"}

    #### Download the Flatpak package


    Click **Download for Linux (Flatpak)** and save the `.flatpak` file.

    #### Install RasterFlow

    ```bash [Terminal]
    flatpak install RasterFlow-{{version}}.flatpak
    ```

    #### Launch RasterFlow

    ```bash [Terminal]
    flatpak run io.flatscrew.RasterFlow
    ```
    ::

  #macos
    ::steps{level="4" class="place-self-center"}

    #### Install RasterFlow

    ```zsh [Terminal]
    brew install flatscrew/rasterflow-tap/rasterflow
    ```

    #### Launch RasterFlow

    ```zsh [Terminal]
    open -a rasterflow
    ```
    ::

  #windows
    ::div{class="flex flex-col items-center py-12 gap-12"}
      :download-button{:version="version" system="windows"}

      ::u-page-grid{class="flex flex-col md:flex-row justify-center"}

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
    ::
  ::
::

::u-page-section
---
title: Changelog
icon: i-lucide-history
description: Keep track of every improvement, fix, and new feature added to RasterFlow over time.
class: dark:bg-neutral-900 pt-12
---
  ::u-changelog-versions
  ---
  indicator-motion: true
  ---
    ::u-changelog-version
    ---
    title: 'RasterFlow {{version}} — Initial Release'
    date: '2025-11-07'
    badge: '{{version}}'
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
