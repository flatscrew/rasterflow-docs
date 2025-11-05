---
title: ICC profile saver
description: "Stores the ICC profile that would be embedded if stored as an image."
links:
  - label: "gegl:icc-save"
    to: "https://gegl.org/operations/gegl-icc-save"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: ICC profile saver
caption: Stores the ICC profile that would be embedded if stored as an image.
src: /images/operations/gegl-icc-save.png
---
::

::collapsible
---
name: Operation pads
---
This operation exposes the following data pads, defining how it receives, processes, and emits image data:

  ::operation-pads
  ---
  has-input: true
  has-aux: false
  has-output: false
  ---
  ::
::

::collapsible
---
name: Operation properties
---

    ::field-group
      ::field{name="File" type="gchararray"}
        Target path and filename  
        :icon{name="i-lucide-puzzle"} Default `""`  
      ::

    ::
::