---
title: Save
description: "Multipurpose file saver, that uses other native save handlers depending on extension, use the format specific save ops to specify additional parameters."
links:
  - label: "gegl:save"
    to: "https://gegl.org/operations/gegl-save"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Save
src: /images/operations/gegl-save.png
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
        Path of file to save.  
        :icon{name="i-lucide-puzzle"} Default `""`  
      ::
      ::field{name="Metadata" type="GeglMetadata"}
        Object providing image metadata.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::

::