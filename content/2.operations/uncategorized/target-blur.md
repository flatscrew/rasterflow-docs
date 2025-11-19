---
title: Target Blur
description: "A blur that only applies on opaque pixels."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Target Blur
src: /images/operations/lb-target-blur.png
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
      ::field{name="Type of Blur" type="dictionary"}
        Choose a blur.  
        :icon{name="i-lucide-puzzle"} Default `Gaussian`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Median` • `Box` • `Gaussian` • `Pixel` 
      ::

      ::field{name="Internal base Median shape" type="dictionary"}
        Internal shape that the median uses.  
        :icon{name="i-lucide-puzzle"} Default `Circle`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Square` • `Circle` • `Diamond` 
      ::

      ::field{name="Size X" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `6.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `100.00`. 
        
      ::
      ::field{name="Size Y" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `6.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `100.00`. 
        
      ::
      ::field{name="Radius" type="gint"}
        Neighborhood radius, a negative value will calculate with inverted percentiles.  
        :icon{name="i-lucide-puzzle"} Default `7`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `100`. 
        
      ::
      ::field{name="Percentile" type="gdouble"}
        Neighborhood color percentile.  
        :icon{name="i-lucide-puzzle"} Default `50.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `100.00`. 
        
      ::
      ::field{name="Block width" type="gint"}
        Width of blocks in pixels.  
        :icon{name="i-lucide-puzzle"} Default `16`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `40`. 
        
      ::
      ::field{name="Block height" type="gint"}
        Height of blocks in pixels.  
        :icon{name="i-lucide-puzzle"} Default `16`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `40`. 
        
      ::

::