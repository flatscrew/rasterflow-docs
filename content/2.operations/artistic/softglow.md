---
title: Softglow
description: "Simulate glow by making highlights intense and fuzzy."
links:
  - label: "gegl:softglow"
    to: "https://gegl.org/operations/gegl-softglow"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Softglow
caption: Simulate glow by making highlights intense and fuzzy.
src: /images/operations/gegl-softglow.png
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
      ::field{name="Glow radius" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `10.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1.00` • :icon{name="i-lucide-arrow-right"} • `50.00`. 
        
      ::
      ::field{name="Brightness" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.30`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Sharpness" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.85`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::

    ::
::