---
title: Normal compositing
description: "Porter Duff operation over (also known as normal mode, and src-over) (d = cA + cB * (1 - aA))"
links:
  - label: "svg:src-over"
    to: "https://gegl.org/operations/svg-src-over"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Normal compositing
caption: Porter Duff operation over (also known as normal mode, and src-over) (d = cA + cB * (1 - aA))
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