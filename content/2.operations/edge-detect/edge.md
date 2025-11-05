---
title: Edge Detection
description: "Several simple methods for detecting edges"
links:
  - label: "gegl:edge"
    to: "https://gegl.org/operations/gegl-edge"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Edge Detection
caption: Several simple methods for detecting edges
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
      ::field{name="Algorithm" type="dictionary"}
        Edge detection algorithm  
        :icon{name="i-lucide-puzzle"} Default `Sobel`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Sobel` • `Prewitt compass` • `Gradient` • `Roberts` • `Differential` • `Laplace` 
      ::

      ::field{name="Amount" type="gdouble"}
        Edge detection amount  
        :icon{name="i-lucide-puzzle"} Default `2.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1.00` • :icon{name="i-lucide-arrow-right"} • `10.00`. 
        
      ::
      ::field{name="Border behavior" type="dictionary"}
        Edge detection behavior  
        :icon{name="i-lucide-puzzle"} Default `Clamp`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `None` • `Clamp` • `Loop` • `Black` • `White` 
      ::


    ::
::