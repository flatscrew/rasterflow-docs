---
title: Apply Lens
description: "Simulates the optical distortion caused by having an elliptical lens over the image."
links:
  - label: "gegl:apply-lens"
    to: "https://gegl.org/operations/gegl-apply-lens"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Apply Lens
caption: Simulates the optical distortion caused by having an elliptical lens over the image.
src: /images/operations/gegl-apply-lens.png
---
::

## Operation pads
This operation exposes the following data pads, defining how it receives, processes, and emits image data:

::operation-pads
---
has-input: true
has-aux: false
has-output: true
---
::

## Operation properties
::field-group
      ::field{name="Lens refraction index" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `1.70`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1.00` • :icon{name="i-lucide-arrow-right"} • `100.00`. 
        
      ::
      ::field{name="Keep original surroundings" type="gboolean"}
        Keep image unchanged, where not affected by the lens.  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::
      ::field{name="Background color" type="GeglColor"}
        
        :icon{name="i-lucide-puzzle"} Default ``  
      ::

::