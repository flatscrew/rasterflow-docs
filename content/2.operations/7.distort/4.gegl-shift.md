---
title: Shift
description: Shift each row or column of pixels by a random amount
links:
  - label: "gegl:shift"
    to: "https://gegl.org/operations/gegl-shift"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Shift
caption: Shift each row or column of pixels by a random amount
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
      ::field{name="Shift" type="gint"}
        Maximum amount to shift  
        :icon{name="i-lucide-puzzle"} Default `5`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `200`. 
        
      ::
      ::field{name="Shift direction" type="dictionary"}
                :icon{name="i-lucide-puzzle"} Default `Horizontal`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Horizontal` • `Vertical` 
      ::

      ::field{name="Random seed" type="guint"}
        
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `4294967295`. 
        
      ::

    ::
::