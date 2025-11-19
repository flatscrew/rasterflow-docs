---
title: Value Propagate
description: "Propagate certain values to neighboring pixels. Erode and dilate any color or opacity."
links:
  - label: "gegl:value-propagate"
    to: "https://gegl.org/operations/gegl-value-propagate"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Value Propagate
src: /images/operations/gegl-value-propagate.png
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
      ::field{name="Mode" type="dictionary"}
        Mode of value propagation.  
        :icon{name="i-lucide-puzzle"} Default `More white (larger value)`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `More white (larger value)` • `More black (smaller value)` • `Middle value to peaks` • `Color to peaks` • `Only color` • `More opaque` • `More transparent` 
      ::

      ::field{name="Lower threshold" type="gdouble"}
        The minimum difference in value at which to propagate a pixel.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Upper threshold" type="gdouble"}
        The maximum difference in value at which to propagate a pixel.  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Propagating rate" type="gdouble"}
        The strength with which to propagate a pixel to its neighbors.  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Color" type="GeglColor"}
        Color to use for the "Only color" and "Color to peaks" modes.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="To top" type="gboolean"}
        Propagate to top.  
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::
      ::field{name="To left" type="gboolean"}
        Propagate to left.  
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::
      ::field{name="To right" type="gboolean"}
        Propagate to right.  
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::
      ::field{name="To bottom" type="gboolean"}
        Propagate to bottom.  
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::
      ::field{name="Propagating value channel" type="gboolean"}
        Whether to propagate a pixel's color.  
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::
      ::field{name="Propagating alpha channel" type="gboolean"}
        Whether to propagate a pixel's opacity.  
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::

::