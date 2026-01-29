---
title: Brightness Contrast
description: "Changes the light level and contrast. This operation operates in linear light, 'contrast' is a scale factor around 50% gray, and 'brightness' a constant offset to apply after contrast scaling."
links:
  - label: "gegl:brightness-contrast"
    to: "https://gegl.org/operations/gegl-brightness-contrast"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Brightness Contrast
src: /images/operations/gegl-brightness-contrast.png
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
      ::field{name="Contrast" type="gdouble"}
        Magnitude of contrast scaling >1.0 brighten < 1.0 darken.  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-5.00` • :icon{name="i-lucide-arrow-right"} • `5.00`. 
        
      ::
      ::field{name="Brightness" type="gdouble"}
        Amount to increase brightness.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-3.00` • :icon{name="i-lucide-arrow-right"} • `3.00`. 
        
      ::

::