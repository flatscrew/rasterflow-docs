---
title: Supernova
description: "This plug-in produces an effect like a supernova burst. The amount of the light effect is approximately in proportion to 1/r, where r is the distance from the center of the star."
links:
  - label: "gegl:supernova"
    to: "https://gegl.org/operations/gegl-supernova"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Supernova
src: /images/operations/gegl-supernova.png
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
        X coordinates of the center of supernova.  
        :icon{name="i-lucide-puzzle"} Default `0.50`  
      ::
      ::field{name="Center Y" type="gdouble"}
        Y coordinates of the center of supernova.  
        :icon{name="i-lucide-puzzle"} Default `0.50`  
      ::
      ::field{name="Radius" type="gint"}
        Radius of supernova.  
        :icon{name="i-lucide-puzzle"} Default `20`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `20000`. 
        
      ::
      ::field{name="Number of spokes" type="gint"}
        Number of spokes.  
        :icon{name="i-lucide-puzzle"} Default `100`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `1024`. 
        
      ::
      ::field{name="Random hue" type="gint"}
        Random hue.  
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `360`. 
        
      ::
      ::field{name="Color" type="GeglColor"}
        The color of supernova.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Random seed" type="guint"}
        The random seed for spokes and random hue.  
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `4294967295`. 
        
      ::

::