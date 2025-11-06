---
title: Sinus
description: "Generate complex sinusoidal textures."
links:
  - label: "gegl:sinus"
    to: "https://gegl.org/operations/gegl-sinus"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Sinus
caption: Generate complex sinusoidal textures.
src: /images/operations/gegl-sinus.png
---
::

::collapsible
---
name: Operation pads
---
This operation exposes the following data pads, defining how it receives, processes, and emits image data:

  ::operation-pads
  ---
  has-input: false
  has-aux: false
  has-output: true
  ---
  ::
::

::collapsible
---
name: Operation properties
---

    ::field-group
      ::field{name="X Scale" type="gdouble"}
        Scale value for x axis.  
        :icon{name="i-lucide-puzzle"} Default `15.00`  
      ::
      ::field{name="Y Scale" type="gdouble"}
        Scale value for y axis.  
        :icon{name="i-lucide-puzzle"} Default `15.00`  
      ::
      ::field{name="Complexity" type="gdouble"}
        Complexity factor.  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `15.00`. 
        
      ::
      ::field{name="Random seed" type="guint"}
        
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `4294967295`. 
        
      ::
      ::field{name="Force tiling" type="gboolean"}
        If set, the pattern generated will tile.  
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::
      ::field{name="Distorted" type="gboolean"}
        If set, the pattern will be a little more distorted.  
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::
      ::field{name="Color 1" type="GeglColor"}
        
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Color 2" type="GeglColor"}
        
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Blend Mode" type="dictionary"}
        
        :icon{name="i-lucide-puzzle"} Default `Sinusoidal`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Linear` • `Bilinear` • `Sinusoidal` 
      ::

      ::field{name="Exponent" type="gdouble"}
        Power used to stretch the blend.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-7.50` • :icon{name="i-lucide-arrow-right"} • `7.50`. 
        
      ::
      ::field{name="Width" type="gint"}
        Width of the generated buffer.  
        :icon{name="i-lucide-puzzle"} Default `1024`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `2147483647`. 
        
      ::
      ::field{name="Height" type="gint"}
        Height of the generated buffer.  
        :icon{name="i-lucide-puzzle"} Default `768`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `2147483647`. 
        
      ::

    ::
::