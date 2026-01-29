---
title: Deinterlace
description: "Fix images where every other row or column is missing."
links:
  - label: "gegl:deinterlace"
    to: "https://gegl.org/operations/gegl-deinterlace"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Deinterlace
src: /images/operations/gegl-deinterlace.png
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
      ::field{name="Keep" type="dictionary"}
        Keep even or odd fields.  
        :icon{name="i-lucide-puzzle"} Default `Keep even fields`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Keep even fields` • `Keep odd fields` 
      ::

      ::field{name="Orientation" type="dictionary"}
        Deinterlace horizontally or vertically.  
        :icon{name="i-lucide-puzzle"} Default `Horizontal`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Horizontal` • `Vertical` 
      ::

      ::field{name="Block size" type="gint"}
        Block size of deinterlacing rows/columns.  
        :icon{name="i-lucide-puzzle"} Default `1`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `100`. 
        
      ::

::