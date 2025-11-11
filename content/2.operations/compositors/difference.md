---
title: 
description: "SVG blend operation difference (<code>d = cA + cB - 2 * (MIN (cA * aB, cB * aA))</code>)."
links:
  - label: "svg:difference"
    to: "https://gegl.org/operations/svg-difference"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: 
caption: SVG blend operation difference (<code>d = cA + cB - 2 * (MIN (cA * aB, cB * aA))</code>).
src: /images/operations/svg-difference.png
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