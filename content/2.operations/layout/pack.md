---
title: Pack
description: "Packs an image horizontally or vertically next to each other with optional gap, aux right of input."
links:
  - label: "gegl:pack"
    to: "https://gegl.org/operations/gegl-pack"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Pack
caption: Packs an image horizontally or vertically next to each other with optional gap, aux right of input.
src: /images/operations/gegl-pack.png
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
      ::field{name="Gap" type="gdouble"}
        How many pixels of space between items  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="Align" type="gdouble"}
        How to align items, 0.0 is start 0.5 middle and 1.0 end.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="Orientation" type="dictionary"}
                :icon{name="i-lucide-puzzle"} Default `Horizontal`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Horizontal` • `Vertical` 
      ::


    ::
::