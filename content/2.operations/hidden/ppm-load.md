---
title: PPM File Loader
description: "PPM image loader."
links:
  - label: "gegl:ppm-load"
    to: "https://gegl.org/operations/gegl-ppm-load"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: PPM File Loader
caption: PPM image loader.
src: /images/operations/gegl-ppm-load.png
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
        Path of file to load.  
        :icon{name="i-lucide-puzzle"} Default `""`  
      ::
      ::field{name="URI" type="gchararray"}
        URI of image to load.  
        :icon{name="i-lucide-puzzle"} Default `""`  
      ::

    ::
::