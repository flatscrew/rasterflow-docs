---
title: Open GEGL Buffer
description: "Use an on-disk GeglBuffer as data source."
links:
  - label: "gegl:open-buffer"
    to: "https://gegl.org/operations/gegl-open-buffer"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Open GEGL Buffer
src: /images/operations/gegl-open-buffer.png
---
::

## Operation pads
This operation exposes the following data pads, defining how it receives, processes, and emits image data:

::operation-pads
---
has-input: false
has-aux: false
has-output: true
---
::

## Operation properties
::field-group
      ::field{name="File" type="gchararray"}
        a GeglBuffer on disk to open.  
        :icon{name="i-lucide-puzzle"} Default `""`  
      ::

::