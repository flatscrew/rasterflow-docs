---
title: Cut Out Text Effect
description: "Cut out text effect using GEGL."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Cut Out Text Effect
src: /images/operations/lb-cut-out.png
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
      ::field{name="Color" type="GeglColor"}
        The color to paint over the input.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Color 2" type="GeglColor"}
        The color to paint over the input.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Shadow X" type="gdouble"}
        Horizontal shadow offset.  
        :icon{name="i-lucide-puzzle"} Default `-2.50`  
      ::
      ::field{name="Shadow  Y" type="gdouble"}
        Vertical shadow offset.  
        :icon{name="i-lucide-puzzle"} Default `9.12`  
      ::
      ::field{name="Shadow Blur radius" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `5.00`  
      ::
      ::field{name="Shadow Grow radius" type="gdouble"}
        The distance to expand the shadow before blurring; a negative value will contract the shadow instead.  
        :icon{name="i-lucide-puzzle"} Default `9.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `100.00`. 
        
      ::
      ::field{name="Shadow Color" type="GeglColor"}
        The shadow's color (defaults to 'black').  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Shadow Opacity" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.50`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Top image Overlay" type="gchararray"}
        Source image file path (png, jpg, raw, svg, bmp, tif, ...).  
        :icon{name="i-lucide-puzzle"} Default `""`  
      ::
      ::field{name="Bottom image overlay" type="gchararray"}
        Source image file path (png, jpg, raw, svg, bmp, tif, ...).  
        :icon{name="i-lucide-puzzle"} Default `""`  
      ::
      ::field{name="Black level on bottom image layer" type="gdouble"}
        Adjust the black level.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="Exposure on bottom image layer" type="gdouble"}
        Relative brightness change in stops.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="Color Rotation on bottom image layer" type="gdouble"}
        Hue adjustment.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-180.00` • :icon{name="i-lucide-arrow-right"} • `180.00`. 
        
      ::

::