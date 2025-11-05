---
title: Cast Format
description: "Cast the data between input_format and output_format, both formats must have the same bpp"
links:
  - label: "gegl:cast-format"
    to: "https://gegl.org/operations/gegl-cast-format"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Cast Format
caption: Cast the data between input_format and output_format, both formats must have the same bpp
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
      ::field{name="Input format" type="gpointer"}
        The babl format of the input  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Output format" type="gpointer"}
        The babl format of the output  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::

    ::
::