---
title: Get RasterFlow.
description: Get the newest release of RasterFlow, powered by GEGL and GTK4.
version: 0.1.5
releaseDate: 07.12.2025
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
          text: sha256:9e51db0989cc79289efb509f43c6e736efe5ae2d20f4010cb852e36d5fcee1e6
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
    
    
    #### Upgrade RasterFlow

    In order to upgrade to latest version if you have already RasterFlow installed simply put:
    
    ```bash [Terminal]
    brew update
    brew upgrade
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
        description: 59.6MB
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
          text: sha256:680225ccaca12d4f91a349bfea29b5ea63f5358aefd0b5fbd9f7313196d06d87
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
    title: 'RasterFlow 0.1.5'
    date: '2025-12-17'
    badge: '0.1.5'
    description: 'Enhanced user interaction and cross-platform stability.'
    to: 'https://github.com/flatscrew/rasterflow/releases/tag/v0.1.5'
    ---
    #body
    ![New scale widget](/images/changelog/new-scale-widget-trimmed.png){:width="700" sizes="100vw md:700px" class="w-auto"}
    
    - Introduced a new custom scale widget used across all numeric properties, providing more precise control and a consistent UI experience,
    - Added infinite graph panning for smoother exploration of large node setups,
    - Fixed a Windows issue causing conflicts with GIMP when setting the `BABL_PATH` and `GEGL_PATH` environment variables,
    ::
  
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
