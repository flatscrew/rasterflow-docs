---
title: Neon Edge Detection
description: "Performs edge detection using a Gaussian derivative method"
links:
  - label: "gegl:edge-neon"
    to: "https://gegl.org/operations/gegl-edge-neon"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Neon Edge Detection
caption: Performs edge detection using a Gaussian derivative method
src: /images/operations/gegl-edge-neon.png
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
      ::field{name="Radius" type="gdouble"}
        Radius of effect (in pixels)  
        :icon{name="i-lucide-puzzle"} Default `5.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1500.00`. 
        
      ::
      ::field{name="Intensity" type="gdouble"}
        Strength of Effect  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `100.00`. 
        
      ::

    ::
::