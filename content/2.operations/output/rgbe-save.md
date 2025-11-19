---
title: RGBE File Saver
description: "RGBE image saver (Radiance HDR format)."
links:
  - label: "gegl:rgbe-save"
    to: "https://gegl.org/operations/gegl-rgbe-save"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: RGBE File Saver
src: /images/operations/gegl-rgbe-save.png
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
        Target path and filename, use '-' for stdout.  
        :icon{name="i-lucide-puzzle"} Default `""`  
      ::

::