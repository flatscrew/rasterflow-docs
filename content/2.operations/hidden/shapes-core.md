---
title: Shapes Core
description: "Renders various shapes with customizable color, scale, width, height, rotation, and shape-specific adjustments."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Shapes Core
src: /images/operations/ai-lb-shapes-core.png
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
      ::field{name="Shape" type="dictionary"}
        The shape to render.  
        :icon{name="i-lucide-puzzle"} Default `Heart`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Ellipse` • `Rectangle` • `Triangle` • `Diamond` • `Heart` • `Star` • `Flower` • `Even Polygons` • `Arrow` • `Cross` • `Semicircle` • `Trapezoid` • `Uneven Polygons` • `Hexagram` • `Crescent` • `Parallelogram` • `Oval` • `Ring` • `Chevron` • `Quarter Circle` • `Right Triangle` 
      ::

      ::field{name="Uneven Polygon Sides" type="gint"}
        Number of sides: 1 = Pentagon (5), 2 = Heptagon (7), 3 = Nonagon (9).  
        :icon{name="i-lucide-puzzle"} Default `1`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `3`. 
        
      ::
      ::field{name="Shape Color" type="GeglColor"}
        Color of the shape (default is red).  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Overall Scale" type="gdouble"}
        Overall scale of the shape size relative to the canvas.  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.10` • :icon{name="i-lucide-arrow-right"} • `5.00`. 
        
      ::
      ::field{name="Width Scale" type="gdouble"}
        Horizontal scale of the shape to adjust its width.  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.50` • :icon{name="i-lucide-arrow-right"} • `2.00`. 
        
      ::
      ::field{name="Height Scale" type="gdouble"}
        Vertical scale of the shape to adjust its height.  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.50` • :icon{name="i-lucide-arrow-right"} • `2.00`. 
        
      ::
      ::field{name="Rotation" type="gdouble"}
        Rotation of the shape in degrees.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `360.00`. 
        
      ::
      ::field{name="Pointiness" type="gdouble"}
        Adjusts the sharpness of the shape's points (for Hearts, Stars, and Flowers).  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-0.50` • :icon{name="i-lucide-arrow-right"} • `0.50`. 
        
      ::
      ::field{name="Lobe Roundness" type="gdouble"}
        Controls the roundness of the shape's lobes (for Hearts).  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-0.50` • :icon{name="i-lucide-arrow-right"} • `0.50`. 
        
      ::
      ::field{name="Points" type="gint"}
        Number of points on the Star or Flower.  
        :icon{name="i-lucide-puzzle"} Default `5`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `5` • :icon{name="i-lucide-arrow-right"} • `10`. 
        
      ::
      ::field{name="Even Polygon Sides" type="gint"}
        Number of sides: 1 = Hexagon (6), 2 = Octagon (8), 3 = Decagon (10), 4 = Duodecagon (12).  
        :icon{name="i-lucide-puzzle"} Default `1`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `4`. 
        
      ::
      ::field{name="Trapezoid Top Width" type="gint"}
        Width of the trapezoid's top side: 1 = narrow, 2 = medium, 3 = wide.  
        :icon{name="i-lucide-puzzle"} Default `1`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `3`. 
        
      ::
      ::field{name="X" type="gdouble"}
        X position of the shape center (relative to image width).  
        :icon{name="i-lucide-puzzle"} Default `0.50`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-1.00` • :icon{name="i-lucide-arrow-right"} • `2.00`. 
        
      ::
      ::field{name="Y" type="gdouble"}
        Y position of the shape center (relative to image height).  
        :icon{name="i-lucide-puzzle"} Default `0.50`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-1.00` • :icon{name="i-lucide-arrow-right"} • `2.00`. 
        
      ::
      ::field{name="Square to Rectangle" type="gdouble"}
        Adjusts the length of the rectangle (1.0 = square, higher values = longer rectangle).  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1.00` • :icon{name="i-lucide-arrow-right"} • `6.00`. 
        
      ::
      ::field{name="Ring Thickness" type="gdouble"}
        Adjusts the thickness of the ring (0.1 = thickest, 0.9 = thinnest).  
        :icon{name="i-lucide-puzzle"} Default `0.50`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::

::