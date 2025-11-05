---
title: Symmetric Nearest Neighbor
description: Noise reducing edge preserving blur filter based on Symmetric Nearest Neighbors
links:
  - label: "gegl:snn-mean"
    to: "https://gegl.org/operations/gegl-snn-mean"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Symmetric Nearest Neighbor
caption: Noise reducing edge preserving blur filter based on Symmetric Nearest Neighbors
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
        :icon{name="i-lucide-puzzle"} Default `8`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `100`. 
        
      ::
      ::field{name="Pairs" type="gint"}
        Number of pairs; higher number preserves more acute features  
        :icon{name="i-lucide-puzzle"} Default `2`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `2`. 
        
      ::

    ::
::