---
title: Photo to Cartoon 2
description: "Photo to Cartoon 2."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Photo to Cartoon 2
src: /images/operations/lb-photo-2-cartoon-2.png
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
      ::field{name="Median radius" type="gint"}
        Standard deviation for the horizontal axis.  
        :icon{name="i-lucide-puzzle"} Default `7`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `2` • :icon{name="i-lucide-arrow-right"} • `10`. 
        
      ::
      ::field{name="Difference of Gaussian 1" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `1.20`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.50` • :icon{name="i-lucide-arrow-right"} • `2.00`. 
        
      ::
      ::field{name="Difference of Gaussian 2" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Light control" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1.00` • :icon{name="i-lucide-arrow-right"} • `2.00`. 
        
      ::
      ::field{name="Saturation control" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `1.40`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1.00` • :icon{name="i-lucide-arrow-right"} • `2.00`. 
        
      ::

::