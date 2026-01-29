---
title: Pattern Collection 2
description: "Renders a collection of seamless, small-scale geometric patterns with adjustable size, rotation, skew, and colors."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Pattern Collection 2
src: /images/operations/ai-lb-pattern-collection-2.png
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
      ::field{name="Pattern" type="dictionary"}
        Select the pattern to render.  
        :icon{name="i-lucide-puzzle"} Default `Micro Grid`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Micro Grid` • `Curved Lattice` • `Mini Waves` • `Arc Weave` • `Triangle Tiles` • `Woven Strips` • `Offset Squares` • `Grid Diamonds` • `Wave Triangles` • `Shifted Grid` • `Zigzag Tiles` • `Double Wave Grid` • `Circle Arcs` • `Double Triangles` • `Diamond Cross` • `Net` • `Crossed Squares` • `Tilted Zigzag` • `Diamond Layers` • `Layered Squares` • `Triangle Weave` • `Flowing Curves` • `Wavy Grid` • `Arc Fans` • `Curved Cross` • `Curved Diamonds` • `Angled Bands` • `Folded Grid` • `Jagged Lines` • `Triangle Bands` • `Skewed Cross` • `Dot Grid` • `Offset Dots` • `Diamond Dots` • `Clustered Dots` 
      ::

      ::field{name="Tile Size" type="gdouble"}
        Size of the repeating tile in pixels.  
        :icon{name="i-lucide-puzzle"} Default `350.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `50.00` • :icon{name="i-lucide-arrow-right"} • `1500.00`. 
        
      ::
      ::field{name="Line Width" type="gdouble"}
        Adjust the thickness of the pattern lines or size of dots.  
        :icon{name="i-lucide-puzzle"} Default `2.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `6.00`. 
        
      ::
      ::field{name="Rotation" type="gdouble"}
        Rotate the pattern (degrees).  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `360.00`. 
        
      ::
      ::field{name="Skew X" type="gdouble"}
        Horizontal skew of the pattern (degrees).  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-45.00` • :icon{name="i-lucide-arrow-right"} • `45.00`. 
        
      ::
      ::field{name="Skew Y" type="gdouble"}
        Vertical skew of the pattern (degrees).  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-45.00` • :icon{name="i-lucide-arrow-right"} • `45.00`. 
        
      ::
      ::field{name="Foreground Color" type="GeglColor"}
        Color of the pattern shapes.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Background Color" type="GeglColor"}
        Color of the background.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Transparent Background" type="gboolean"}
        Make the background transparent instead of using the background color.  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::

::