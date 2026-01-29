---
title: Piecewise Blend
description: "Blend a chain of inputs using a mask."
links:
  - label: "gegl:piecewise-blend"
    to: "https://gegl.org/operations/gegl-piecewise-blend"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Piecewise Blend
src: /images/operations/gegl-piecewise-blend.png
---
::

## Operation pads
This operation exposes the following data pads, defining how it receives, processes, and emits image data:

::operation-pads
---
has-input: true
has-aux: true
has-output: true
---
::

## Operation properties
::field-group
      ::field{name="Levels" type="gint"}
        Number of blend levels.  
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `16`. 
        
      ::
      ::field{name="Gamma" type="gdouble"}
        Gamma factor for blend-level spacing.  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
      ::
      ::field{name="Linear mask" type="gboolean"}
        Use linear mask values.  
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::

::