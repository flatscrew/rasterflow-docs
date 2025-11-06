---
title: Reset origin
description: "Translate top-left to 0,0."
links:
  - label: "gegl:reset-origin"
    to: "https://gegl.org/operations/gegl-reset-origin"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Reset origin
caption: Translate top-left to 0,0.
src: /images/operations/gegl-reset-origin.png
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
        X coordinate of origin.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="Origin-y" type="gdouble"}
        Y coordinate of origin.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="Near-z" type="gdouble"}
        Z coordinate of the near clipping plane.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Sampler" type="dictionary"}
        Sampler used internally.  
        :icon{name="i-lucide-puzzle"} Default `Linear`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Nearest` • `Linear` • `Cubic` • `NoHalo` • `LoHalo` 
      ::


    ::
::