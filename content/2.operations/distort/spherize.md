---
title: Spherize
description: "Wrap image around a spherical cap."
links:
  - label: "gegl:spherize"
    to: "https://gegl.org/operations/gegl-spherize"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Spherize
caption: Wrap image around a spherical cap.
src: /images/operations/gegl-spherize.png
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
      ::field{name="Mode" type="dictionary"}
        Displacement mode.  
        :icon{name="i-lucide-puzzle"} Default `Radial`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Radial` • `Horizontal` • `Vertical` 
      ::

      ::field{name="Angle of view" type="gdouble"}
        Camera angle of view.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `180.00`. 
        
      ::
      ::field{name="Curvature" type="gdouble"}
        Spherical cap apex angle, as a fraction of the co-angle of view.  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Amount" type="gdouble"}
        Displacement scaling factor (negative values refer to the inverse displacement).  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-1.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Resampling method" type="dictionary"}
        Mathematical method for reconstructing pixel values.  
        :icon{name="i-lucide-puzzle"} Default `Linear`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Nearest` • `Linear` • `Cubic` • `NoHalo` • `LoHalo` 
      ::


    ::
::