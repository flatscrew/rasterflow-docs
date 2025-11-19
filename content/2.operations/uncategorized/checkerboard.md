---
title: Checkerboard Patterns
description: "Generates a checkerboard pattern with 2 to 8 configurable colors, size, and rotation angle."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Checkerboard Patterns
src: /images/operations/ai-lb-checkerboard.png
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
      ::field{name="Number of Colors" type="dictionary"}
        Number of colors in the checkerboard pattern.  
        :icon{name="i-lucide-puzzle"} Default `3 Colors`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `2 Colors` • `3 Colors` • `4 Colors` • `5 Colors` • `6 Colors` • `7 Colors` • `8 Colors` 
      ::

      ::field{name="Pattern Color 1" type="GeglColor"}
        First color for the pattern.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Pattern Color 2" type="GeglColor"}
        Second color for the pattern.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Pattern Color 3" type="GeglColor"}
        Third color for the pattern.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Pattern Color 4" type="GeglColor"}
        Fourth color for the pattern.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Pattern Color 5" type="GeglColor"}
        Fifth color for the pattern.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Pattern Color 6" type="GeglColor"}
        Sixth color for the pattern.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Pattern Color 7" type="GeglColor"}
        Seventh color for the pattern.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Pattern Color 8" type="GeglColor"}
        Eighth color for the pattern.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Pattern Size" type="gdouble"}
        Size of each element in pixels.  
        :icon{name="i-lucide-puzzle"} Default `50.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `10.00` • :icon{name="i-lucide-arrow-right"} • `300.00`. 
        
      ::
      ::field{name="Pattern Rotation Angle" type="gdouble"}
        Rotation angle of the pattern in degrees.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `360.00`. 
        
      ::

::