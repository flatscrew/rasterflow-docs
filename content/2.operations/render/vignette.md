---
title: Vignette
description: "Applies a vignette to an image. Simulates the luminance fall off at the edge of exposed film, and some other fuzzier border effects that can naturally occur with analog photography"
links:
  - label: "gegl:vignette"
    to: "https://gegl.org/operations/gegl-vignette"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Vignette
caption: Applies a vignette to an image. Simulates the luminance fall off at the edge of exposed film, and some other fuzzier border effects that can naturally occur with analog photography
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
      ::field{name="Vignette shape" type="dictionary"}
                :icon{name="i-lucide-puzzle"} Default `Circle`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Circle` • `Square` • `Diamond` • `Horizontal` • `Vertical` 
      ::

      ::field{name="Color" type="GeglColor"}
        Defaults to 'black', you can use transparency here to erase portions of an image  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Radius" type="gdouble"}
        How far out vignetting goes as portion of half image diagonal  
        :icon{name="i-lucide-puzzle"} Default `1.20`  
      ::
      ::field{name="Softness" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.80`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Gamma" type="gdouble"}
        Falloff linearity  
        :icon{name="i-lucide-puzzle"} Default `2.00`  
      ::
      ::field{name="Proportion" type="gdouble"}
        How close we are to image proportions  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Squeeze" type="gdouble"}
        Aspect ratio to use, -0.5 = 1:2, 0.0 = 1:1, 0.5 = 2:1, -1.0 = 1:inf 1.0 = inf:1, this is applied after proportion is taken into account, to directly use squeeze factor as proportions, set proportion to 0.0.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-1.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Center X" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.50`  
      ::
      ::field{name="Center Y" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.50`  
      ::
      ::field{name="Rotation" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `360.00`. 
        
      ::

    ::
::