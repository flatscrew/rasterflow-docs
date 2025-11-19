---
title: Old Photo Antique
description: "Simulate a photo from the past by intentionally reducing image quality."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Old Photo Antique
src: /images/operations/lb-antique.png
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
      ::field{name="Color Boost" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `-11.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-100.00` • :icon{name="i-lucide-arrow-right"} • `20.00`. 
        
      ::
      ::field{name="Sepia strength" type="gdouble"}
        Strength of the sepia effect. At 0 there is no sepia effect.  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Darkness to Lightness" type="gdouble"}
        Lightness control.  
        :icon{name="i-lucide-puzzle"} Default `-10.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-30.00` • :icon{name="i-lucide-arrow-right"} • `10.00`. 
        
      ::
      ::field{name="Noise meter" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.20`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Should RGB noise have color?" type="gboolean"}
        Control amount of noise for each RGB channel separately.  
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::
      ::field{name="Blur" type="gdouble"}
        Mild gaussian blur to mimic a dated photo's lower quality.  
        :icon{name="i-lucide-puzzle"} Default `1.50`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `3.50`. 
        
      ::
      ::field{name="Shadows adjust" type="gdouble"}
        Adjust exposure of shadows - on low settings this may create a vignette like effect.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-100.00` • :icon{name="i-lucide-arrow-right"} • `100.00`. 
        
      ::
      ::field{name="Highlights" type="gdouble"}
        Adjust exposure of highlights.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-70.00` • :icon{name="i-lucide-arrow-right"} • `50.00`. 
        
      ::
      ::field{name="Levels In low light" type="gdouble"}
        Levels in low setting to tweak the lighting. Recommended to apply when sepia is present. .  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::

::