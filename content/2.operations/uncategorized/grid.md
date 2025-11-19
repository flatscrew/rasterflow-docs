---
title: Grid
description: "Renders a grid with configurable spacing, line width, color, rotation, translations, optional background fill, and various grid styles."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Grid
src: /images/operations/ai-lb-grid.png
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
      ::field{name="Grid Type" type="dictionary"}
        Select the type of grid to render.  
        :icon{name="i-lucide-puzzle"} Default `Standard Grid`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Standard Grid` • `Dashed Grid` • `Diagonal Grid` • `Double Grid` • `Wavy Grid` • `Random Offset Grid` • `Gradient Grid` • `Nested Grid` 
      ::

      ::field{name="X spacing" type="gint"}
        Horizontal spacing between grid lines.  
        :icon{name="i-lucide-puzzle"} Default `155`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `512`. 
        
      ::
      ::field{name="Y spacing" type="gint"}
        Vertical spacing between grid lines.  
        :icon{name="i-lucide-puzzle"} Default `155`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `512`. 
        
      ::
      ::field{name="Line width" type="gint"}
        Width of the grid lines in pixels.  
        :icon{name="i-lucide-puzzle"} Default `50`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `100`. 
        
      ::
      ::field{name="Rotation" type="gdouble"}
        Rotate the grid (degrees).  
        :icon{name="i-lucide-puzzle"} Default `135.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `360.00`. 
        
      ::
      ::field{name="X Translation" type="gdouble"}
        Move the grid along the X-axis (pixels).  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-1000.00` • :icon{name="i-lucide-arrow-right"} • `1000.00`. 
        
      ::
      ::field{name="Y Translation" type="gdouble"}
        Move the grid along the Y-axis (pixels).  
        :icon{name="i-lucide-puzzle"} Default `-150.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-1000.00` • :icon{name="i-lucide-arrow-right"} • `1000.00`. 
        
      ::
      ::field{name="Grid Color" type="GeglColor"}
        Color of the grid lines (defaults to white).  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Fill Background" type="gboolean"}
        Enable to fill the background with a solid color.  
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::
      ::field{name="Background Color" type="GeglColor"}
        Color of the background when Fill Background is enabled (defaults to red).  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::

::