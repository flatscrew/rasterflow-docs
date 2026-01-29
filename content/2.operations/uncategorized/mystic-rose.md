---
title: Mystic Rose
description: "Renders a Mystic Rose pattern or creative variations, optionally tiled in a grid with adjustable position and connection tuning."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Mystic Rose
src: /images/operations/ai-lb-mystic-rose.png
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
      ::field{name="Variation" type="dictionary"}
        Select a variation of the Mystic Rose pattern.  
        :icon{name="i-lucide-puzzle"} Default `Classic Mystic Rose`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Classic Mystic Rose` • `Wavy Rose` • `Clustered Rose` • `Grid Rose` • `Offset Rings` • `Dense Core` • `Random Links` • `Knotted Rose` • `Ripple Rose` • `Swirl Rose` • `Cross Links` 
      ::

      ::field{name="Number of Points" type="gint"}
        Number of vertices in the Mystic Rose.  
        :icon{name="i-lucide-puzzle"} Default `12`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `3` • :icon{name="i-lucide-arrow-right"} • `50`. 
        
      ::
      ::field{name="Line Thickness" type="gdouble"}
        Thickness of the Mystic Rose lines.  
        :icon{name="i-lucide-puzzle"} Default `5.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.50` • :icon{name="i-lucide-arrow-right"} • `10.00`. 
        
      ::
      ::field{name="Rose Color" type="GeglColor"}
        Color of the Mystic Rose lines.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Enable Background Color" type="gboolean"}
        Enable or disable the background color.  
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::
      ::field{name="Background Color" type="GeglColor"}
        Color of the background (only visible if enabled).  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Rotation" type="gdouble"}
        Rotation angle of the Mystic Rose in degrees.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `360.00`. 
        
      ::
      ::field{name="Scale" type="gdouble"}
        Scale of the Mystic Rose (1.0 is full size, 0.5 is half size, etc.).  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.10` • :icon{name="i-lucide-arrow-right"} • `3.00`. 
        
      ::
      ::field{name="Tileable" type="gboolean"}
        Enable to make the Mystic Rose pattern form a grid of repeating patterns.  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::
      ::field{name="X Offset" type="gdouble"}
        Horizontal offset of the Mystic Rose pattern (in pixels).  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-1000.00` • :icon{name="i-lucide-arrow-right"} • `1000.00`. 
        
      ::
      ::field{name="Y Offset" type="gdouble"}
        Vertical offset of the Mystic Rose pattern (in pixels).  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-1000.00` • :icon{name="i-lucide-arrow-right"} • `1000.00`. 
        
      ::
      ::field{name="Inner Radius" type="gdouble"}
        Radius of the inner circle as a percentage of the outer radius.  
        :icon{name="i-lucide-puzzle"} Default `100.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `100.00`. 
        
      ::
      ::field{name="Tuning" type="gdouble"}
        Adjusts the step distance for connecting vertices (0 to use variation-based connections).  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `100.00`. 
        
      ::

::