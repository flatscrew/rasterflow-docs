---
title: Mini Shape Imprints
description: "Mini Shape Inprints."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Mini Shape Imprints
src: /images/operations/lb-msi.png
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
      ::field{name="Radius" type="gint"}
        Size of the mini shapes.  
        :icon{name="i-lucide-puzzle"} Default `4`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `50`. 
        
      ::
      ::field{name="Shape type" type="dictionary"}
        Neighborhood type.  
        :icon{name="i-lucide-puzzle"} Default `Circle`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Square` • `Circle` • `Diamond` 
      ::

      ::field{name="Depth" type="gint"}
        Depth of the mini shapes.  
        :icon{name="i-lucide-puzzle"} Default `25`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `100`. 
        
      ::

::