---
title: 
description: "SVG blend operation exclusion (<code>d = (cA * aB + cB * aA - 2 * cA * cB) + cA * (1 - aB) + cB * (1 - aA)</code>)"
links:
  - label: "svg:exclusion"
    to: "https://gegl.org/operations/svg-exclusion"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: 
caption: SVG blend operation exclusion (<code>d = (cA * aB + cB * aA - 2 * cA * cB) + cA * (1 - aB) + cB * (1 - aA)</code>)
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