---
title: Starburst
description: "Make a starburst using GEGL."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Starburst
src: /images/operations/lb-starburst.png
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
      ::field{name="Color of blinds" type="GeglColor"}
        Color of the starburst blinds.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Color of fill" type="GeglColor"}
        Sliding this color's alpha channel to transparent by left clicking the color fill and sliding the A slider to 0 will only preserve the ray.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Size of blinds (wider to thin)" type="gdouble"}
        Size of blinds, wider to thin.  
        :icon{name="i-lucide-puzzle"} Default `85.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `79.00` • :icon{name="i-lucide-arrow-right"} • `87.00`. 
        
      ::
      ::field{name="Rotation of starburst" type="gdouble"}
        Rotation applied to the starburst.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `360.00`. 
        
      ::
      ::field{name="Amount of blinds" type="gint"}
        Number of blinds to use.  
        :icon{name="i-lucide-puzzle"} Default `18`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `2` • :icon{name="i-lucide-arrow-right"} • `24`. 
        
      ::
      ::field{name="Horizontal (X) movement" type="gdouble"}
        Move the starburst horizontal.  
        :icon{name="i-lucide-puzzle"} Default `0.50`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Vertical (Y) movement" type="gdouble"}
        Move the starburst vertical.  
        :icon{name="i-lucide-puzzle"} Default `0.50`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Remove the 1 pixel line artifact" type="gint"}
        Median blur to smooth one pixel line artifact. It is on by default but you can turn it off to make the filter faster.  
        :icon{name="i-lucide-puzzle"} Default `2`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `2`. 
        
      ::

::