---
title: Color Temperature
description: "Change the color temperature of the image, from an assumed original color temperature to an intended one."
links:
  - label: "gegl:color-temperature"
    to: "https://gegl.org/operations/gegl-color-temperature"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Color Temperature
src: /images/operations/gegl-color-temperature.png
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
      ::field{name="Original temperature" type="gdouble"}
        Estimated temperature of the light source in Kelvin the image was taken with.  
        :icon{name="i-lucide-puzzle"} Default `6500.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1000.00` • :icon{name="i-lucide-arrow-right"} • `12000.00`. 
        
      ::
      ::field{name="Intended temperature" type="gdouble"}
        Corrected estimation of the temperature of the light source in Kelvin.  
        :icon{name="i-lucide-puzzle"} Default `6500.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1000.00` • :icon{name="i-lucide-arrow-right"} • `12000.00`. 
        
      ::

::