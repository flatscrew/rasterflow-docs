---
title: Gradient Map
description: "Applies a color gradient."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Gradient Map
src: /images/operations/port-gradient-map.png
---
::

## Operation pads
This operation exposes the following data pads, defining how it receives, processes, and emits image data:

::operation-pads
---
has-input: true
has-aux: false
has-output: true
---
::

## Operation properties
::field-group
      ::field{name="Settings" type="dictionary"}
        
        :icon{name="i-lucide-puzzle"} Default `Simple (show 2 colors)`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Simple (show 2 colors)` • `Advance (show all 5 colors)` 
      ::

      ::field{name="Color 1" type="GeglColor"}
        
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Stop 1" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-2.00` • :icon{name="i-lucide-arrow-right"} • `5.00`. 
        
      ::
      ::field{name="Color 2" type="GeglColor"}
        
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Stop 2" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-2.00` • :icon{name="i-lucide-arrow-right"} • `5.00`. 
        
      ::
      ::field{name="Color 3" type="GeglColor"}
        
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Stop 3" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-2.00` • :icon{name="i-lucide-arrow-right"} • `5.00`. 
        
      ::
      ::field{name="Color 4" type="GeglColor"}
        
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Stop 4" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-2.00` • :icon{name="i-lucide-arrow-right"} • `5.00`. 
        
      ::
      ::field{name="Color 5" type="GeglColor"}
        
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Stop 5" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-2.00` • :icon{name="i-lucide-arrow-right"} • `5.00`. 
        
      ::
      ::field{name="SRGB" type="gboolean"}
        
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::

::