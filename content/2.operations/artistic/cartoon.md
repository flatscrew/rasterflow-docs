---
title: Cartoon
description: "Simulates a cartoon, its result is similar to a black felt pen drawing subsequently shaded with color. This is achieved by enhancing edges and darkening areas that are already distinctly darker than their neighborhood."
links:
  - label: "gegl:cartoon"
    to: "https://gegl.org/operations/gegl-cartoon"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Cartoon
src: /images/operations/gegl-cartoon.png
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
      ::field{name="Mask radius" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `7.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `50.00`. 
        
      ::
      ::field{name="Percent black" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.20`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::

::