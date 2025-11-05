---
title: Dst
description: "Porter Duff operation dst (d = cB)"
links:
  - label: "svg:dst"
    to: "https://gegl.org/operations/svg-dst"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Dst
caption: Porter Duff operation dst (d = cB)
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