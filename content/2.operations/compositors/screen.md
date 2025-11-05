---
title: 
description: SVG blend operation screen (<code>d = cA + cB - cA * cB</code>)
links:
  - label: "svg:screen"
    to: "https://gegl.org/operations/svg-screen"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: 
caption: SVG blend operation screen (<code>d = cA + cB - cA * cB</code>)
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