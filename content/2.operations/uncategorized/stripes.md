---
title: Stripes
description: "Two colored blind stripes."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Stripes
src: /images/operations/lb-stripes.png
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
      ::field{name="Resize blinds X" type="gdouble"}
        Resize Blinds X axis.  
        :icon{name="i-lucide-puzzle"} Default `177.00`  
      ::
      ::field{name="Resize blinds Y" type="gdouble"}
        Resize Blinds Y axis.  
        :icon{name="i-lucide-puzzle"} Default `177.00`  
      ::
      ::field{name="Time X" type="gdouble"}
        As if time passed and the blinds moved horizontal.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="Time Y" type="gdouble"}
        As if time passed and the blinds moved vertical.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="Rotation" type="gdouble"}
        Blind rotation angle.  
        :icon{name="i-lucide-puzzle"} Default `137.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `360.00`. 
        
      ::
      ::field{name="Color" type="GeglColor"}
        The color to paint over the blinds.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Color 2" type="GeglColor"}
        The color to paint over the blinds.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::

::