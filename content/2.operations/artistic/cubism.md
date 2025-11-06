---
title: Cubism
description: "Convert the image into randomly rotated square blobs, somehow resembling a cubist painting style."
links:
  - label: "gegl:cubism"
    to: "https://gegl.org/operations/gegl-cubism"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Cubism
caption: Convert the image into randomly rotated square blobs, somehow resembling a cubist painting style.
src: /images/operations/gegl-cubism.png
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
      ::field{name="Tile size" type="gdouble"}
        Average diameter of each tile (in pixels).  
        :icon{name="i-lucide-puzzle"} Default `10.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `256.00`. 
        
      ::
      ::field{name="Tile saturation" type="gdouble"}
        Expand tiles by this amount.  
        :icon{name="i-lucide-puzzle"} Default `2.50`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `10.00`. 
        
      ::
      ::field{name="Background color" type="GeglColor"}
        The tiles' background color.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Random seed" type="guint"}
        
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `4294967295`. 
        
      ::

    ::
::