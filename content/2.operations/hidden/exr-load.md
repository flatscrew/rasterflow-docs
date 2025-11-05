---
title: 
description: "EXR image loader."
links:
  - label: "gegl:exr-load"
    to: "https://gegl.org/operations/gegl-exr-load"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: 
caption: EXR image loader.
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

    ::
::