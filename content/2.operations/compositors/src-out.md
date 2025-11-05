---
title: Src-out
description: Porter Duff operation src-out (d = cA * (1.0f - aB))
links:
  - label: "svg:src-out"
    to: "https://gegl.org/operations/svg-src-out"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Src-out
caption: Porter Duff operation src-out (d = cA * (1.0f - aB))
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