---
title: Color Assimilation Grid
description: "Turn image grayscale and overlay an oversaturated grid - through color assimilation happening in the human visual system, for some grid scales this produces the illusion that the grayscale grid cells themselves also have color."
links:
  - label: "gegl:color-assimilation-grid"
    to: "https://gegl.org/operations/gegl-color-assimilation-grid"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Color Assimilation Grid
src: /images/operations/gegl-color-assimilation-grid.png
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
      ::field{name="Grid size" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `23.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `150.00`. 
        
      ::
      ::field{name="Saturation" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `2.50`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `30.00`. 
        
      ::
      ::field{name="Angle" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `45.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-180.00` • :icon{name="i-lucide-arrow-right"} • `180.00`. 
        
      ::
      ::field{name="Line thickness" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.40`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::

::