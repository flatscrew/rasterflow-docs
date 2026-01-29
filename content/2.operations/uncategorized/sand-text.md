---
title: Grains of Sand - Text Styling filter
description: "GEGL styles your text like grains of sand."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Grains of Sand - Text Styling filter
src: /images/operations/lb-sand-text.png
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
      ::field{name="Lightness" type="gdouble"}
        Lightness adjustment.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `15.00`. 
        
      ::
      ::field{name="Color 1" type="GeglColor"}
        The color to paint over the input.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Horizontal spread 1" type="gint"}
        Horizontal spread amount.  
        :icon{name="i-lucide-puzzle"} Default `20`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `15` • :icon{name="i-lucide-arrow-right"} • `60`. 
        
      ::
      ::field{name="Vertical spread 1" type="gint"}
        Vertical spread amount.  
        :icon{name="i-lucide-puzzle"} Default `20`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `15` • :icon{name="i-lucide-arrow-right"} • `60`. 
        
      ::
      ::field{name="Random seed" type="guint"}
        
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `4294967295`. 
        
      ::
      ::field{name="Tile size" type="gdouble"}
        Average diameter of each tile (in pixels).  
        :icon{name="i-lucide-puzzle"} Default `1.70`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1.50` • :icon{name="i-lucide-arrow-right"} • `2.00`. 
        
      ::
      ::field{name="Color 2" type="GeglColor"}
        The color to paint over the input.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Horizontal spread 2" type="gint"}
        Horizontal spread amount.  
        :icon{name="i-lucide-puzzle"} Default `180`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `10` • :icon{name="i-lucide-arrow-right"} • `512`. 
        
      ::
      ::field{name="Vertical spread 2" type="gint"}
        Vertical spread amount.  
        :icon{name="i-lucide-puzzle"} Default `150`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `10` • :icon{name="i-lucide-arrow-right"} • `512`. 
        
      ::
      ::field{name="Random seed 2" type="guint"}
        
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `4294967295`. 
        
      ::
      ::field{name="Tile size 2" type="gdouble"}
        Average diameter of each tile (in pixels).  
        :icon{name="i-lucide-puzzle"} Default `1.70`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1.50` • :icon{name="i-lucide-arrow-right"} • `2.00`. 
        
      ::

::