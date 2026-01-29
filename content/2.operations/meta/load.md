---
title: Load Image
description: "Multipurpose file loader, that uses other native handlers, and fallback conversion using Image Magick's convert."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Load Image
src: /images/operations/port-load.png
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
        URI of file to load.  
        :icon{name="i-lucide-puzzle"} Default `""`  
      ::
      ::field{name="Metadata" type="GeglMetadata"}
        Object to supply image metadata.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::

::