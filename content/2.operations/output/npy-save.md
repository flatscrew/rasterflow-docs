---
title: NumPy File Saver
description: "NumPy (Numerical Python) image saver."
links:
  - label: "gegl:npy-save"
    to: "https://gegl.org/operations/gegl-npy-save"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: NumPy File Saver
caption: NumPy (Numerical Python) image saver.
src: /images/operations/gegl-npy-save.png
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
        Target path and filename, use '-' for stdout.  
        :icon{name="i-lucide-puzzle"} Default `""`  
      ::

    ::
::