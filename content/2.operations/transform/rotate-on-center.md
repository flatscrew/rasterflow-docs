---
title: Rotate on center
description: "Rotate the buffer around its center, taking care of possible offsets."
links:
  - label: "gegl:rotate-on-center"
    to: "https://gegl.org/operations/gegl-rotate-on-center"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Rotate on center
caption: Rotate the buffer around its center, taking care of possible offsets.
src: /images/operations/gegl-rotate-on-center.png
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
      ::field{name="Near-z" type="gdouble"}
        Z coordinate of the near clipping plane.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Sampler" type="dictionary"}
        Sampler used internally.  
        :icon{name="i-lucide-puzzle"} Default `Linear`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Nearest` • `Linear` • `Cubic` • `NoHalo` • `LoHalo` 
      ::

      ::field{name="Degrees" type="gdouble"}
        Angle to rotate (counter-clockwise).  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="Origin-x" type="gdouble"}
        Ignored. Always uses center of input buffer.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="Origin-y" type="gdouble"}
        Ignored. Always uses center of input buffer.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::

    ::
::