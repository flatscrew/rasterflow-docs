---
title: Fractal Trace
description: "Transform the image with the fractals"
links:
  - label: "gegl:fractal-trace"
    to: "https://gegl.org/operations/gegl-fractal-trace"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Fractal Trace
caption: Transform the image with the fractals
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
      ::field{name="Fractal type" type="dictionary"}
                :icon{name="i-lucide-puzzle"} Default `Mandelbrot`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Mandelbrot` • `Julia` 
      ::

      ::field{name="X1" type="gdouble"}
        X1 value, position  
        :icon{name="i-lucide-puzzle"} Default `-1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-50.00` • :icon{name="i-lucide-arrow-right"} • `50.00`. 
        
      ::
      ::field{name="X2" type="gdouble"}
        X2 value, position  
        :icon{name="i-lucide-puzzle"} Default `0.50`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-50.00` • :icon{name="i-lucide-arrow-right"} • `50.00`. 
        
      ::
      ::field{name="Y1" type="gdouble"}
        Y1 value, position  
        :icon{name="i-lucide-puzzle"} Default `-1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-50.00` • :icon{name="i-lucide-arrow-right"} • `50.00`. 
        
      ::
      ::field{name="Y2" type="gdouble"}
        Y2 value, position  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-50.00` • :icon{name="i-lucide-arrow-right"} • `50.00`. 
        
      ::
      ::field{name="JX" type="gdouble"}
        Julia seed X value, position  
        :icon{name="i-lucide-puzzle"} Default `0.50`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-50.00` • :icon{name="i-lucide-arrow-right"} • `50.00`. 
        
      ::
      ::field{name="JY" type="gdouble"}
        Julia seed Y value, position  
        :icon{name="i-lucide-puzzle"} Default `0.50`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-50.00` • :icon{name="i-lucide-arrow-right"} • `50.00`. 
        
      ::
      ::field{name="Depth" type="gint"}
        
        :icon{name="i-lucide-puzzle"} Default `3`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `65536`. 
        
      ::
      ::field{name="Bailout length" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `10000.00`  
      ::
      ::field{name="Abyss policy" type="dictionary"}
        How to deal with pixels outside of the input buffer  
        :icon{name="i-lucide-puzzle"} Default `Loop`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `None` • `Clamp` • `Loop` • `Black` • `White` 
      ::


    ::
::