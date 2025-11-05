---
title: Warp
description: Compute a relative displacement mapping from a stroke
links:
  - label: "gegl:warp"
    to: "https://gegl.org/operations/gegl-warp"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Warp
caption: Compute a relative displacement mapping from a stroke
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
      ::field{name="Strength" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `50.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `100.00`. 
        
      ::
      ::field{name="Size" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `40.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1.00` • :icon{name="i-lucide-arrow-right"} • `10000.00`. 
        
      ::
      ::field{name="Hardness" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.50`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Spacing" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.01`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `100.00`. 
        
      ::
      ::field{name="Stroke" type="GeglPath"}
        
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Behavior" type="dictionary"}
        Behavior of the op  
        :icon{name="i-lucide-puzzle"} Default `Move pixels`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Move pixels` • `Grow area` • `Shrink area` • `Swirl clockwise` • `Swirl counter-clockwise` • `Erase warping` • `Smooth warping` 
      ::


    ::
::