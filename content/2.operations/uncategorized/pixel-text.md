---
title: Pixel Text
description: "Make retro gaming text."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Pixel Text
src: /images/operations/lb-pixel-text.png
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
      ::field{name="Color Policy:" type="dictionary"}
        Setting to keep the original image color or replace the original color with any color you want.  
        :icon{name="i-lucide-puzzle"} Default `Original color mode`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Original color mode` • `Color overlay mode` 
      ::

      ::field{name="Color" type="GeglColor"}
        
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Control the Pixelize Effect" type="gint"}
        Pixelization of the text from gegl:pixelize .  
        :icon{name="i-lucide-puzzle"} Default `6`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `25`. 
        
      ::
      ::field{name="Pixel Shadow Emboss Depth" type="gint"}
        Emboss Depth for the emboss effecting the text.  
        :icon{name="i-lucide-puzzle"} Default `40`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `60`. 
        
      ::
      ::field{name="Pixel Shadow Emboss Elevation" type="gdouble"}
        Emboss Elevation for the emboss effecting the text.  
        :icon{name="i-lucide-puzzle"} Default `14.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `60.00`. 
        
      ::
      ::field{name="X Pixel Shadow" type="gdouble"}
        Horizontal Movability of the Pixel Text's opaque shadow.  
        :icon{name="i-lucide-puzzle"} Default `5.00`  
      ::
      ::field{name="Y Pixel Shadow" type="gdouble"}
        Vertical Movability of the Pixel Text's opaque shadow.  
        :icon{name="i-lucide-puzzle"} Default `4.00`  
      ::
      ::field{name="Image overlay" type="gchararray"}
        Optional image file overlay to be put over the text. Source image file path (png, jpg, raw, svg, bmp, tif, ...).  
        :icon{name="i-lucide-puzzle"} Default `""`  
      ::
      ::field{name="Blend mode of Pixel Text:" type="dictionary"}
        Blend mode of pixel text filter.  
        :icon{name="i-lucide-puzzle"} Default `Overlay`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Overlay` • `Multiply` 
      ::


::