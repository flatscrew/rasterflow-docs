---
title: Local Threshold
description: "Applies a threshold using the local neighborhood."
links:
  - label: "gegl:local-threshold"
    to: "https://gegl.org/operations/gegl-local-threshold"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Local Threshold
src: /images/operations/gegl-local-threshold.png
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
      ::field{name="Radius" type="gdouble"}
        Standard deviation of gaussian neighborhood average for computing local contrast. If 0 is used a global threshold is used instead of one based on local contrast.  
        :icon{name="i-lucide-puzzle"} Default `200.00`  
      ::
      ::field{name="Antialiasing" type="gint"}
        Rough target of levels of accuracy for antialiasing, 1 to disable antialiasing.  
        :icon{name="i-lucide-puzzle"} Default `1`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `256`. 
        
      ::
      ::field{name="Low" type="gdouble"}
        Thresholding level, 0.5 towards 0 to minimize shadows and towards 1.0 to minimize highlights.  
        :icon{name="i-lucide-puzzle"} Default `0.50`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="High" type="gdouble"}
        Maximum values to include, above this gets set to 0.  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `10.00`. 
        
      ::

::