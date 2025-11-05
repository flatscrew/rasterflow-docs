---
title: JPEG File Loader
description: "JPEG image loader using libjpeg"
links:
  - label: "gegl:jpg-load"
    to: "https://gegl.org/operations/gegl-jpg-load"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: JPEG File Loader
caption: JPEG image loader using libjpeg
src: /images/operations/gegl-jpg-load.png
---
::

::collapsible
---
name: Operation pads
---
This operation exposes the following data pads, defining how it receives, processes, and emits image data:

  ::operation-pads
  ---
  has-input: false
  has-aux: false
  has-output: true
  ---
  ::
::

::collapsible
---
name: Operation properties
---

    ::field-group
      ::field{name="File" type="gchararray"}
        Path of file to load  
        :icon{name="i-lucide-puzzle"} Default `""`  
      ::
      ::field{name="URI" type="gchararray"}
        URI of file to load  
        :icon{name="i-lucide-puzzle"} Default `""`  
      ::

    ::
::