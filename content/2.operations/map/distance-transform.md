---
title: Distance Transform
description: "Calculate a distance transform."
links:
  - label: "gegl:distance-transform"
    to: "https://gegl.org/operations/gegl-distance-transform"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Distance Transform
src: /images/operations/gegl-distance-transform.png
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
      ::field{name="Metric" type="dictionary"}
        Metric to use for the distance calculation.  
        :icon{name="i-lucide-puzzle"} Default `Euclidean`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Euclidean` • `Manhattan` • `Chebyshev` 
      ::

      ::field{name="Edge handling" type="dictionary"}
        How areas outside the input are considered when calculating distance.  
        :icon{name="i-lucide-puzzle"} Default `Below threshold`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Above threshold` • `Below threshold` 
      ::

      ::field{name="Threshold low" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Threshold high" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Grayscale Averaging" type="gint"}
        Number of computations for grayscale averaging.  
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `1000`. 
        
      ::
      ::field{name="Normalize" type="gboolean"}
        Normalize output to range 0.0 to 1.0.  
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::

::