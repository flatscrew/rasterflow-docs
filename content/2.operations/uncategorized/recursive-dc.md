---
title: Recursive diamonds/circles
description: "Render a background of recursive diamonds or circles."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Recursive diamonds/circles
src: /images/operations/lb-recursive-dc.png
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
        Shape to select.  
        :icon{name="i-lucide-puzzle"} Default `Diamond`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Diamond` • `Circle` 
      ::

      ::field{name="Color of the background" type="GeglColor"}
        Color of the background.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Size (reverse controls)" type="gdouble"}
        Size of the recursive shapes, lower numbers are larger.  
        :icon{name="i-lucide-puzzle"} Default `0.02`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.01` • :icon{name="i-lucide-arrow-right"} • `0.06`. 
        
      ::
      ::field{name="Internal clusters/amount of recursive shapes" type="gint"}
        The amount of recursive shapes.  
        :icon{name="i-lucide-puzzle"} Default `12`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `3` • :icon{name="i-lucide-arrow-right"} • `20`. 
        
      ::
      ::field{name="Sharpen" type="gdouble"}
        Sharpen the recursive shapes.  
        :icon{name="i-lucide-puzzle"} Default `2.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `5.00`. 
        
      ::
      ::field{name="Random placement seed" type="guint"}
        Seed of the shapes, to move them around randomly.  
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `4294967295`. 
        
      ::
      ::field{name="Soft Glow brightness" type="gdouble"}
        Increase the brightness and soft glow.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `0.25`. 
        
      ::

::