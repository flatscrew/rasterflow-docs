---
title: Write Buffer
description: "Write input data into an existing GEGL buffer destination surface."
links:
  - label: "gegl:write-buffer"
    to: "https://gegl.org/operations/gegl-write-buffer"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Write Buffer
caption: Write input data into an existing GEGL buffer destination surface.
src: /images/operations/gegl-write-buffer.png
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
      ::field{name="Buffer location" type="GeglBuffer"}
        A pre-existing GeglBuffer to write incoming buffer data to.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::

::