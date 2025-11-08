---
title: Src-atop
description: "Porter Duff operation src-atop (d = cA * aB + cB * (1.0f - aA))."
links:
  - label: "svg:src-atop"
    to: "https://gegl.org/operations/svg-src-atop"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Src-atop
caption: Porter Duff operation src-atop (d = cA * aB + cB * (1.0f - aA)).
src: /images/operations/svg-src-atop.png
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