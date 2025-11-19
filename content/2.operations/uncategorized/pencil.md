---
title: Pencil drawing
description: "Make your image have a drawing effect with GEGL."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Pencil drawing
src: /images/operations/lb-pencil.png
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
      ::field{name="Blur" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `2.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `2.50`. 
        
      ::
      ::field{name="Smoothness" type="gint"}
        Number of filtering iterations. A value between 2 and 4 is usually enough.  
        :icon{name="i-lucide-puzzle"} Default `1`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `5`. 
        
      ::
      ::field{name="Radius 1" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.40` • :icon{name="i-lucide-arrow-right"} • `1.40`. 
        
      ::
      ::field{name="Radius 2" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.33`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.40`. 
        
      ::
      ::field{name="Low Luminance" type="gdouble"}
        Input luminance level to become lowest output.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="High Luminance" type="gdouble"}
        Input luminance levels.  
        :icon{name="i-lucide-puzzle"} Default `0.01`  
      ::

::