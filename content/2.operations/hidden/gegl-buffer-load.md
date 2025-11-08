---
title: 
description: "GeglBuffer file loader."
links:
  - label: "gegl:gegl-buffer-load"
    to: "https://gegl.org/operations/gegl-gegl-buffer-load"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: 
caption: GeglBuffer file loader.
src: /images/operations/gegl-gegl-buffer-load.png
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
        Path of GeglBuffer file to load.  
        :icon{name="i-lucide-puzzle"} Default `"/tmp/gegl-buffer.gegl"`  
      ::

::