---
title: Xor
description: "Porter Duff operation xor (d = cA * (1.0f - aB)+ cB * (1.0f - aA))"
links:
  - label: "svg:xor"
    to: "https://gegl.org/operations/svg-xor"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Xor
caption: Porter Duff operation xor (d = cA * (1.0f - aB)+ cB * (1.0f - aA))
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