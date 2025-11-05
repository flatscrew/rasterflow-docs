---
title: Scale size keep aspect
description: "Scales the buffer to a size, preserving aspect ratio"
links:
  - label: "gegl:scale-size-keepaspect"
    to: "https://gegl.org/operations/gegl-scale-size-keepaspect"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Scale size keep aspect
caption: Scales the buffer to a size, preserving aspect ratio
src: /images/operations/gegl-scale-size-keepaspect.png
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
      ::field{name="Origin-x" type="gdouble"}
        X coordinate of origin  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="Origin-y" type="gdouble"}
        Y coordinate of origin  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="Near-z" type="gdouble"}
        Z coordinate of the near clipping plane  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Sampler" type="dictionary"}
        Sampler used internally  
        :icon{name="i-lucide-puzzle"} Default `Linear`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Nearest` • `Linear` • `Cubic` • `NoHalo` • `LoHalo` 
      ::

      ::field{name="Abyss policy" type="dictionary"}
        How image edges are handled  
        :icon{name="i-lucide-puzzle"} Default `None`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `None` • `Clamp` • `Loop` • `Black` • `White` 
      ::

      ::field{name="X" type="gdouble"}
        Horizontal size  
        :icon{name="i-lucide-puzzle"} Default `-1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-9000.00` • :icon{name="i-lucide-arrow-right"} • `9000.00`. 
        
      ::
      ::field{name="Y" type="gdouble"}
        Vertical size  
        :icon{name="i-lucide-puzzle"} Default `-1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-9000.00` • :icon{name="i-lucide-arrow-right"} • `9000.00`. 
        
      ::

    ::
::