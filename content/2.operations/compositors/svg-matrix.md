---
title: SVG Matrix
description: "SVG color matrix operation svg_matrix"
links:
  - label: "gegl:svg-matrix"
    to: "https://gegl.org/operations/gegl-svg-matrix"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: SVG Matrix
caption: SVG color matrix operation svg_matrix
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
        list of <number>s  
        :icon{name="i-lucide-puzzle"} Default `""`  
      ::

    ::
::