---
title: Color-dodge
description: "SVG blend operation color-dodge (<code>if cA * aB + cB * aA >= aA * aB: d = aA * aB + cA * (1 - aB) + cB * (1 - aA) otherwise: d = (cA == aA ? 1 : cB * aA / (aA == 0 ? 1 : 1 - cA / aA)) + cA * (1 - aB) + cB * (1 - aA)</code>)"
links:
  - label: "svg:color-dodge"
    to: "https://gegl.org/operations/svg-color-dodge"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Color-dodge
caption: SVG blend operation color-dodge (<code>if cA * aB + cB * aA >= aA * aB: d = aA * aB + cA * (1 - aB) + cB * (1 - aA) otherwise: d = (cA == aA ? 1 : cB * aA / (aA == 0 ? 1 : 1 - cA / aA)) + cA * (1 - aB) + cB * (1 - aA)</code>)
src: /images/operations/svg-color-dodge.png
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