---
title: Dst-atop
description: "Porter Duff operation dst-atop (d = cB * aA + cA * (1.0f - aB))"
links:
  - label: "svg:dst-atop"
    to: "https://gegl.org/operations/svg-dst-atop"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Dst-atop
caption: Porter Duff operation dst-atop (d = cB * aA + cA * (1.0f - aB))
src: /images/operations/svg-dst-atop.png
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