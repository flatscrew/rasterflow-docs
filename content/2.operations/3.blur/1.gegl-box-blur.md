---
title: Box Blur
description: Blur resulting from averaging the colors of a square neighborhood.
links:
  - label: "gegl:box-blur"
    to: "https://gegl.org/operations/gegl-box-blur"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Box Blur
caption: Blur resulting from averaging the colors of a square neighborhood.
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
      ::field{name="Radius" type="gint"}
        Radius of square pixel region, (width and height will be radius*2+1)  
        :icon{name="i-lucide-puzzle"} Default `4`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `1000`. 
        
      ::

    ::
::