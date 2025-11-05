---
title: Combine Exposures
description: Combine multiple scene exposures into one high dynamic range image.
links:
  - label: "gegl:exp-combine"
    to: "https://gegl.org/operations/gegl-exp-combine"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Combine Exposures
caption: Combine multiple scene exposures into one high dynamic range image.
---
::

::collapsible
---
name: Operation pads
---
This operation exposes the following data pads, defining how it receives, processes, and emits image data:

  ::operation-pads
  ---
  has-input: false
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
      ::field{name="Exposure values" type="gchararray"}
        Relative brightness of each exposure in EV  
        :icon{name="i-lucide-puzzle"} Default `""`  
      ::
      ::field{name="Discretization bits" type="gint"}
        Log2 of source's discretization steps  
        :icon{name="i-lucide-puzzle"} Default `13`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `8` • :icon{name="i-lucide-arrow-right"} • `32`. 
        
      ::
      ::field{name="Weight sigma" type="gdouble"}
        Weight distribution sigma controlling response contributions  
        :icon{name="i-lucide-puzzle"} Default `8.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `32.00`. 
        
      ::

    ::
::