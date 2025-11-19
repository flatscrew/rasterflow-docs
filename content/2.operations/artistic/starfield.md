---
title: Starfield
description: "Render a Starry Night with GEGL."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Starfield
src: /images/operations/lb-starfield.png
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
      ::field{name="Add background Stars and enhance color" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.04`  
      ::
      ::field{name="Amount of Stars" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.06`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.04` • :icon{name="i-lucide-arrow-right"} • `0.07`. 
        
      ::
      ::field{name="Random seed" type="guint"}
        
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `4294967295`. 
        
      ::
      ::field{name="Make Stars Brighter" type="gdouble"}
        Highest luminance level in output.  
        :icon{name="i-lucide-puzzle"} Default `4.15`  
      ::
      ::field{name="Size range of Stars" type="gdouble"}
        Slide up to only show large stars. Slide down to only show small stars.  
        :icon{name="i-lucide-puzzle"} Default `14.00`  
      ::
      ::field{name="Blur Stars" type="gdouble"}
        Blur the stars. An Alt use for this can make snow.  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `7.00`. 
        
      ::
      ::field{name="Add Color to Stars" type="gdouble"}
        Scale, strength of effect.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Zoom Motion Blur" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::

::