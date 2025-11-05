---
title: Tile Glass
description: "Simulate distortion caused by rectangular glass tiles"
links:
  - label: "gegl:tile-glass"
    to: "https://gegl.org/operations/gegl-tile-glass"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Tile Glass
caption: Simulate distortion caused by rectangular glass tiles
src: /images/operations/gegl-tile-glass.png
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
      ::field{name="Tile Width" type="gint"}
        
        :icon{name="i-lucide-puzzle"} Default `25`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `5` • :icon{name="i-lucide-arrow-right"} • `500`. 
        
      ::
      ::field{name="Tile Height" type="gint"}
        
        :icon{name="i-lucide-puzzle"} Default `25`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `5` • :icon{name="i-lucide-arrow-right"} • `500`. 
        
      ::

    ::
::