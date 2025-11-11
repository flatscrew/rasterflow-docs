---
title: Circular Motion Blur
description: "Circular motion blur."
links:
  - label: "gegl:motion-blur-circular"
    to: "https://gegl.org/operations/gegl-motion-blur-circular"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Circular Motion Blur
caption: Circular motion blur.
src: /images/operations/gegl-motion-blur-circular.png
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
      ::field{name="Center X" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.50`  
      ::
      ::field{name="Center Y" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.50`  
      ::
      ::field{name="Angle" type="gdouble"}
        Rotation blur angle. A large angle may take some time to render.  
        :icon{name="i-lucide-puzzle"} Default `5.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `360.00`. 
        
      ::

::