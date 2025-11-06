---
title: Exchange color
description: "Exchange one color with another, optionally setting a threshold to convert from one shade to another."
links:
  - label: "gegl:color-exchange"
    to: "https://gegl.org/operations/gegl-color-exchange"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Exchange color
caption: Exchange one color with another, optionally setting a threshold to convert from one shade to another.
src: /images/operations/gegl-color-exchange.png
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
      ::field{name="From Color" type="GeglColor"}
        The color to change.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="To Color" type="GeglColor"}
        Replacement color.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Red Threshold" type="gdouble"}
        Red threshold of the input color.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Green Threshold" type="gdouble"}
        Green threshold of the input color.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Blue Threshold" type="gdouble"}
        Blue threshold of the input color.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::

    ::
::