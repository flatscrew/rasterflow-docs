---
title: Layer
description: A layer in the traditional sense
links:
  - label: "gegl:layer"
    to: "https://gegl.org/operations/gegl-layer"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Layer
caption: A layer in the traditional sense
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
      ::field{name="Operation" type="gchararray"}
        Composite operation to use  
        :icon{name="i-lucide-puzzle"} Default `"gegl:over"`  
      ::
      ::field{name="Opacity" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="X" type="gdouble"}
        Horizontal position in pixels  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="Y" type="gdouble"}
        Vertical position in pixels  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="Scale" type="gdouble"}
        Scale 1:1 size  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
      ::
      ::field{name="Source" type="gchararray"}
        Source image file path (png, jpg, raw, svg, bmp, tif, ...)  
        :icon{name="i-lucide-puzzle"} Default `""`  
      ::

    ::
::