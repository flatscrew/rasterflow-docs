---
title: SVG Saturate
description: "SVG color matrix operation svg_saturate."
links:
  - label: "gegl:svg-saturate"
    to: "https://gegl.org/operations/gegl-svg-saturate"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: SVG Saturate
caption: SVG color matrix operation svg_saturate.
src: /images/operations/gegl-svg-saturate.png
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
  has-aux: false
  has-output: true
  ---
  ::
::

::collapsible
---
name: Operation properties
---

    ::field-group
      ::field{name="Values" type="gchararray"}
        list of <number>s.  
        :icon{name="i-lucide-puzzle"} Default `""`  
      ::

    ::
::