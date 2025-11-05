---
title: Exposure
description: "Change exposure of an image in shutter speed stops"
links:
  - label: "gegl:exposure"
    to: "https://gegl.org/operations/gegl-exposure"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Exposure
caption: Change exposure of an image in shutter speed stops
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
      ::field{name="Black level" type="gdouble"}
        Adjust the black level  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-0.10` • :icon{name="i-lucide-arrow-right"} • `0.10`. 
        
      ::
      ::field{name="Exposure" type="gdouble"}
        Relative brightness change in stops  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::

    ::
::