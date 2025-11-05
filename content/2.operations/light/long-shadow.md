---
title: Long Shadow
description: "Creates a long-shadow effect"
links:
  - label: "gegl:long-shadow"
    to: "https://gegl.org/operations/gegl-long-shadow"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Long Shadow
caption: Creates a long-shadow effect
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
      ::field{name="Style" type="dictionary"}
        Shadow style  
        :icon{name="i-lucide-puzzle"} Default `Finite`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Finite` • `Infinite` • `Fading` • `Fading (fixed length)` 
      ::

      ::field{name="Angle" type="gdouble"}
        Shadow angle  
        :icon{name="i-lucide-puzzle"} Default `45.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-180.00` • :icon{name="i-lucide-arrow-right"} • `180.00`. 
        
      ::
      ::field{name="Length" type="gdouble"}
        Shadow length  
        :icon{name="i-lucide-puzzle"} Default `100.00`  
      ::
      ::field{name="Midpoint" type="gdouble"}
        Shadow fade midpoint  
        :icon{name="i-lucide-puzzle"} Default `100.00`  
      ::
      ::field{name="Midpoint (relative)" type="gdouble"}
        Shadow fade midpoint, as a factor of the shadow length  
        :icon{name="i-lucide-puzzle"} Default `0.50`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Color" type="GeglColor"}
        Shadow color  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Composition" type="dictionary"}
        Output composition  
        :icon{name="i-lucide-puzzle"} Default `Shadow plus image`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Shadow plus image` • `Shadow only` • `Shadow minus image` 
      ::


    ::
::