---
title: RGB Glitch
description: "RGB Glitch the image."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: RGB Glitch
src: /images/operations/lb-rgb-glitch.png
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
      ::field{name="X Red" type="gdouble"}
        Move the glitch horizontally.  
        :icon{name="i-lucide-puzzle"} Default `9.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-30.00` • :icon{name="i-lucide-arrow-right"} • `30.00`. 
        
      ::
      ::field{name="X Green" type="gdouble"}
        Move the glitch horizontally.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-30.00` • :icon{name="i-lucide-arrow-right"} • `30.00`. 
        
      ::
      ::field{name="X Blue" type="gdouble"}
        Move the glitch horizontally.  
        :icon{name="i-lucide-puzzle"} Default `-9.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-30.00` • :icon{name="i-lucide-arrow-right"} • `30.00`. 
        
      ::
      ::field{name="Y Red" type="gdouble"}
        Move the glitch vertically.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-30.00` • :icon{name="i-lucide-arrow-right"} • `30.00`. 
        
      ::
      ::field{name="Y Green" type="gdouble"}
        Move the glitch vertically.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-30.00` • :icon{name="i-lucide-arrow-right"} • `30.00`. 
        
      ::
      ::field{name="Y Blue" type="gdouble"}
        Move the glitch vertically.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-30.00` • :icon{name="i-lucide-arrow-right"} • `30.00`. 
        
      ::
      ::field{name="Unaffected Border" type="gdouble"}
        Feather radius of border unaffected by glitching.  
        :icon{name="i-lucide-puzzle"} Default `30.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `40.00`. 
        
      ::

::