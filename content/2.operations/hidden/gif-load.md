---
title: GIF File Loader
description: "GIF image loader."
links:
  - label: "gegl:gif-load"
    to: "https://gegl.org/operations/gegl-gif-load"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: GIF File Loader
caption: GIF image loader.
src: /images/operations/gegl-gif-load.png
---
::

## Operation pads
This operation exposes the following data pads, defining how it receives, processes, and emits image data:

::operation-pads
---
has-input: false
has-aux: false
has-output: true
---
::

## Operation properties
::field-group
      ::field{name="File" type="gchararray"}
        Path of file to load.  
        :icon{name="i-lucide-puzzle"} Default `""`  
      ::
      ::field{name="Frame" type="gint"}
        frame number to decode.  
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-2147483648` • :icon{name="i-lucide-arrow-right"} • `2147483647`. 
        
      ::
      ::field{name="Frames" type="gint"}
        Number of frames in gif animation.  
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-2147483648` • :icon{name="i-lucide-arrow-right"} • `2147483647`. 
        
      ::
      ::field{name="Frame-delay" type="gint"}
        Delay in ms for last decoded frame.  
        :icon{name="i-lucide-puzzle"} Default `100`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-2147483648` • :icon{name="i-lucide-arrow-right"} • `2147483647`. 
        
      ::

::