---
title: Art Bossed
description: "An artistic emboss."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Art Bossed
src: /images/operations/lb-art-bossing.png
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
      ::field{name="Bump" type="gdouble"}
        Make the effect more bumpish.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `3.00`. 
        
      ::
      ::field{name="Dark blended Blur X" type="gdouble"}
        Standard deviation for the horizontal axis.  
        :icon{name="i-lucide-puzzle"} Default `20.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `60.00`. 
        
      ::
      ::field{name="Dark blended Blur Y" type="gdouble"}
        Standard deviation for the vertical axis.  
        :icon{name="i-lucide-puzzle"} Default `20.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `60.00`. 
        
      ::
      ::field{name="Saturation" type="gdouble"}
        Scale, strength of effect.  
        :icon{name="i-lucide-puzzle"} Default `1.20`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.50`. 
        
      ::
      ::field{name="Hardlight Composer's Opacity" type="gdouble"}
        The hardlight blend which contains emboss and gamma inside it, has an opacity slider and this is its control.  
        :icon{name="i-lucide-puzzle"} Default `0.50`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.50` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Gamma" type="gdouble"}
        Gamma.  
        :icon{name="i-lucide-puzzle"} Default `2.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1.00` • :icon{name="i-lucide-arrow-right"} • `2.00`. 
        
      ::
      ::field{name="Azimuth" type="gdouble"}
        Artistic emboss azimuth.  
        :icon{name="i-lucide-puzzle"} Default `75.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `180.00`. 
        
      ::
      ::field{name="Depth" type="gint"}
        Artistic emboss depth.  
        :icon{name="i-lucide-puzzle"} Default `3`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `25`. 
        
      ::
      ::field{name="Elevation" type="gdouble"}
        Artistic emboss elevation.  
        :icon{name="i-lucide-puzzle"} Default `30.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `25.00` • :icon{name="i-lucide-arrow-right"} • `45.00`. 
        
      ::
      ::field{name="Smooth" type="gint"}
        Smooth the artistic emboss.  
        :icon{name="i-lucide-puzzle"} Default `9`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `2` • :icon{name="i-lucide-arrow-right"} • `9`. 
        
      ::

::