---
title: Stroke
description: "Creates a outline border for transparent images."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Stroke
src: /images/operations/lb-outline.png
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
      ::field{name="Blur radius" type="gdouble"}
        A very mild blur to puff the outline.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `3.00`. 
        
      ::
      ::field{name="Grow shape" type="dictionary"}
        The internal median shape of the outline.  
        :icon{name="i-lucide-puzzle"} Default `Circle`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Square` • `Circle` • `Diamond` 
      ::

      ::field{name="Grow radius" type="gint"}
        The size of the outline.  
        :icon{name="i-lucide-puzzle"} Default `12`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `200`. 
        
      ::
      ::field{name="Color" type="GeglColor"}
        The outline's color (defaults to 'black').  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Opacity" type="gdouble"}
        Opacity of the outline.  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::

::