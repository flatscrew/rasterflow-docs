---
title: Action Lines
description: "Render line rays that circle the image."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Action Lines
src: /images/operations/lb-action-lines.png
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
      ::field{name="Center X" type="gdouble"}
        X coordinates of the center of lines.  
        :icon{name="i-lucide-puzzle"} Default `0.50`  
      ::
      ::field{name="Center Y" type="gdouble"}
        Y coordinates of the center of lines.  
        :icon{name="i-lucide-puzzle"} Default `0.50`  
      ::
      ::field{name="Color" type="GeglColor"}
        Select color of the lines.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Radius" type="gint"}
        Radius of Action Lines.  
        :icon{name="i-lucide-puzzle"} Default `3200`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `800` • :icon{name="i-lucide-arrow-right"} • `10000`. 
        
      ::
      ::field{name="Increase lines and rotate" type="gint"}
        Adds more lines and rotates the effect .  
        :icon{name="i-lucide-puzzle"} Default `700`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `380` • :icon{name="i-lucide-arrow-right"} • `1024`. 
        
      ::
      ::field{name="Random seed" type="guint"}
        The random seed for lines.  
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `4294967295`. 
        
      ::
      ::field{name="Opacity" type="gdouble"}
        Increase the opacity of the lines.  
        :icon{name="i-lucide-puzzle"} Default `2.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.60` • :icon{name="i-lucide-arrow-right"} • `3.00`. 
        
      ::

::