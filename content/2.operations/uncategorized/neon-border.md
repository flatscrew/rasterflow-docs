---
title: Neon Border
description: "A glowing neon border logo for your text."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Neon Border
src: /images/operations/lb-neon-border.png
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
      ::field{name="Merge with Image" type="gboolean"}
        Should the neon border merge with the image content or be alone? .  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::
      ::field{name="Hue rotation mode" type="gboolean"}
        Forget about some color pickers and just rotate the hue.  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::
      ::field{name="Hue Rotation" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-180.00` • :icon{name="i-lucide-arrow-right"} • `180.00`. 
        
      ::
      ::field{name="Color (recommended white)" type="GeglColor"}
        Changing this will ruin the neon border effect but feel free to do whatever you want.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Color 2" type="GeglColor"}
        The glow's color (defaults to a green).  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Blur radius" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `2.20`  
      ::
      ::field{name="Blur radius 2" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `4.30`  
      ::
      ::field{name="Grow radius 1" type="gdouble"}
        The distance to expand the shadow before blurring; a negative value will contract the shadow instead.  
        :icon{name="i-lucide-puzzle"} Default `9.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `50.00`. 
        
      ::
      ::field{name="Grow radius 2" type="gdouble"}
        The distance to expand the shadow before blurring; a negative value will contract the shadow instead.  
        :icon{name="i-lucide-puzzle"} Default `2.10`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `12.00`. 
        
      ::
      ::field{name="Opacity" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Opacity 2" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Color of glow" type="GeglColor"}
        The color to paint over the input.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Gaussian Glow X" type="gdouble"}
        Standard deviation for the horizontal axis.  
        :icon{name="i-lucide-puzzle"} Default `10.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `100.00`. 
        
      ::
      ::field{name="Gaussian Glow Y" type="gdouble"}
        Standard deviation for the vertical axis.  
        :icon{name="i-lucide-puzzle"} Default `65.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `100.00`. 
        
      ::
      ::field{name="Opacity of Glow" type="gdouble"}
        Global opacity value that is always used on top of the optional auxiliary input buffer.  
        :icon{name="i-lucide-puzzle"} Default `0.40`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Disable clipping (Allows color update delay bug)" type="gboolean"}
        Hidden setting - This checkbox removes the shadow clip bug for compliance with GIMP 3's non-destructive text editing. If enabled this will triger another bug only seen after using Neon Border heavily, said bug appears usually after a few minutes of usage and will cause Neon Border to delay a selected color update until another slider is moved. It is suggested to enable this once one applies the filter. But keep it disabled while editing Neon Border unless you can tolerate a delayed color update.  
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::
      ::field{name="Setting for Neon" type="dictionary"}
        Hidden Setting - Version of Neon border to use.  
        :icon{name="i-lucide-puzzle"} Default `Sept 2025 Graph`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Sept 2025 Graph` • `Classic` 
      ::

      ::field{name="Off canvas clipping" type="gboolean"}
        A trade off between two technical settings, default TRUE is best for text styles to prevent the glowing border outlines from clipping, but the consequence is canvas bordering content will always clip with a glowing line.  When disabled FALSE Neon Border doesn't clip at the end of the canvas so opaque pixels touching the canvas canvas don't have a glowing line, but text styles will clip if the outline borders are large, thus making the text style bad. In example, when TRUE said glowing line clip will present itself on a transparent covered image of a human that cuts off at the ankles, because the ankles are the canvas edge. Said image of person's ankles will clip if TRUE, and not clip of FALSE. This exist because there is no perfect GEGL graph only trade offs. Put simply, consider making FALSE for human legs or any content touching the canvas, for text styles on canvas keep TRUE .  
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::

::