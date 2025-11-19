---
title: Heart Patterns
description: "Generates a tiled background of hearts with customizable patterns, rotation, panning, and zoom."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Heart Patterns
src: /images/operations/ai-lb-heart-patterns.png
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
      ::field{name="Heart Pattern" type="dictionary"}
        Select the heart pattern to use.  
        :icon{name="i-lucide-puzzle"} Default `Diagonal Grid`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Basic Grid` • `Offset Grid` • `Hexagonal Grid` • `Diagonal Grid` • `Wave Grid` • `Staggered Sizes` 
      ::

      ::field{name="Outline Style" type="gint"}
        Outline style of the heart outline: 1 (Filled), 2 (Medium Outline), 3 (Thick Outline).  
        :icon{name="i-lucide-puzzle"} Default `1`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `3`. 
        
      ::
      ::field{name="Heart Size" type="gdouble"}
        Size of the hearts in pixels.  
        :icon{name="i-lucide-puzzle"} Default `50.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `10.00` • :icon{name="i-lucide-arrow-right"} • `200.00`. 
        
      ::
      ::field{name="Rotation" type="gdouble"}
        Rotation angle of the hearts in degrees.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-180.00` • :icon{name="i-lucide-arrow-right"} • `180.00`. 
        
      ::
      ::field{name="X Pan" type="gdouble"}
        Horizontal offset of the tiled pattern.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-100.00` • :icon{name="i-lucide-arrow-right"} • `100.00`. 
        
      ::
      ::field{name="Y Pan" type="gdouble"}
        Vertical offset of the tiled pattern.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-100.00` • :icon{name="i-lucide-arrow-right"} • `100.00`. 
        
      ::
      ::field{name="Zoom" type="gdouble"}
        Zoom level of the hearts and tiling grid.  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.10` • :icon{name="i-lucide-arrow-right"} • `5.00`. 
        
      ::
      ::field{name="Pointiness" type="gdouble"}
        Adjusts the sharpness of the heart's bottom point.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-0.50` • :icon{name="i-lucide-arrow-right"} • `0.50`. 
        
      ::
      ::field{name="Lobe Roundness" type="gdouble"}
        Controls the roundness of the heart's lobes.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-0.50` • :icon{name="i-lucide-arrow-right"} • `0.50`. 
        
      ::
      ::field{name="Heart Color" type="GeglColor"}
        Color of the hearts.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Background Color" type="GeglColor"}
        Color of the background.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Transparent Background" type="gboolean"}
        Enable to make the background transparent.  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::

::