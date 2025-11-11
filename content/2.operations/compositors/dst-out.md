---
title: Dst-out
description: "Porter Duff operation dst-out (d = cB * (1.0f - aA))."
links:
  - label: "svg:dst-out"
    to: "https://gegl.org/operations/svg-dst-out"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Dst-out
caption: Porter Duff operation dst-out (d = cB * (1.0f - aA)).
src: /images/operations/svg-dst-out.png
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
      ::field{name="SRGB" type="gboolean"}
        Use sRGB gamma instead of linear.  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::

::