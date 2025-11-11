---
title: Reinhard 2005 Tone Mapping
description: "Adapt an image, which may have a high dynamic range, for presentation using a low dynamic range. This is an efficient global operator derived from simple physiological observations, producing luminance within the range 0.0-1.0."
links:
  - label: "gegl:reinhard05"
    to: "https://gegl.org/operations/gegl-reinhard05"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Reinhard 2005 Tone Mapping
caption: Adapt an image, which may have a high dynamic range, for presentation using a low dynamic range. This is an efficient global operator derived from simple physiological observations, producing luminance within the range 0.0-1.0.
src: /images/operations/gegl-reinhard05.png
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
      ::field{name="Brightness" type="gdouble"}
        Overall brightness of the image.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-100.00` • :icon{name="i-lucide-arrow-right"} • `100.00`. 
        
      ::
      ::field{name="Chromatic adaptation" type="gdouble"}
        Adaptation to color variation across the image.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Light adaptation" type="gdouble"}
        Adaptation to light variation across the image.  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::

::