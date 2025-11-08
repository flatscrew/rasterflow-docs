---
title: Rectangle
description: "A rectangular source of a fixed size with a solid color."
links:
  - label: "gegl:rectangle"
    to: "https://gegl.org/operations/gegl-rectangle"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Rectangle
caption: A rectangular source of a fixed size with a solid color.
src: /images/operations/gegl-rectangle.png
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
      ::field{name="X" type="gdouble"}
        Horizontal position.  
        :icon{name="i-lucide-puzzle"} Default `42.00`  
      ::
      ::field{name="Y" type="gdouble"}
        Vertical position.  
        :icon{name="i-lucide-puzzle"} Default `42.00`  
      ::
      ::field{name="Width" type="gdouble"}
        Horizontal extent.  
        :icon{name="i-lucide-puzzle"} Default `23.00`  
      ::
      ::field{name="Height" type="gdouble"}
        Vertical extent.  
        :icon{name="i-lucide-puzzle"} Default `42.00`  
      ::
      ::field{name="Color" type="GeglColor"}
        Color to render.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::

::