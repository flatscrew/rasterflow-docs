---
title: Mean Curvature Blur
description: "Regularize geometry at a speed proportional to the local mean curvature value"
links:
  - label: "gegl:mean-curvature-blur"
    to: "https://gegl.org/operations/gegl-mean-curvature-blur"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Mean Curvature Blur
caption: Regularize geometry at a speed proportional to the local mean curvature value
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
      ::field{name="Iterations" type="gint"}
        Controls the number of iterations  
        :icon{name="i-lucide-puzzle"} Default `20`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `500`. 
        
      ::

    ::
::