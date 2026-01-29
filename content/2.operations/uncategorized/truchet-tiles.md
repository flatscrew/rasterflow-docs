---
title: Truchet Tiles
description: "Generates artistic Truchet tile patterns with multiple sophisticated designs."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Truchet Tiles
src: /images/operations/ai-lb-truchet-tiles.png
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
      ::field{name="Pattern Style" type="dictionary"}
        Style of Truchet tiles to generate.  
        :icon{name="i-lucide-puzzle"} Default `Classic Lines`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Classic Lines` • `Quarter Arcs` • `Lines` • `Sine Waves` • `X Crosses` • `Triangular` • `Diamond Grid` • `Kaleidoscope` • `Zigzag` • `Spirals` • `Dots and Lines` • `Nested Squares` 
      ::

      ::field{name="Random seed" type="guint"}
        The random seed for the noise function.  
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `4294967295`. 
        
      ::
      ::field{name="Tile Size" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `60.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `4.00` • :icon{name="i-lucide-arrow-right"} • `300.00`. 
        
      ::
      ::field{name="Thickness" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `7.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1.00` • :icon{name="i-lucide-arrow-right"} • `60.00`. 
        
      ::
      ::field{name="Background Color" type="GeglColor"}
        Background color.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Foreground Color" type="GeglColor"}
        Foreground color for the pattern.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Transparent Background" type="gboolean"}
        Make the background transparent instead of using the background color.  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::

::