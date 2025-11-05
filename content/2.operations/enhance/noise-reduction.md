---
title: Noise Reduction
description: "Anisotropic smoothing operation"
links:
  - label: "gegl:noise-reduction"
    to: "https://gegl.org/operations/gegl-noise-reduction"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Noise Reduction
caption: Anisotropic smoothing operation
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
      ::field{name="Strength" type="gint"}
        Controls the number of iterations; lower values give less plastic results  
        :icon{name="i-lucide-puzzle"} Default `4`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `32`. 
        
      ::

    ::
::