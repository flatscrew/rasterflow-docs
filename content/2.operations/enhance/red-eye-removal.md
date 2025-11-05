---
title: Red Eye Removal
description: "Remove the red eye effect caused by camera flashes"
links:
  - label: "gegl:red-eye-removal"
    to: "https://gegl.org/operations/gegl-red-eye-removal"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Red Eye Removal
caption: Remove the red eye effect caused by camera flashes
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
      ::field{name="Threshold" type="gdouble"}
        Red eye threshold  
        :icon{name="i-lucide-puzzle"} Default `0.40`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `0.80`. 
        
      ::

    ::
::