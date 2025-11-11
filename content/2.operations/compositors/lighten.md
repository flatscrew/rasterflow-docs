---
title: 
description: "SVG blend operation lighten (<code>d = MAX (cA * aB, cB * aA) + cA * (1 - aB) + cB * (1 - aA)</code>)."
links:
  - label: "svg:lighten"
    to: "https://gegl.org/operations/svg-lighten"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: 
caption: SVG blend operation lighten (<code>d = MAX (cA * aB, cB * aA) + cA * (1 - aB) + cB * (1 - aA)</code>).
src: /images/operations/svg-lighten.png
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