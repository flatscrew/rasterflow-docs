---
title: Star Background
description: "Render a star background."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Star Background
src: /images/operations/lb-starbackground.png
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
      ::field{name="Scale" type="gdouble"}
        Scale of the star background.  
        :icon{name="i-lucide-puzzle"} Default `6.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1.00` • :icon{name="i-lucide-arrow-right"} • `20.00`. 
        
      ::
      ::field{name="Coverage" type="gint"}
        Inner/Outer radius ratio of the star background.  
        :icon{name="i-lucide-puzzle"} Default `120`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `90` • :icon{name="i-lucide-arrow-right"} • `180`. 
        
      ::
      ::field{name="Rotate Star Background" type="gdouble"}
        Rotate the star background.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `360.00`. 
        
      ::
      ::field{name="Amount of Star Branches" type="gint"}
        Amount of branches on the star/shape.  
        :icon{name="i-lucide-puzzle"} Default `11`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `3` • :icon{name="i-lucide-arrow-right"} • `24`. 
        
      ::
      ::field{name="Duration" type="gdouble"}
        Duration, as if the shapes were in motion.  
        :icon{name="i-lucide-puzzle"} Default `0.68`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Move Horizontal (0.5 resets)" type="gdouble"}
        Move the central star background horizontally. 0.5 is center.  
        :icon{name="i-lucide-puzzle"} Default `0.50`  
      ::
      ::field{name="Move Vertical (0.5 resets)" type="gdouble"}
        Move the central star background vertically. 0.5 is center.  
        :icon{name="i-lucide-puzzle"} Default `0.50`  
      ::
      ::field{name="Color Shape" type="GeglColor"}
        
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Color Background" type="GeglColor"}
        
        :icon{name="i-lucide-puzzle"} Default ``  
      ::

::