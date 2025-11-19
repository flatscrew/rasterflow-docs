---
title: Clone
description: "Clone a buffer, this is the same as gegl:nop but can get special treatment to get more human readable references in serializations/UI."
links:
  - label: "gegl:clone"
    to: "https://gegl.org/operations/gegl-clone"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Clone
src: /images/operations/gegl-clone.png
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
      ::field{name="Reference" type="gchararray"}
        The reference ID used as input (for use in XML).  
        :icon{name="i-lucide-puzzle"} Default `"ID"`  
      ::

::