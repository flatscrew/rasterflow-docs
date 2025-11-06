---
title: Map Relative
description: "sample input with an auxiliary buffer that contain relative source coordinates."
links:
  - label: "gegl:map-relative"
    to: "https://gegl.org/operations/gegl-map-relative"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Map Relative
caption: sample input with an auxiliary buffer that contain relative source coordinates.
src: /images/operations/gegl-map-relative.png
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
      ::field{name="Scaling" type="gdouble"}
        scaling factor of displacement, indicates how large spatial displacement a relative mapping value of 1.0 corresponds to.  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `5000.00`. 
        
      ::
      ::field{name="Resampling method" type="dictionary"}
        
        :icon{name="i-lucide-puzzle"} Default `Cubic`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Nearest` • `Linear` • `Cubic` • `NoHalo` • `LoHalo` 
      ::

      ::field{name="Abyss policy" type="dictionary"}
        
        :icon{name="i-lucide-puzzle"} Default `None`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `None` • `Clamp` • `Loop` • `Black` • `White` 
      ::


    ::
::