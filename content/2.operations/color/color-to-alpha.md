---
title: Color to Alpha
description: Convert a specified color to transparency, works best with white.
links:
  - label: "gegl:color-to-alpha"
    to: "https://gegl.org/operations/gegl-color-to-alpha"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Color to Alpha
caption: Convert a specified color to transparency, works best with white.
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
      ::field{name="Color" type="GeglColor"}
        The color to make transparent.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Transparency threshold" type="gdouble"}
        The limit below which colors become transparent.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Opacity threshold" type="gdouble"}
        The limit above which colors remain opaque.  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::

    ::
::