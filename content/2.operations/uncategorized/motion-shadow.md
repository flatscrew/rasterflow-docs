---
title: Motion Shadow
description: "Motion Shadow."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Motion Shadow
src: /images/operations/lb-motion-shadow.png
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
      ::field{name="Horizontal Shadow" type="gdouble"}
        Motion blur for the horizontal shadow.  
        :icon{name="i-lucide-puzzle"} Default `5.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1500.00`. 
        
      ::
      ::field{name="Vertical Shadow" type="gdouble"}
        Motion blur for the vertical shadow.  
        :icon{name="i-lucide-puzzle"} Default `50.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1500.00`. 
        
      ::
      ::field{name="Hyper Opacity" type="gdouble"}
        Hyper opacity value.  
        :icon{name="i-lucide-puzzle"} Default `2.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `4.00`. 
        
      ::
      ::field{name="Color" type="GeglColor"}
        The color to paint over the input.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Filter" type="dictionary"}
        How the gaussian kernel is discretized.  
        :icon{name="i-lucide-puzzle"} Default `Auto`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Auto` • `FIR` • `IIR` 
      ::

      ::field{name="Abyss policy" type="dictionary"}
        How image edges are handled.  
        :icon{name="i-lucide-puzzle"} Default `None`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `None` • `Clamp` • `Black` • `White` 
      ::

      ::field{name="Clip to the input extent" type="gboolean"}
        Should the output extent be clipped to the input extent.  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::

::