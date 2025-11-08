---
title: 
description: "OpenEXR image saver."
links:
  - label: "gegl:exr-save"
    to: "https://gegl.org/operations/gegl-exr-save"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: 
caption: OpenEXR image saver.
src: /images/operations/gegl-exr-save.png
---
::

## Operation pads
This operation exposes the following data pads, defining how it receives, processes, and emits image data:

::operation-pads
---
has-input: true
has-aux: false
has-output: false
---
::

## Operation properties
::field-group
      ::field{name="File" type="gchararray"}
        path of file to write to.  
        :icon{name="i-lucide-puzzle"} Default `""`  
      ::
      ::field{name="Tile" type="gint"}
        tile size to use.  
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `2048`. 
        
      ::

::