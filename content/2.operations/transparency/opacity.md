---
title: Opacity
description: Weights the opacity of the input both the value of the aux input and the global value property.
links:
  - label: "gegl:opacity"
    to: "https://gegl.org/operations/gegl-opacity"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Opacity
caption: Weights the opacity of the input both the value of the aux input and the global value property.
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
  has-aux: true
  has-output: true
  ---
  ::
::

::collapsible
---
name: Operation properties
---

    ::field-group
      ::field{name="Opacity" type="gdouble"}
        Global opacity value that is always used on top of the optional auxiliary input buffer.  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-10.00` • :icon{name="i-lucide-arrow-right"} • `10.00`. 
        
      ::

    ::
::