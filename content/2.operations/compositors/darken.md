---
title: 
description: "SVG blend operation darken (<code>d = MIN (cA * aB, cB * aA) + cA * (1 - aB) + cB * (1 - aA)</code>)."
links:
  - label: "svg:darken"
    to: "https://gegl.org/operations/svg-darken"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: 
caption: SVG blend operation darken (<code>d = MIN (cA * aB, cB * aA) + cA * (1 - aB) + cB * (1 - aA)</code>).
src: /images/operations/svg-darken.png
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
      ::field{name="SRGB" type="gboolean"}
        Use sRGB gamma instead of linear.  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::

    ::
::