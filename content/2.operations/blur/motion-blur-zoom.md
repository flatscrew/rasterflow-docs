---
title: Zooming Motion Blur
description: "Zoom motion blur."
links:
  - label: "gegl:motion-blur-zoom"
    to: "https://gegl.org/operations/gegl-motion-blur-zoom"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Zooming Motion Blur
caption: Zoom motion blur.
src: /images/operations/gegl-motion-blur-zoom.png
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
      ::field{name="Center X" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.50`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-10.00` • :icon{name="i-lucide-arrow-right"} • `10.00`. 
        
      ::
      ::field{name="Center Y" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.50`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-10.00` • :icon{name="i-lucide-arrow-right"} • `10.00`. 
        
      ::
      ::field{name="Blurring factor" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.10`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-10.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::

    ::
::