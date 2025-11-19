---
title: Color
description: "Generates a buffer entirely filled with the specified color, use gegl:crop to get smaller dimensions."
links:
  - label: "gegl:color"
    to: "https://gegl.org/operations/gegl-color"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Color
src: /images/operations/gegl-color.png
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
      ::field{name="Color" type="GeglColor"}
        The color to render (defaults to 'black').  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Babl Format" type="gpointer"}
        The babl format of the output.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::

::