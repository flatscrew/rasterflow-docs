---
title: Buffer Source
description: Use an existing in-memory GeglBuffer as image source.
links:
  - label: "gegl:buffer-source"
    to: "https://gegl.org/operations/gegl-buffer-source"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Buffer Source
caption: Use an existing in-memory GeglBuffer as image source.
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
      ::field{name="Input buffer" type="GeglBuffer"}
        The GeglBuffer to load into the pipeline  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::

    ::
::