---
title: Median Blur
description: "Blur resulting from computing the median color in the neighborhood of each pixel."
links:
  - label: "gegl:median-blur"
    to: "https://gegl.org/operations/gegl-median-blur"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Median Blur
caption: Blur resulting from computing the median color in the neighborhood of each pixel.
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
      ::field{name="Neighborhood" type="dictionary"}
        Neighborhood type  
        :icon{name="i-lucide-puzzle"} Default `Circle`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Square` • `Circle` • `Diamond` 
      ::

      ::field{name="Radius" type="gint"}
        Neighborhood radius, a negative value will calculate with inverted percentiles  
        :icon{name="i-lucide-puzzle"} Default `3`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-400` • :icon{name="i-lucide-arrow-right"} • `400`. 
        
      ::
      ::field{name="Percentile" type="gdouble"}
        Neighborhood color percentile  
        :icon{name="i-lucide-puzzle"} Default `50.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `100.00`. 
        
      ::
      ::field{name="Alpha percentile" type="gdouble"}
        Neighborhood alpha percentile  
        :icon{name="i-lucide-puzzle"} Default `50.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `100.00`. 
        
      ::
      ::field{name="Abyss policy" type="dictionary"}
        How image edges are handled  
        :icon{name="i-lucide-puzzle"} Default `Clamp`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `None` • `Clamp` 
      ::

      ::field{name="High precision" type="gboolean"}
        Avoid clipping and quantization (slower)  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::

    ::
::