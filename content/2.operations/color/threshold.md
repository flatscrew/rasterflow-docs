---
title: Threshold
description: "Thresholds the image to white/black based on either the global values set in the value (low) and high properties, or per pixel from the aux input."
links:
  - label: "gegl:threshold"
    to: "https://gegl.org/operations/gegl-threshold"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Threshold
caption: Thresholds the image to white/black based on either the global values set in the value (low) and high properties, or per pixel from the aux input.
src: /images/operations/gegl-threshold.png
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
      ::field{name="Threshold" type="gdouble"}
        Lowest value to be included.  
        :icon{name="i-lucide-puzzle"} Default `0.50`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-200.00` • :icon{name="i-lucide-arrow-right"} • `200.00`. 
        
      ::
      ::field{name="High" type="gdouble"}
        Highest value to be include as white.  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-200.00` • :icon{name="i-lucide-arrow-right"} • `200.00`. 
        
      ::

    ::
::