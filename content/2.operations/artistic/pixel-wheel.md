---
title: Circular Pixel Stretch
description: "Make a circular pixel stretch effect."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Circular Pixel Stretch
src: /images/operations/lb-pixel-wheel.png
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
      ::field{name="Zoom" type="gdouble"}
        Rescale overall image size.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-100.00` • :icon{name="i-lucide-arrow-right"} • `100.00`. 
        
      ::
      ::field{name="Normal Pixel Stretch" type="gboolean"}
        Make a pixel stretch wheel or square.  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::
      ::field{name="0 for Square - 100 for Circle" type="gdouble"}
        Square to circle transition.  
        :icon{name="i-lucide-puzzle"} Default `100.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `100.00`. 
        
      ::
      ::field{name="Smooth to hide one pixel slit" type="gint"}
        Median blur takes care of the occasional one pixel slit.  
        :icon{name="i-lucide-puzzle"} Default `1`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `6`. 
        
      ::

::