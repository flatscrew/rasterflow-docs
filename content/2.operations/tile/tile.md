---
title: Tile
description: "Infinitely repeats the input image."
links:
  - label: "gegl:tile"
    to: "https://gegl.org/operations/gegl-tile"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Tile
caption: Infinitely repeats the input image.
src: /images/operations/gegl-tile.png
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
      ::field{name="Horizontal offset" type="gint"}
        
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-2147483648` • :icon{name="i-lucide-arrow-right"} • `2147483647`. 
        
      ::
      ::field{name="Vertical offset" type="gint"}
        
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-2147483648` • :icon{name="i-lucide-arrow-right"} • `2147483647`. 
        
      ::

::