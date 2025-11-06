---
title: High Pass Filter
description: "Enhances fine details."
links:
  - label: "gegl:high-pass"
    to: "https://gegl.org/operations/gegl-high-pass"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: High Pass Filter
caption: Enhances fine details.
src: /images/operations/gegl-high-pass.png
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
      ::field{name="Std. Dev." type="gdouble"}
        Standard deviation (spatial scale factor).  
        :icon{name="i-lucide-puzzle"} Default `4.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `10000.00`. 
        
      ::
      ::field{name="Contrast" type="gdouble"}
        Contrast of high-pass.  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `5.00`. 
        
      ::

    ::
::