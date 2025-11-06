---
title: Dither
description: "Reduce the number of colors in the image, by reducing the levels per channel (colors and alpha). Different dithering methods can be specified to counteract quantization induced banding."
links:
  - label: "gegl:dither"
    to: "https://gegl.org/operations/gegl-dither"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Dither
caption: Reduce the number of colors in the image, by reducing the levels per channel (colors and alpha). Different dithering methods can be specified to counteract quantization induced banding.
src: /images/operations/gegl-dither.png
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
      ::field{name="Red levels" type="gint"}
        Number of levels for red channel.  
        :icon{name="i-lucide-puzzle"} Default `6`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `2` • :icon{name="i-lucide-arrow-right"} • `65536`. 
        
      ::
      ::field{name="Green levels" type="gint"}
        Number of levels for green channel.  
        :icon{name="i-lucide-puzzle"} Default `7`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `2` • :icon{name="i-lucide-arrow-right"} • `65536`. 
        
      ::
      ::field{name="Blue levels" type="gint"}
        Number of levels for blue channel.  
        :icon{name="i-lucide-puzzle"} Default `6`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `2` • :icon{name="i-lucide-arrow-right"} • `65536`. 
        
      ::
      ::field{name="Alpha levels" type="gint"}
        Number of levels for alpha channel.  
        :icon{name="i-lucide-puzzle"} Default `256`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `2` • :icon{name="i-lucide-arrow-right"} • `65536`. 
        
      ::
      ::field{name="Dithering method" type="dictionary"}
        The dithering method to use.  
        :icon{name="i-lucide-puzzle"} Default `Floyd-Steinberg`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `None` • `Floyd-Steinberg` • `Bayer` • `Random` • `Random Covariant` • `Arithmetic add` • `Arithmetic add covariant` • `Arithmetic xor` • `Arithmetic xor covariant` • `Blue Noise` • `Blue Noise Covariant` 
      ::

      ::field{name="Random seed" type="guint"}
        
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `4294967295`. 
        
      ::

    ::
::