---
title: RGBE File Loader
description: "RGBE image loader (Radiance HDR format)."
links:
  - label: "gegl:rgbe-load"
    to: "https://gegl.org/operations/gegl-rgbe-load"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: RGBE File Loader
caption: RGBE image loader (Radiance HDR format).
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