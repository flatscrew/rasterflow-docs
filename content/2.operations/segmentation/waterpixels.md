---
title: Waterpixels
description: "Superpixels based on the watershed transformation"
links:
  - label: "gegl:waterpixels"
    to: "https://gegl.org/operations/gegl-waterpixels"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Waterpixels
caption: Superpixels based on the watershed transformation
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
      ::field{name="Superpixels size" type="gint"}
        
        :icon{name="i-lucide-puzzle"} Default `32`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `8` • :icon{name="i-lucide-arrow-right"} • `2147483647`. 
        
      ::
      ::field{name="Gradient smoothness" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1000.00`. 
        
      ::
      ::field{name="Spatial regularization" type="gint"}
        trade-off between superpixel regularity and adherence to object boundaries  
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `50`. 
        
      ::
      ::field{name="Superpixels color" type="dictionary"}
        How to fill superpixels  
        :icon{name="i-lucide-puzzle"} Default `Average`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Average` • `Random` 
      ::


    ::
::