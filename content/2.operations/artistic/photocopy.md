---
title: Photocopy
description: Simulate color distortion produced by a copy machine
links:
  - label: "gegl:photocopy"
    to: "https://gegl.org/operations/gegl-photocopy"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Photocopy
caption: Simulate color distortion produced by a copy machine
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
      ::field{name="Mask Radius" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `10.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `50.00`. 
        
      ::
      ::field{name="Sharpness" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.50`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Percent Black" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.20`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Percent White" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.20`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::

    ::
::