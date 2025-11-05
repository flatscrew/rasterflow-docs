---
title: Color-burn
description: SVG blend operation color-burn (<code>if cA * aB + cB * aA <= aA * aB: d = cA * (1 - aB) + cB * (1 - aA) otherwise: d = (cA == 0 ? 1 : (aA * (cA * aB + cB * aA - aA * aB) / cA) + cA * (1 - aB) + cB * (1 - aA))</code>)
links:
  - label: "svg:color-burn"
    to: "https://gegl.org/operations/svg-color-burn"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Color-burn
caption: SVG blend operation color-burn (<code>if cA * aB + cB * aA <= aA * aB: d = cA * (1 - aB) + cB * (1 - aA) otherwise: d = (cA == 0 ? 1 : (aA * (cA * aB + cB * aA - aA * aB) / cA) + cA * (1 - aB) + cB * (1 - aA))</code>)
---
::

::collapsible
---
name: Operation pads
---
This operation exposes the following data pads, defining how it receives, processes, and emits image data:

  ::operation-pads
  ---
  has-input: true
  has-aux: true
  has-output: true
  ---
  ::
::

::collapsible
---
name: Operation properties
---

    ::field-group
      ::field{name="sRGB" type="gboolean"}
        Use sRGB gamma instead of linear  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::

    ::
::