---
title: Posterize
description: "Reduces the number of levels in each color component of the image."
links:
  - label: "gegl:posterize"
    to: "https://gegl.org/operations/gegl-posterize"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Posterize
src: /images/operations/gegl-posterize.png
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
      ::field{name="Levels" type="gint"}
        number of levels per component.  
        :icon{name="i-lucide-puzzle"} Default `8`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `64`. 
        
      ::

::