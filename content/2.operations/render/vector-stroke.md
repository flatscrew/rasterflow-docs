---
title: Vector Stroke
description: "Renders a vector stroke."
links:
  - label: "gegl:vector-stroke"
    to: "https://gegl.org/operations/gegl-vector-stroke"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Vector Stroke
src: /images/operations/gegl-vector-stroke.png
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
        Color of paint to use for stroking.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Width" type="gdouble"}
        The width of the brush used to stroke the path.  
        :icon{name="i-lucide-puzzle"} Default `2.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `200.00`. 
        
      ::
      ::field{name="Opacity" type="gdouble"}
        Opacity of stroke, note, does not behave like SVG since at the moment stroking is done using an airbrush tool.  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-2.00` • :icon{name="i-lucide-arrow-right"} • `2.00`. 
        
      ::
      ::field{name="Transform" type="gchararray"}
        svg style description of transform.  
        :icon{name="i-lucide-puzzle"} Default `""`  
      ::
      ::field{name="Vector" type="GeglPath"}
        A GeglVector representing the path of the stroke.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::

::