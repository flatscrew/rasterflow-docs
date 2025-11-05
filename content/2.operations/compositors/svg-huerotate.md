---
title: SVG Hue Rotate
description: "SVG color matrix operation svg_huerotate"
links:
  - label: "gegl:svg-huerotate"
    to: "https://gegl.org/operations/gegl-svg-huerotate"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: SVG Hue Rotate
caption: SVG color matrix operation svg_huerotate
src: /images/operations/gegl-svg-huerotate.png
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