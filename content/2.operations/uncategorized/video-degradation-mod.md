---
title: Video Degradation mod
description: "Add scan lines and dots reminiscent of an old video monitor. This filter is a fork of GEGL's existing video-degradation filter. Please blend this with Gimp blend modes. (Fusing with Overlay resembles default) but Grain Extract and others create interesting effects."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Video Degradation mod
src: /images/operations/lb-video-degradation-mod.png
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
      ::field{name="Pattern" type="dictionary"}
        Type of RGB pattern to use.  
        :icon{name="i-lucide-puzzle"} Default `Striped`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Staggered` • `Large staggered` • `Striped` • `Wide striped` • `Long staggered` • `3x3` • `Large 3x3` • `Hex` • `Dots` 
      ::

      ::field{name="Additive" type="gboolean"}
        Whether the function adds the result to the original image.  
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::
      ::field{name="Rotated" type="gboolean"}
        Whether to rotate the RGB pattern by ninety degrees.  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::
      ::field{name="Chroma Color Enhancer" type="gdouble"}
        Chroma adjustment.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-50.00` • :icon{name="i-lucide-arrow-right"} • `50.00`. 
        
      ::
      ::field{name="Size Increasement" type="gdouble"}
        Size Increasement of the degradation effect.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `100.00`. 
        
      ::

::