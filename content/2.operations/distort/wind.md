---
title: Wind
description: "Wind-like bleed effect."
links:
  - label: "gegl:wind"
    to: "https://gegl.org/operations/gegl-wind"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Wind
src: /images/operations/gegl-wind.png
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
      ::field{name="Style" type="dictionary"}
        Style of effect.  
        :icon{name="i-lucide-puzzle"} Default `Wind`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Wind` • `Blast` 
      ::

      ::field{name="Direction" type="dictionary"}
        Direction of the effect.  
        :icon{name="i-lucide-puzzle"} Default `Left`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Left` • `Right` • `Top` • `Bottom` 
      ::

      ::field{name="Edge Affected" type="dictionary"}
        Edge behavior.  
        :icon{name="i-lucide-puzzle"} Default `Leading`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Both` • `Leading` • `Trailing` 
      ::

      ::field{name="Threshold" type="gint"}
        Higher values restrict the effect to fewer areas of the image.  
        :icon{name="i-lucide-puzzle"} Default `10`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `50`. 
        
      ::
      ::field{name="Strength" type="gint"}
        Higher values increase the magnitude of the effect.  
        :icon{name="i-lucide-puzzle"} Default `10`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `100`. 
        
      ::
      ::field{name="Random seed" type="guint"}
        
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `4294967295`. 
        
      ::

::