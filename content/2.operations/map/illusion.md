---
title: Illusion
description: "Superimpose many altered copies of the image."
links:
  - label: "gegl:illusion"
    to: "https://gegl.org/operations/gegl-illusion"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Illusion
src: /images/operations/gegl-illusion.png
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
      ::field{name="Division" type="gint"}
        The number of divisions.  
        :icon{name="i-lucide-puzzle"} Default `8`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `64`. 
        
      ::
      ::field{name="Illusion type" type="dictionary"}
        Type of illusion.  
        :icon{name="i-lucide-puzzle"} Default `Type 1`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Type 1` • `Type 2` 
      ::


::