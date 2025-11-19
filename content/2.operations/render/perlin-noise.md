---
title: Perlin Noise
description: "Perlin noise generator."
links:
  - label: "gegl:perlin-noise"
    to: "https://gegl.org/operations/gegl-perlin-noise"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Perlin Noise
src: /images/operations/gegl-perlin-noise.png
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
      ::field{name="Alpha" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `1.20`  
      ::
      ::field{name="Scale" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `1.80`  
      ::
      ::field{name="Z offset" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `-1.00`  
      ::
      ::field{name="Iterations" type="gint"}
        
        :icon{name="i-lucide-puzzle"} Default `3`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `20`. 
        
      ::

::