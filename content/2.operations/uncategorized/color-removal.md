---
title: Color Removal
description: "Removes a selected color using late 90s-style color thresholding."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Color Removal
src: /images/operations/ai-lb-color-removal.png
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
      ::field{name="Background Color" type="GeglColor"}
        Color of the background to remove (default is green).  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Tolerance" type="gdouble"}
        Tolerance for background color matching (0.0 to 1.0).  
        :icon{name="i-lucide-puzzle"} Default `0.20`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::

::