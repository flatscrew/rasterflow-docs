---
title: Map Absolute
description: "sample input with an auxiliary buffer that contain absolute source coordinates."
links:
  - label: "gegl:map-absolute"
    to: "https://gegl.org/operations/gegl-map-absolute"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Map Absolute
src: /images/operations/gegl-map-absolute.png
---
::

## Operation pads
This operation exposes the following data pads, defining how it receives, processes, and emits image data:

::operation-pads
---
has-input: true
has-aux: true
has-output: true
---
::

## Operation properties
::field-group
      ::field{name="Resampling method" type="dictionary"}
        
        :icon{name="i-lucide-puzzle"} Default `Cubic`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Nearest` • `Linear` • `Cubic` • `NoHalo` • `LoHalo` 
      ::

      ::field{name="Abyss policy" type="dictionary"}
        
        :icon{name="i-lucide-puzzle"} Default `None`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `None` • `Clamp` • `Loop` • `Black` • `White` 
      ::


::