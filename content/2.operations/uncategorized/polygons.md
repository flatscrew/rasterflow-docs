---
title: Polygon Generator
description: "Generator simple polygonal backgrounds with GEGL."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Polygon Generator
src: /images/operations/lb-polygons.png
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
      ::field{name="Scale of Polygons" type="gdouble"}
        The scale of the noise function.  
        :icon{name="i-lucide-puzzle"} Default `0.10`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.05` • :icon{name="i-lucide-arrow-right"} • `0.25`. 
        
      ::
      ::field{name="Random seed" type="guint"}
        The random seed for the noise function.  
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `4294967295`. 
        
      ::
      ::field{name="Light Rotation" type="gdouble"}
        Light angle (degrees).  
        :icon{name="i-lucide-puzzle"} Default `2.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `360.00`. 
        
      ::
      ::field{name="Depth of Polygons" type="gint"}
        Filter width.  
        :icon{name="i-lucide-puzzle"} Default `30`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `6` • :icon{name="i-lucide-arrow-right"} • `50`. 
        
      ::
      ::field{name="Color" type="GeglColor"}
        The color to paint over the input.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::

::