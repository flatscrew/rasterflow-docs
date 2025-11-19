---
title: Whirl Pinch
description: "Distort an image by whirling and pinching."
links:
  - label: "gegl:whirl-pinch"
    to: "https://gegl.org/operations/gegl-whirl-pinch"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Whirl Pinch
src: /images/operations/gegl-whirl-pinch.png
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
      ::field{name="Whirl" type="gdouble"}
        Whirl angle (degrees).  
        :icon{name="i-lucide-puzzle"} Default `90.00`  
      ::
      ::field{name="Pinch" type="gdouble"}
        Pinch amount.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-1.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Radius" type="gdouble"}
        Radius (1.0 is the largest circle that fits in the image, and 2.0 goes all the way to the corners).  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `2.00`. 
        
      ::

::