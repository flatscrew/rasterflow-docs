---
title: Concentric Shapes
description: "Generates multicolored concentric shapes (circles, squares, diamonds, hexagons, octagons, or decagons) with up to eight customizable colors."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Concentric Shapes
src: /images/operations/ai-lb-concentric-shapes.png
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
      ::field{name="Number of Colors" type="dictionary"}
        Number of colors to use in the concentric shapes.  
        :icon{name="i-lucide-puzzle"} Default `5 Colors`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `2 Colors` • `3 Colors` • `4 Colors` • `5 Colors` • `6 Colors` • `7 Colors` • `8 Colors` 
      ::

      ::field{name="Shape Type" type="dictionary"}
        Type of shape to use for concentric patterns.  
        :icon{name="i-lucide-puzzle"} Default `Circles`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Circles` • `Squares` • `Diamonds` • `Hexagons` • `Octagons` • `Decagons` 
      ::

      ::field{name="Shape Color 1" type="GeglColor"}
        First color of the concentric shapes.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Shape Color 2" type="GeglColor"}
        Second color of the concentric shapes.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Shape Color 3" type="GeglColor"}
        Third color of the concentric shapes.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Shape Color 4" type="GeglColor"}
        Fourth color of the concentric shapes.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Shape Color 5" type="GeglColor"}
        Fifth color of the concentric shapes.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Shape Color 6" type="GeglColor"}
        Sixth color of the concentric shapes.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Shape Color 7" type="GeglColor"}
        Seventh color of the concentric shapes.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Shape Color 8" type="GeglColor"}
        Eighth color of the concentric shapes.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Background Color" type="GeglColor"}
        Color of the background (not visible due to full shape coverage).  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Shape Spacing" type="gdouble"}
        Spacing between concentric shapes.  
        :icon{name="i-lucide-puzzle"} Default `70.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `10.00` • :icon{name="i-lucide-arrow-right"} • `150.00`. 
        
      ::
      ::field{name="Shape Thickness" type="gdouble"}
        Thickness of the concentric shapes relative to spacing.  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1.00` • :icon{name="i-lucide-arrow-right"} • `2.00`. 
        
      ::
      ::field{name="X" type="gdouble"}
        X position of the shape center (relative to image width).  
        :icon{name="i-lucide-puzzle"} Default `0.50`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-10.00` • :icon{name="i-lucide-arrow-right"} • `10.00`. 
        
      ::
      ::field{name="Y" type="gdouble"}
        Y position of the shape center (relative to image height).  
        :icon{name="i-lucide-puzzle"} Default `0.50`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-10.00` • :icon{name="i-lucide-arrow-right"} • `10.00`. 
        
      ::
      ::field{name="Skew" type="gdouble"}
        Skews the shape by stretching it along the horizontal axis.  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1.00` • :icon{name="i-lucide-arrow-right"} • `2.00`. 
        
      ::
      ::field{name="Rotate" type="gdouble"}
        Rotation angle of the shapes in degrees.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `360.00`. 
        
      ::

::