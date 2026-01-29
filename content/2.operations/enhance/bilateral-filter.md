---
title: Bilateral Filter
description: "Like a gaussian blur; but where the contribution for each neighborhood pixel is also weighted by the color difference with the original center pixel."
links:
  - label: "gegl:bilateral-filter"
    to: "https://gegl.org/operations/gegl-bilateral-filter"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Bilateral Filter
src: /images/operations/gegl-bilateral-filter.png
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
      ::field{name="Blur radius" type="gdouble"}
        Radius of square pixel region, (width and height will be radius*2+1).  
        :icon{name="i-lucide-puzzle"} Default `4.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1000.00`. 
        
      ::
      ::field{name="Edge preservation" type="gdouble"}
        Amount of edge preservation.  
        :icon{name="i-lucide-puzzle"} Default `8.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `100.00`. 
        
      ::

::