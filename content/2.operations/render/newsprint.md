---
title: Newsprint
description: "Digital halftoning with optional modulations."
links:
  - label: "gegl:newsprint"
    to: "https://gegl.org/operations/gegl-newsprint"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Newsprint
src: /images/operations/gegl-newsprint.png
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
      ::field{name="Color Model" type="dictionary"}
        How many inks to use just black, rg, rgb (additive), or cmyk.  
        :icon{name="i-lucide-puzzle"} Default `Black on White`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `White on Black` • `Black on White` • `RGB` • `CMYK` 
      ::

      ::field{name="Red and cyan pattern" type="dictionary"}
        Halftoning/dot pattern to use.  
        :icon{name="i-lucide-puzzle"} Default `Line`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Line` • `Circle` • `Diamond` • `PSSquare (or Euclidian) dot` • `Crossing Lines` 
      ::

      ::field{name="Red and cyan period" type="gdouble"}
        The number of pixels across one repetition of a base pattern at base resolution.  
        :icon{name="i-lucide-puzzle"} Default `12.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `200.00`. 
        
      ::
      ::field{name="Red and cyan angle" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `15.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-180.00` • :icon{name="i-lucide-arrow-right"} • `180.00`. 
        
      ::
      ::field{name="Green and magenta pattern" type="dictionary"}
        Halftoning/dot pattern to use.  
        :icon{name="i-lucide-puzzle"} Default `Line`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Line` • `Circle` • `Diamond` • `PSSquare (or Euclidian) dot` • `Crossing Lines` 
      ::

      ::field{name="Green and magenta period" type="gdouble"}
        The number of pixels across one repetition of a base pattern at base resolution.  
        :icon{name="i-lucide-puzzle"} Default `12.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `200.00`. 
        
      ::
      ::field{name="Green and magenta angle" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `45.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-180.00` • :icon{name="i-lucide-arrow-right"} • `180.00`. 
        
      ::
      ::field{name="Blue and Yellow pattern" type="dictionary"}
        Halftoning/dot pattern to use.  
        :icon{name="i-lucide-puzzle"} Default `Line`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Line` • `Circle` • `Diamond` • `PSSquare (or Euclidian) dot` • `Crossing Lines` 
      ::

      ::field{name="Blue and Yellow period" type="gdouble"}
        The number of pixels across one repetition of a base pattern at base resolution.  
        :icon{name="i-lucide-puzzle"} Default `12.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `200.00`. 
        
      ::
      ::field{name="Blue and Yellow angle" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-180.00` • :icon{name="i-lucide-arrow-right"} • `180.00`. 
        
      ::
      ::field{name="Black pattern" type="dictionary"}
        Halftoning/dot pattern to use.  
        :icon{name="i-lucide-puzzle"} Default `Line`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Line` • `Circle` • `Diamond` • `PSSquare (or Euclidian) dot` • `Crossing Lines` 
      ::

      ::field{name="Black period" type="gdouble"}
        The number of pixels across one repetition of a base pattern at base resolution.  
        :icon{name="i-lucide-puzzle"} Default `12.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `200.00`. 
        
      ::
      ::field{name="Black angle" type="gdouble"}
        Angle offset for patterns.  
        :icon{name="i-lucide-puzzle"} Default `75.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-180.00` • :icon{name="i-lucide-arrow-right"} • `180.00`. 
        
      ::
      ::field{name="Black pullout" type="gdouble"}
        How much of common gray to pull out of CMY.  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Anti-alias oversampling factor" type="gint"}
        Number of samples that are averaged for antialiasing the result.  
        :icon{name="i-lucide-puzzle"} Default `16`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `128`. 
        
      ::
      ::field{name="Turbulence" type="gdouble"}
        Color saturation dependent compression of period.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Blocksize" type="gdouble"}
        Number of periods per tile, this tiling avoids high frequency anomaly that angle boost causes.  
        :icon{name="i-lucide-puzzle"} Default `-1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-1.00` • :icon{name="i-lucide-arrow-right"} • `64.00`. 
        
      ::
      ::field{name="Angle Boost" type="gdouble"}
        Multiplication factor for desired rotation of the local space for texture, the way this is computed makes it weak for desaturated colors and possibly stronger where there is color.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `4.00`. 
        
      ::

::