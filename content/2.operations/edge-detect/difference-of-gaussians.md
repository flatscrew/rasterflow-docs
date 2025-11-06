---
title: Difference of Gaussians
description: "Edge detection with control of edge thickness, based on the difference of two gaussian blurs."
links:
  - label: "gegl:difference-of-gaussians"
    to: "https://gegl.org/operations/gegl-difference-of-gaussians"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Difference of Gaussians
caption: Edge detection with control of edge thickness, based on the difference of two gaussian blurs.
src: /images/operations/gegl-difference-of-gaussians.png
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
      ::field{name="Radius 1" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1000.00`. 
        
      ::
      ::field{name="Radius 2" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `2.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1000.00`. 
        
      ::

    ::
::