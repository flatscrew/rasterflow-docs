---
title: 1D Gaussian-blur
description: "Performs an averaging of neighboring pixels with the normal distribution as weighting."
links:
  - label: "gegl:gblur-1d"
    to: "https://gegl.org/operations/gegl-gblur-1d"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: 1D Gaussian-blur
caption: Performs an averaging of neighboring pixels with the normal distribution as weighting.
src: /images/operations/gegl-gblur-1d.png
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
      ::field{name="Size" type="gdouble"}
        Standard deviation (spatial scale factor).  
        :icon{name="i-lucide-puzzle"} Default `1.50`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1500.00`. 
        
      ::
      ::field{name="Orientation" type="dictionary"}
        The orientation of the blur - hor/ver.  
        :icon{name="i-lucide-puzzle"} Default `Horizontal`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Horizontal` • `Vertical` 
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
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::

::