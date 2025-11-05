---
title: Recursive Transform
description: Apply a transformation recursively.
links:
  - label: "gegl:recursive-transform"
    to: "https://gegl.org/operations/gegl-recursive-transform"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Recursive Transform
caption: Apply a transformation recursively.
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
      ::field{name="Transform" type="gchararray"}
        Transformation matrix, using SVG syntax (or multiple matrices, separated by semicolons)  
        :icon{name="i-lucide-puzzle"} Default `"matrix (1, 0, 0, 0, 1, 0, 0, 0, 1)"`  
      ::
      ::field{name="First iteration" type="gint"}
        First iteration  
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `20`. 
        
      ::
      ::field{name="Iterations" type="gint"}
        Number of iterations  
        :icon{name="i-lucide-puzzle"} Default `3`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `20`. 
        
      ::
      ::field{name="Fade color" type="GeglColor"}
        Color to fade transformed images towards, with a rate depending on its alpha  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Fade opacity" type="gdouble"}
        Amount by which to scale the opacity of each transformed image  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Paste below" type="gboolean"}
        Paste transformed images below each other  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::
      ::field{name="Resampling method" type="dictionary"}
        Mathematical method for reconstructing pixel values  
        :icon{name="i-lucide-puzzle"} Default `Linear`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Nearest` • `Linear` • `Cubic` • `NoHalo` • `LoHalo` 
      ::


    ::
::