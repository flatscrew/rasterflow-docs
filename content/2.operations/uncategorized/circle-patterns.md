---
title: Circle Patterns
description: "Renders various tiled circle patterns."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Circle Patterns
src: /images/operations/ai-lb-circle-patterns.png
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
      ::field{name="Circle Pattern" type="dictionary"}
        Select the circle pattern style.  
        :icon{name="i-lucide-puzzle"} Default `Basic Grid`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Basic Grid` • `Offset Grid` • `Hexagonal Grid` • `Random Scatter` • `Ripple Circles` • `Diagonal Grid` • `Staggered Sizes` 
      ::

      ::field{name="Circle Radius" type="gdouble"}
        Radius of the circle in pixels.  
        :icon{name="i-lucide-puzzle"} Default `50.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `10.00` • :icon{name="i-lucide-arrow-right"} • `200.00`. 
        
      ::
      ::field{name="Circle Color" type="GeglColor"}
        Color of the circle (default is white).  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Enable Background" type="gboolean"}
        Enable or disable the background color; when disabled, background is transparent.  
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::
      ::field{name="Background Color" type="GeglColor"}
        Color of the background (default is light blue).  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Draw Outline" type="gboolean"}
        Enable to draw an outline around the circle.  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::
      ::field{name="Outline Thickness" type="gdouble"}
        Thickness of the circle outline in pixels.  
        :icon{name="i-lucide-puzzle"} Default `2.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1.00` • :icon{name="i-lucide-arrow-right"} • `20.00`. 
        
      ::
      ::field{name="Outline Color" type="GeglColor"}
        Color of the circle outline (default is black).  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::

::