---
title: Tiled Background Image
description: "Make a background tile, rotate and resize it."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Tiled Background Image
src: /images/operations/lb-tilebg.png
---
::

## Operation pads
This operation exposes the following data pads, defining how it receives, processes, and emits image data:

::operation-pads
---
has-input: true
has-aux: false
has-output: true
---
::

## Operation properties
::field-group
      ::field{name="Image Upload" type="gchararray"}
        
        :icon{name="i-lucide-puzzle"} Default `""`  
      ::
      ::field{name="Rotate" type="gdouble"}
        Rotate (degrees).  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-180.00` • :icon{name="i-lucide-arrow-right"} • `180.00`. 
        
      ::
      ::field{name="Zoom" type="gdouble"}
        Zoom in and out of image tiles.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-99.00` • :icon{name="i-lucide-arrow-right"} • `100.00`. 
        
      ::

::