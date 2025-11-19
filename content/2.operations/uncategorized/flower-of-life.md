---
title: Flower of Life
description: "Renders a seamless Flower of Life pattern with adjustable variations, tile size, circle radius, outline width, rotation, offsets, and colors."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Flower of Life
src: /images/operations/ai-lb-flower-of-life.png
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
      ::field{name="Variation" type="dictionary"}
        .  
        :icon{name="i-lucide-puzzle"} Default `Classic`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Classic (Aligned)` • `Sparse Grid (Aligned)` • `Rotated Centers (Aligned)` • `Scaled Circles (Aligned)` • `Vesica Highlight (Aligned)` • `Inner Circles (Aligned)` • `Outer Rings (Aligned)` • `Skewed Grid (Aligned)` • `Wavy Circles (Aligned)` • `Random Offset (Aligned)` • `Classic` • `Dense` • `Expanded` • `Spiral` • `Scaled Circles` 
      ::

      ::field{name="Fill Mode" type="dictionary"}
        Select the fill style.  
        :icon{name="i-lucide-puzzle"} Default `Outlines`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Outlines` • `Filled Circles` 
      ::

      ::field{name="Tile Size" type="gdouble"}
        Size of the repeating tile in pixels.  
        :icon{name="i-lucide-puzzle"} Default `500.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `50.00` • :icon{name="i-lucide-arrow-right"} • `1000.00`. 
        
      ::
      ::field{name="Radius" type="gdouble"}
        Size of each circle.  
        :icon{name="i-lucide-puzzle"} Default `0.50`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Outline Width" type="gdouble"}
        Thickness of lines in 'Outlines' mode.  
        :icon{name="i-lucide-puzzle"} Default `0.05`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `0.50`. 
        
      ::
      ::field{name="Rotation" type="gdouble"}
        Rotate the pattern (degrees).  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `360.00`. 
        
      ::
      ::field{name="X" type="gdouble"}
        .  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-50.00` • :icon{name="i-lucide-arrow-right"} • `50.00`. 
        
      ::
      ::field{name="Y" type="gdouble"}
        .  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-50.00` • :icon{name="i-lucide-arrow-right"} • `50.00`. 
        
      ::
      ::field{name="Tileable" type="gboolean"}
        Enable to make the Flower of Life pattern form a grid of repeating patterns.  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::
      ::field{name="Foreground Color" type="GeglColor"}
        Color of the circles or outlines.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Background Color" type="GeglColor"}
        Color of the background.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::

::