---
title: Convert Format
description: Convert the data to the specified format
links:
  - label: "gegl:convert-format"
    to: "https://gegl.org/operations/gegl-convert-format"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Convert Format
caption: Convert the data to the specified format
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
      ::field{name="Output format" type="gpointer"}
        The babl format of the output  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::

    ::
::