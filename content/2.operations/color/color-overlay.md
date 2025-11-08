---
title: Color Overlay
description: "Paint a color overlay over the input, preserving its transparency."
links:
  - label: "gegl:color-overlay"
    to: "https://gegl.org/operations/gegl-color-overlay"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Color Overlay
caption: Paint a color overlay over the input, preserving its transparency.
src: /images/operations/gegl-color-overlay.png
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
      ::field{name="SRGB" type="gboolean"}
        Use sRGB gamma instead of linear.  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::

::