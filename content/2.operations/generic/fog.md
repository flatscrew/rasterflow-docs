---
title: Fog or Cloud Effect
description: "Create a fog or cloud effect using GEGL."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Fog or Cloud Effect
src: /images/operations/lb-fog.png
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
      ::field{name="Turbulence of Fog" type="gdouble"}
        Fog Levels.  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `2.60`. 
        
      ::
      ::field{name="Random seed" type="guint"}
        
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `4294967295`. 
        
      ::
      ::field{name="Isolate Fog patches" type="gdouble"}
        Reduce Fog.  
        :icon{name="i-lucide-puzzle"} Default `0.10`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `0.50`. 
        
      ::
      ::field{name="Blur" type="gdouble"}
        mild gaussian blur.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Color" type="GeglColor"}
        The color to paint over the input.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Width" type="gint"}
        Width of the generated buffer.  
        :icon{name="i-lucide-puzzle"} Default `1024`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `2147483647`. 
        
      ::
      ::field{name="Height" type="gint"}
        Height of the generated buffer.  
        :icon{name="i-lucide-puzzle"} Default `768`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `2147483647`. 
        
      ::
      ::field{name="Opacity" type="gdouble"}
        Global opacity value that is always used on top of the optional auxiliary input buffer.  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.60` • :icon{name="i-lucide-arrow-right"} • `1.50`. 
        
      ::

::