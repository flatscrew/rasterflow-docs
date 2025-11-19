---
title: Frosted Glass
description: "Make your image appear as if it were behind frosted glass."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Frosted Glass
src: /images/operations/lb-frosted-glass.png
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
      ::field{name="Spread" type="gint"}
        Spread the frosted glass.  
        :icon{name="i-lucide-puzzle"} Default `50`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `30` • :icon{name="i-lucide-arrow-right"} • `200`. 
        
      ::
      ::field{name="Smooth" type="gint"}
        Smooth the frosted glass.  
        :icon{name="i-lucide-puzzle"} Default `2`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `5`. 
        
      ::
      ::field{name="Frost" type="gdouble"}
        Intensity of the frost effect on the glass.  
        :icon{name="i-lucide-puzzle"} Default `0.15`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Blur behind frost" type="gdouble"}
        Blur the original image behind the frost.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `12.00`. 
        
      ::
      ::field{name="Random seed" type="guint"}
        Noise seed of the frosted glass.  
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `4294967295`. 
        
      ::

::