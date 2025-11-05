---
title: Ripple
description: "Displace pixels in a ripple pattern"
links:
  - label: "gegl:ripple"
    to: "https://gegl.org/operations/gegl-ripple"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Ripple
caption: Displace pixels in a ripple pattern
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
      ::field{name="Amplitude" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `25.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1000.00`. 
        
      ::
      ::field{name="Period" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `200.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1000.00`. 
        
      ::
      ::field{name="Phase shift" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-1.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Angle" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-180.00` • :icon{name="i-lucide-arrow-right"} • `180.00`. 
        
      ::
      ::field{name="Resampling method" type="dictionary"}
                :icon{name="i-lucide-puzzle"} Default `Cubic`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Nearest` • `Linear` • `Cubic` • `NoHalo` • `LoHalo` 
      ::

      ::field{name="Wave type" type="dictionary"}
                :icon{name="i-lucide-puzzle"} Default `Sine`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Sine` • `Triangle` • `Sawtooth` 
      ::

      ::field{name="Abyss policy" type="dictionary"}
        How image edges are handled  
        :icon{name="i-lucide-puzzle"} Default `None`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `None` • `Clamp` • `Loop` • `Black` • `White` 
      ::

      ::field{name="Tileable" type="gboolean"}
        Retain tilebility  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::

    ::
::