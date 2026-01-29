---
title: Gimp Layer Shadow
description: "Makes a shadow/glow meant to be used on individual Gimp layers. Duplicate your alpha channel present layer. Now apply this filter. Now the shadow is a layer of its own and can be moved using Gimp's move tool."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Gimp Layer Shadow
src: /images/operations/lb-shadow.png
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
      ::field{name="X Horizontal Movability" type="gdouble"}
        Horizontal shadow offset.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="Y Veritical Movability" type="gdouble"}
        Vertical shadow offset.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="Shadow Blur Radius" type="gdouble"}
        Blur the shadow. At very low settings the shadow will be solid and have outline properties.  
        :icon{name="i-lucide-puzzle"} Default `23.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1500.00`. 
        
      ::
      ::field{name="Grow shape" type="dictionary"}
        The base shape to expand the shadow in.  
        :icon{name="i-lucide-puzzle"} Default `Circle`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Square` • `Circle` • `Diamond` 
      ::

      ::field{name="Shadow Grow radius" type="gdouble"}
        The distance to expand the shadow.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `100.00`. 
        
      ::
      ::field{name="Color" type="GeglColor"}
        The color of the shadow.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Shadow Opacity" type="gdouble"}
        HyperOpacity of the shadow.  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `2.00`. 
        
      ::

::