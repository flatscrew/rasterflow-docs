---
title: Matting Levin
description: "Given a sparse user supplied tri-map and an input image, create a foreground alpha mat. Set white as selected, black as unselected, for the tri-map."
links:
  - label: "gegl:matting-levin"
    to: "https://gegl.org/operations/gegl-matting-levin"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Matting Levin
caption: Given a sparse user supplied tri-map and an input image, create a foreground alpha mat. Set white as selected, black as unselected, for the tri-map.
src: /images/operations/gegl-matting-levin.png
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
      ::field{name="Epsilon" type="gint"}
        Log of the error weighting  
        :icon{name="i-lucide-puzzle"} Default `-6`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-9` • :icon{name="i-lucide-arrow-right"} • `-1`. 
        
      ::
      ::field{name="Radius" type="gint"}
        Radius of the processing window  
        :icon{name="i-lucide-puzzle"} Default `1`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `3`. 
        
      ::
      ::field{name="Threshold" type="gdouble"}
        Alpha threshold for multilevel processing  
        :icon{name="i-lucide-puzzle"} Default `0.02`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `0.10`. 
        
      ::
      ::field{name="Lambda" type="gdouble"}
        Trimap influence factor  
        :icon{name="i-lucide-puzzle"} Default `100.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `100.00`. 
        
      ::
      ::field{name="Levels" type="gint"}
        Number of downsampled levels to use  
        :icon{name="i-lucide-puzzle"} Default `4`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `8`. 
        
      ::
      ::field{name="Active levels" type="gint"}
        Number of levels to perform solving  
        :icon{name="i-lucide-puzzle"} Default `2`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `8`. 
        
      ::

    ::
::