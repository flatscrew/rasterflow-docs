---
title: Copy Buffer
description: "Writes image data to an already existing buffer"
links:
  - label: "gegl:copy-buffer"
    to: "https://gegl.org/operations/gegl-copy-buffer"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Copy Buffer
caption: Writes image data to an already existing buffer
src: /images/operations/gegl-copy-buffer.png
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
  has-output: true
  ---
  ::
::

::collapsible
---
name: Operation properties
---

    ::field-group
      ::field{name="Buffer" type="GeglBuffer"}
        An already existing GeglBuffer to write incoming buffer data to, or NULL.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::

    ::
::