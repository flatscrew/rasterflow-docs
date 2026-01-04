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
