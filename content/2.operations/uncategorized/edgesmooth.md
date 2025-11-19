---
title: Rough Edge Smoother
description: "GEGL will apply a median blur and a few other things around a transparent images edges to smooth edges."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Rough Edge Smoother
src: /images/operations/lb-edgesmooth.png
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
      ::field{name="Median edge" type="gdouble"}
        Apply a median blur only on the edges.  
        :icon{name="i-lucide-puzzle"} Default `73.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `100.00`. 
        
      ::
      ::field{name="Blur edge" type="gdouble"}
        Apply a gaussian blur only on the edges of an image.  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `3.00`. 
        
      ::
      ::field{name="Increase opacity" type="gdouble"}
        Increase the opacity only around the edges.  
        :icon{name="i-lucide-puzzle"} Default `1.20`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1.00` • :icon{name="i-lucide-arrow-right"} • `6.00`. 
        
      ::
      ::field{name="Abyss Policy" type="dictionary"}
        How image edges are handled. In default they don't clip but when applying this filter on subjects it makes sense for it to clip.  
        :icon{name="i-lucide-puzzle"} Default `None`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `None` • `Clamp` 
      ::


::