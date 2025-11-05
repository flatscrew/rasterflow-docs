---
title: Src-in
description: Porter Duff compositing operation src-in (formula:   cA * aB)
links:
  - label: "svg:src-in"
    to: "https://gegl.org/operations/svg-src-in"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Src-in
caption: Porter Duff compositing operation src-in (formula:   cA * aB)
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