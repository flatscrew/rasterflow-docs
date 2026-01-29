---
title: Recursive Square Patterns
description: "Generates 7 different recursive square patterns including fractal designs and geometric variations with rotation and offset controls."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Recursive Square Patterns
src: /images/operations/ai-lb-recursive-square-patterns.png
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
        Select from 7 different recursive square patterns.  
        :icon{name="i-lucide-puzzle"} Default `Default Square`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Default Square` • `Double Square` • `Fractal Square` • `Wave Square` • `Square Spiral` • `Dotted Square` • `Complex Square Fret` 
      ::

      ::field{name="Pattern Color" type="GeglColor"}
        Color of the square pattern.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Background Color" type="GeglColor"}
        Background color for the pattern.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Pattern Scale" type="gdouble"}
        Size of each square element.  
        :icon{name="i-lucide-puzzle"} Default `70.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `10.00` • :icon{name="i-lucide-arrow-right"} • `400.00`. 
        
      ::
      ::field{name="Line Width" type="gdouble"}
        Width of the pattern lines.  
        :icon{name="i-lucide-puzzle"} Default `4.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1.00` • :icon{name="i-lucide-arrow-right"} • `40.00`. 
        
      ::
      ::field{name="Complexity Level" type="gint"}
        Number of nested levels in fractal patterns.  
        :icon{name="i-lucide-puzzle"} Default `2`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `5`. 
        
      ::
      ::field{name="Wave Amplitude" type="gdouble"}
        Amplitude of wave patterns.  
        :icon{name="i-lucide-puzzle"} Default `0.30`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.10` • :icon{name="i-lucide-arrow-right"} • `0.80`. 
        
      ::
      ::field{name="Spiral Thickness" type="gdouble"}
        Thickness of the spiral pattern lines.  
        :icon{name="i-lucide-puzzle"} Default `0.20`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.05` • :icon{name="i-lucide-arrow-right"} • `0.50`. 
        
      ::
      ::field{name="Rotation" type="gdouble"}
        Rotation angle in degrees.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `360.00`. 
        
      ::
      ::field{name="Offset X" type="gdouble"}
        Horizontal offset position.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-500.00` • :icon{name="i-lucide-arrow-right"} • `500.00`. 
        
      ::
      ::field{name="Offset Y" type="gdouble"}
        Vertical offset position.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-500.00` • :icon{name="i-lucide-arrow-right"} • `500.00`. 
        
      ::

::