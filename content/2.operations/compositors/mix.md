---
title: Mix
description: "Do a lerp, linear interpolation (lerp) between input and aux."
links:
  - label: "gegl:mix"
    to: "https://gegl.org/operations/gegl-mix"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Mix
src: /images/operations/gegl-mix.png
---
::

## Operation pads
This operation exposes the following data pads, defining how it receives, processes, and emits image data:

::operation-pads
---
has-input: true
has-aux: true
has-output: true
---
::

## Operation properties
::field-group
      ::field{name="Ratio" type="gdouble"}
        Mixing ratio, read as amount of aux, 0=input 0.5=half 1.0=aux.  
        :icon{name="i-lucide-puzzle"} Default `0.50`  
      ::

::