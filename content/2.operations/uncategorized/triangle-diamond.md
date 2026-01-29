---
title: Triangle and Diamond Patterns
description: "Renders various triangle and diamond patterns."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Triangle and Diamond Patterns
src: /images/operations/ai-lb-triangle-diamond.png
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
        Select the triangle or diamond pattern to render.  
        :icon{name="i-lucide-puzzle"} Default `Original Diamond`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Original Diamond` • `Halfway Triangles` • `Nested Triangles` • `Checkerboard Triangles` • `Scaled Diamonds` • `Upside-Down Nested Triangles` • `Offset Diagonal Grid` • `Double Diagonal` • `Rotated Diamonds` • `Diamond Waves` • `Diamond Checkerboard` • `Diamond Gradient` • `Triple Diagonal` • `Shifted Double Diagonal` • `Dense Double Diagonal` 
      ::

      ::field{name="Triangle Size" type="gdouble"}
        Size of each triangle in pixels.  
        :icon{name="i-lucide-puzzle"} Default `50.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `10.00` • :icon{name="i-lucide-arrow-right"} • `200.00`. 
        
      ::
      ::field{name="Rotation" type="gdouble"}
        Rotate the pattern (degrees).  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `360.00`. 
        
      ::
      ::field{name="X Translation" type="gdouble"}
        Move the pattern along the X-axis (pixels).  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-1000.00` • :icon{name="i-lucide-arrow-right"} • `1000.00`. 
        
      ::
      ::field{name="Y Translation" type="gdouble"}
        Move the pattern along the Y-axis (pixels).  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-1000.00` • :icon{name="i-lucide-arrow-right"} • `1000.00`. 
        
      ::
      ::field{name="Triangle Color" type="GeglColor"}
        Color of the triangles (default is white).  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Background Color" type="GeglColor"}
        Color of the background (default is light blue).  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Transparent Background" type="gboolean"}
        Make the background transparent instead of using the background color.  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::
      ::field{name="Apply Noise Reduction" type="gboolean"}
        Enable noise reduction to smooth triangle edges.  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::

::