---
title: Displace
description: "Displace pixels as indicated by displacement maps."
links:
  - label: "gegl:displace"
    to: "https://gegl.org/operations/gegl-displace"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Displace
caption: Displace pixels as indicated by displacement maps.
src: /images/operations/gegl-displace.png
---
::

::collapsible
---
name: Operation pads
---
This operation exposes the following data pads, defining how it receives, processes, and emits image data:

  ::operation-pads
  ---
  has-input: true
  has-aux: true
  has-output: true
  ---
  ::
::

::collapsible
---
name: Operation properties
---

    ::field-group
      ::field{name="Displacement mode" type="dictionary"}
        Mode of displacement.  
        :icon{name="i-lucide-puzzle"} Default `Cartesian`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Cartesian` • `Polar` 
      ::

      ::field{name="Sampler" type="dictionary"}
        Type of GeglSampler used to fetch input pixels.  
        :icon{name="i-lucide-puzzle"} Default `Cubic`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Nearest` • `Linear` • `Cubic` • `NoHalo` • `LoHalo` 
      ::

      ::field{name="Abyss policy" type="dictionary"}
        How image edges are handled.  
        :icon{name="i-lucide-puzzle"} Default `Clamp`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `None` • `Clamp` • `Loop` • `Black` • `White` 
      ::

      ::field{name="X displacement" type="gdouble"}
        Displace multiplier for X or radial direction.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-500.00` • :icon{name="i-lucide-arrow-right"} • `500.00`. 
        
      ::
      ::field{name="Y displacement" type="gdouble"}
        Displace multiplier for Y or tangent (degrees) direction.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-500.00` • :icon{name="i-lucide-arrow-right"} • `500.00`. 
        
      ::
      ::field{name="Center displacement" type="gboolean"}
        Center the displacement around a specified point.  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::
      ::field{name="Center X" type="gdouble"}
        X coordinate of the displacement center.  
        :icon{name="i-lucide-puzzle"} Default `0.50`  
      ::
      ::field{name="Center Y" type="gdouble"}
        Y coordinate of the displacement center.  
        :icon{name="i-lucide-puzzle"} Default `0.50`  
      ::

    ::
::