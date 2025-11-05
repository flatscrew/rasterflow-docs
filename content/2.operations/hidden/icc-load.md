---
title: ICC File Loader
description: "ICC profile loader."
links:
  - label: "gegl:icc-load"
    to: "https://gegl.org/operations/gegl-icc-load"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: ICC File Loader
caption: ICC profile loader.
src: /images/operations/gegl-icc-load.png
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

    ::
::