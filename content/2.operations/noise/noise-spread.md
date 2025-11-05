---
title: Noise Spread
description: "Move pixels around randomly"
links:
  - label: "gegl:noise-spread"
    to: "https://gegl.org/operations/gegl-noise-spread"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Noise Spread
caption: Move pixels around randomly
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
      ::field{name="Horizontal" type="gint"}
        Horizontal spread amount  
        :icon{name="i-lucide-puzzle"} Default `5`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `512`. 
        
      ::
      ::field{name="Vertical" type="gint"}
        Vertical spread amount  
        :icon{name="i-lucide-puzzle"} Default `5`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `512`. 
        
      ::
      ::field{name="Random seed" type="guint"}
        
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `4294967295`. 
        
      ::

    ::
::