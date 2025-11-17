---
title: Get RasterFlow.
description: Get the newest release of RasterFlow, powered by GEGL and GTK4.
version: 0.1.2
releaseDate: 17.11.2025
---

::u-page-hero{class="dark:bg-gradient-to-b from-neutral-900 to-neutral-950 -mb-12"}
---
orientation: vertical
---

#title
<span class="text-5xl sm:text-7xl">Get [RasterFlow]{.text-primary}.</span>

#description
Get the newest release of **RasterFlow**, powered by GEGL and GTK4.  
Choose the native build for your platform — Flatpak for Linux, brew for MacOS and installer for.  
Each package includes all dependencies required to start generating procedural images right away.

#links
  ::download-tabs
  #linux
    ::div{class="flex flex-col items-center py-12 gap-12"}
      :download-button{:version="version" system="linux"}

      ::u-page-grid{class="flex flex-col md:flex-row justify-center"}

        ::u-page-feature{:description="releaseDate"}
        ---
        title: Release Date
        icon: i-lucide-calendar
        ---
        ::
        
        ::u-page-feature
        ---
        title: File Size
        description: 4.03MB
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
          text: sha256:d710aeca1d0ddc2aa6bd474d9def44c8a95130c177573bca547ea6a319020a2f
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

    ```bash [Terminal]
    brew install flatscrew/osx/rasterflow
    ```

    #### Launch RasterFlow

    ```bash [Terminal]
    rasterflow
    ```
    ::
    
    ::warning
    Experimental release! Please report any issues during the setup.
    ::

  #windows
    ::div{class="flex flex-col items-center py-12 gap-12"}
      :download-button{:version="version" system="windows"}

      ::u-page-grid{class="flex flex-col md:flex-row justify-center"}

        ::u-page-feature{:description="releaseDate"}
        ---
        title: Release Date
        icon: i-lucide-calendar
        ---
        ::
        
        ::u-page-feature
        ---
        title: File Size
        description: 58MB
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
          text: sha256:4c98a91195f358d1333c05418a07b197ad40c6d992732532230da75368bd08b2
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
    title: 'RasterFlow 0.1.2'
    date: '2025-11-17'
    badge: '0.1.2'
    description: 'MacOS build improvements.'
    ---
    #body
    - Improvements for MacOS build
    ::
  
    ::u-changelog-version
    ---
    title: 'RasterFlow 0.1.1'
    date: '2025-11-15'
    badge: '0.1.1'
    description: 'Small improvements for cross-platform builds.'
    ---
    #body
    - Introduced several improvement around CI build pipelines for Linux, Windows, and MacOS
    ::
  
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
