---
title: Sharpen (Unsharp Mask)
description: "Sharpen image, by adding difference to blurred image, a technique for sharpening originally used in darkrooms."
links:
  - label: "gegl:unsharp-mask"
    to: "https://gegl.org/operations/gegl-unsharp-mask"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Sharpen (Unsharp Mask)
caption: Sharpen image, by adding difference to blurred image, a technique for sharpening originally used in darkrooms.
---
::

::collapsible
---
name: Operation pads
---
This operation exposes the following data pads, defining how it receives, processes, and emits image data:

  ::operation-pads
  ---
  has-input: true
  has-aux: false
  has-output: true
  ---
  ::
::

::collapsible
---
name: Operation properties
---

    ::field-group
      ::field{name="Radius" type="gdouble"}
        Expressed as standard deviation, in pixels  
        :icon{name="i-lucide-puzzle"} Default `3.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1500.00`. 
        
      ::
      ::field{name="Amount" type="gdouble"}
        Scaling factor for unsharp-mask, the strength of effect  
        :icon{name="i-lucide-puzzle"} Default `0.50`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `300.00`. 
        
      ::
      ::field{name="Threshold" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::

    ::
::