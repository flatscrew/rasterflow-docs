---
title: PNG File Loader
description: "PNG image loader."
links:
  - label: "gegl:png-load"
    to: "https://gegl.org/operations/gegl-png-load"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: PNG File Loader
caption: PNG image loader.
src: /images/operations/gegl-png-load.png
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
        Path of file to load.  
        :icon{name="i-lucide-puzzle"} Default `""`  
      ::
      ::field{name="URI" type="gchararray"}
        URI for file to load.  
        :icon{name="i-lucide-puzzle"} Default `""`  
      ::
      ::field{name="Metadata" type="GeglMetadata"}
        Object to supply image metadata.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::

::