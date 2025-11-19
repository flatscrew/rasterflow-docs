---
title: Star Patterns
description: "Generates a tiled background of stars with customizable patterns, rotation, panning, and zoom."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Star Patterns
src: /images/operations/ai-lb-star-patterns.png
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
      ::field{name="Star Pattern" type="dictionary"}
        Select the star pattern to use.  
        :icon{name="i-lucide-puzzle"} Default `Hexagonal Grid`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Basic Grid` • `Offset Grid` • `Hexagonal Grid` • `Diagonal Grid` • `Random Scatter` • `Wave Grid` • `Random Big-Small` • `Random Big-Medium-Small` • `Staggered Sizes` 
      ::

      ::field{name="Number of Points" type="gint"}
        Number of points on the star (3 to 12).  
        :icon{name="i-lucide-puzzle"} Default `5`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `3` • :icon{name="i-lucide-arrow-right"} • `12`. 
        
      ::
      ::field{name="Thickness" type="gint"}
        Thickness of the star points: 1 (Thin), 2 (Medium), 3 (Thick).  
        :icon{name="i-lucide-puzzle"} Default `2`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `3`. 
        
      ::
      ::field{name="Star Size" type="gdouble"}
        Size of the stars in pixels.  
        :icon{name="i-lucide-puzzle"} Default `50.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `10.00` • :icon{name="i-lucide-arrow-right"} • `200.00`. 
        
      ::
      ::field{name="Rotation" type="gdouble"}
        Rotation angle of the stars in degrees.  
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
        Zoom level of the stars and tiling grid.  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.10` • :icon{name="i-lucide-arrow-right"} • `5.00`. 
        
      ::
      ::field{name="Star Color" type="GeglColor"}
        Color of the stars (default is yellow).  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Background Color" type="GeglColor"}
        Color of the background (default is purple).  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Transparent Background" type="gboolean"}
        Enable to make the background transparent.  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::

::