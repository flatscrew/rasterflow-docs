---
title: SVG File Loader
description: "Load an SVG file using librsvg."
links:
  - label: "gegl:svg-load"
    to: "https://gegl.org/operations/gegl-svg-load"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: SVG File Loader
caption: Load an SVG file using librsvg.
src: /images/operations/gegl-svg-load.png
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
      ::field{name="URI" type="gchararray"}
        URI for file to load.  
        :icon{name="i-lucide-puzzle"} Default `""`  
      ::
      ::field{name="Width" type="gint"}
        Width for rendered image.  
        :icon{name="i-lucide-puzzle"} Default `-1`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-2147483648` • :icon{name="i-lucide-arrow-right"} • `2147483647`. 
        
      ::
      ::field{name="Height" type="gint"}
        Height for rendered image.  
        :icon{name="i-lucide-puzzle"} Default `-1`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-2147483648` • :icon{name="i-lucide-arrow-right"} • `2147483647`. 
        
      ::

::