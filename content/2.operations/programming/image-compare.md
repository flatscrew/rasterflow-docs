---
title: 
description: "Compares if input and aux buffers are different. Global statistics are saved in the properties and a visual difference image is produced as a visual result. "
links:
  - label: "gegl:image-compare"
    to: "https://gegl.org/operations/gegl-image-compare"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: 
caption: Compares if input and aux buffers are different. Global statistics are saved in the properties and a visual difference image is produced as a visual result. 
src: /images/operations/gegl-image-compare.png
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
      ::field{name="Wrong pixels" type="gint"}
        Number of differing pixels.  
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-2147483648` • :icon{name="i-lucide-arrow-right"} • `2147483647`. 
        
      ::
      ::field{name="Maximum difference" type="gdouble"}
        Maximum difference between two pixels.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="Average difference (wrong)" type="gdouble"}
        Average difference between wrong pixels.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="Average difference (total)" type="gdouble"}
        Average difference between all pixels.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::

    ::
::