---
title: 
description: "GeglBuffer file writer."
links:
  - label: "gegl:gegl-buffer-save"
    to: "https://gegl.org/operations/gegl-gegl-buffer-save"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: 
caption: GeglBuffer file writer.
src: /images/operations/gegl-gegl-buffer-save.png
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
        Target file path to write GeglBuffer to.  
        :icon{name="i-lucide-puzzle"} Default `"/tmp/gegl-buffer.gegl"`  
      ::

    ::
::