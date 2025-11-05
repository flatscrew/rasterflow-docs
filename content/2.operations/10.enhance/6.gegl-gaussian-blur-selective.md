---
title: Selective Gaussian Blur
description: Blur neighboring pixels, but only in low-contrast areas
links:
  - label: "gegl:gaussian-blur-selective"
    to: "https://gegl.org/operations/gegl-gaussian-blur-selective"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Selective Gaussian Blur
caption: Blur neighboring pixels, but only in low-contrast areas
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
  has-aux: true
  has-output: true
  ---
  ::
::

::collapsible
---
name: Operation properties
---

    ::field-group
      ::field{name="Blur radius" type="gdouble"}
        Radius of square pixel region, (width and height will be radius*2+1).  
        :icon{name="i-lucide-puzzle"} Default `5.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1.00` • :icon{name="i-lucide-arrow-right"} • `1000.00`. 
        
      ::
      ::field{name="Max. delta" type="gdouble"}
        Maximum delta  
        :icon{name="i-lucide-puzzle"} Default `0.20`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::

    ::
::