---
title: Saturation
description: "Changes the saturation."
links:
  - label: "gegl:saturation"
    to: "https://gegl.org/operations/gegl-saturation"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Saturation
caption: Changes the saturation.
src: /images/operations/gegl-saturation.png
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
      ::field{name="Scale" type="gdouble"}
        Scale, strength of effect.  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `10.00`. 
        
      ::
      ::field{name="Interpolation Color Space" type="dictionary"}
        
        :icon{name="i-lucide-puzzle"} Default `Native`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Native` • `CIE Lab/Lch` • `CIE Yuv` 
      ::


    ::
::