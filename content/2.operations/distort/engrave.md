---
title: Engrave
description: "Simulate an antique engraving."
links:
  - label: "gegl:engrave"
    to: "https://gegl.org/operations/gegl-engrave"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Engrave
caption: Simulate an antique engraving.
src: /images/operations/gegl-engrave.png
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
      ::field{name="Height" type="gint"}
        Resolution in pixels.  
        :icon{name="i-lucide-puzzle"} Default `10`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `2` • :icon{name="i-lucide-arrow-right"} • `16`. 
        
      ::
      ::field{name="Limit line width" type="gboolean"}
        Limit line width.  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::

::