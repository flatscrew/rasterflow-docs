---
title: Day One
description: "First version of Beaver's layerfx plugin (recreated). This is how Beaver's layerfx plugin appeared on its debut date in May 11 2022."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Day One
src: /images/operations/lb-original.png
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
      ::field{name="Optional Color Overlay" type="GeglColor"}
        
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Bevel Depth" type="gint"}
        Bevel presence/Emboss Depth.  
        :icon{name="i-lucide-puzzle"} Default `1`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `100`. 
        
      ::
      ::field{name="Grow shape" type="dictionary"}
        The shape to expand or contract the stroke in.  
        :icon{name="i-lucide-puzzle"} Default `Circle`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Square` • `Circle` • `Diamond` 
      ::

      ::field{name="Outline's Blur radius" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `2.00`. 
        
      ::
      ::field{name="Outline's Grow radius" type="gint"}
        The distance to expand the stroke before blurring; a negative value will contract the stroke instead.  
        :icon{name="i-lucide-puzzle"} Default `12`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `100`. 
        
      ::
      ::field{name="Outline's Opacity" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Outline's Color" type="GeglColor"}
        The shadow's color (defaults to 'white').  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Shadow/Glow X" type="gdouble"}
        Horizontal shadow offset.  
        :icon{name="i-lucide-puzzle"} Default `10.00`  
      ::
      ::field{name="Shadow/Glow Y" type="gdouble"}
        Vertical shadow offset.  
        :icon{name="i-lucide-puzzle"} Default `10.00`  
      ::
      ::field{name="Shadow/Glow Color" type="GeglColor"}
        The shadow's color (defaults to 'black').  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Shadow/Glow Opacity" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.50`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Shadow/Glow Grow radius" type="gint"}
        The distance to expand the shadow before blurring; a negative value will contract the shadow instead.  
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-100` • :icon{name="i-lucide-arrow-right"} • `100`. 
        
      ::
      ::field{name="Shadow/Glow Blur radius" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `10.00`  
      ::

::