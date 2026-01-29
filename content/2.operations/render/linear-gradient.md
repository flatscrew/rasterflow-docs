---
title: Linear Gradient
description: "Linear gradient renderer."
links:
  - label: "gegl:linear-gradient"
    to: "https://gegl.org/operations/gegl-linear-gradient"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Linear Gradient
src: /images/operations/gegl-linear-gradient.png
---
::

## Operation pads
This operation exposes the following data pads, defining how it receives, processes, and emits image data:

::operation-pads
---
has-input: false
has-aux: false
has-output: true
---
::

## Operation properties
::field-group
      ::field{name="X1" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `25.00`  
      ::
      ::field{name="Y1" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `25.00`  
      ::
      ::field{name="X2" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `150.00`  
      ::
      ::field{name="Y2" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `150.00`  
      ::
      ::field{name="Start Color" type="GeglColor"}
        The color at (x1, y1).  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="End Color" type="GeglColor"}
        The color at (x2, y2).  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::

::