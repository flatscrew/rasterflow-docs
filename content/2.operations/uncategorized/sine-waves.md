---
title: Sine Wave Patterns
description: "Renders seamless sine wave-based patterns, with adjustable tile size, line width, rotation, x/y offsets, and colors."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Sine Wave Patterns
src: /images/operations/ai-lb-sine-waves.png
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
        :icon{name="i-lucide-puzzle"} Default `Sine Wave Bands`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Sine Wave Bands` • `Sine Wave Zigzag` • `Sine Wave Sharp` • `Sine Wave Folds` • `Sine Wave Kinks` • `Sine Wave Braids` • `Sine Wave Crests` • `Sine Wave Fringes` • `Sine Wave Ripples` • `Sine Wave Vortices` • `Sine Wave Isolated Bubbles` 
      ::

      ::field{name="Tile Size" type="gdouble"}
        Size of the repeating tile in pixels.  
        :icon{name="i-lucide-puzzle"} Default `500.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `50.00` • :icon{name="i-lucide-arrow-right"} • `4000.00`. 
        
      ::
      ::field{name="Line Width" type="gdouble"}
        Adjust the thickness of the pattern lines.  
        :icon{name="i-lucide-puzzle"} Default `0.70`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.01` • :icon{name="i-lucide-arrow-right"} • `3.00`. 
        
      ::
      ::field{name="Rotation" type="gdouble"}
        Rotate the pattern (degrees).  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `360.00`. 
        
      ::
      ::field{name="X Offset" type="gdouble"}
        Horizontal shift of the pattern (0.0 to 1.0).  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Y Offset" type="gdouble"}
        Vertical shift of the pattern (0.0 to 1.0).  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
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