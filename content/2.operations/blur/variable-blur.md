---
title: Variable Blur
description: "Blur the image by a varying amount using a mask"
links:
  - label: "gegl:variable-blur"
    to: "https://gegl.org/operations/gegl-variable-blur"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Variable Blur
caption: Blur the image by a varying amount using a mask
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
      ::field{name="Radius" type="gdouble"}
        Maximal blur radius  
        :icon{name="i-lucide-puzzle"} Default `10.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1500.00`. 
        
      ::
      ::field{name="Linear mask" type="gboolean"}
        Use linear mask values  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::
      ::field{name="High quality" type="gboolean"}
        Generate more accurate and consistent output (slower)  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::

    ::
::