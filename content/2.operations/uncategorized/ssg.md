---
title: Add a Stroke, Shadow or Glow
description: "Like dropshadow but knocked out and it starts as a stand alone outline that can be used on GIMP layers or with the blend mode switcher set to normal or behind. Put it on a layer of its own and apply filters on it."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Add a Stroke, Shadow or Glow
src: /images/operations/lb-ssg.png
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
      ::field{name="Grow shape" type="dictionary"}
        The shape to expand or contract the stroke in.  
        :icon{name="i-lucide-puzzle"} Default `Circle`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Square` • `Circle` • `Diamond` 
      ::

      ::field{name="Color Overlay" type="GeglColor"}
        
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Horizontal position of SSG" type="gdouble"}
        Horizontal shadow offset.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="Vertical position of SSG" type="gdouble"}
        Vertical shadow offset.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="Blur to create Shadow or Glow" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.50`  
      ::
      ::field{name="Grow radius of SSG" type="gdouble"}
        The distance to expand the stroke/shadow before blurring; a negative value will contract the shadow instead.  
        :icon{name="i-lucide-puzzle"} Default `9.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `300.00`. 
        
      ::
      ::field{name="Make the SSG go inward or outward" type="gint"}
        Hidden Settings are meant for Graphs and removing edge pixels with the erase or split blend mode.  
        :icon{name="i-lucide-puzzle"} Default `1`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-250` • :icon{name="i-lucide-arrow-right"} • `10`. 
        
      ::
      ::field{name="Image file overlay" type="gchararray"}
        Source image file path (png, jpg, raw, svg, bmp, tif, ...).  
        :icon{name="i-lucide-puzzle"} Default `""`  
      ::
      ::field{name="Blur Image file Overlay" type="gdouble"}
        A light blur to smooth the image file overlay.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `40.00`. 
        
      ::
      ::field{name="Hue Rotation for Image file overlay" type="gdouble"}
        Color rotation that adjust the image file'.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-180.00` • :icon{name="i-lucide-arrow-right"} • `180.00`. 
        
      ::
      ::field{name="Opacity" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `2.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `4.00`. 
        
      ::

::