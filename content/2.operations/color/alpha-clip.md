---
title: Clip Alpha
description: Keep alpha values inside a specific range
links:
  - label: "gegl:alpha-clip"
    to: "https://gegl.org/operations/gegl-alpha-clip"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Clip Alpha
caption: Keep alpha values inside a specific range
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
      ::field{name="Clip low pixel values" type="gboolean"}
        Clip low pixel values  
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::
      ::field{name="Low limit" type="gdouble"}
        Pixels values lower than this limit will be set to it  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="Clip high pixel values" type="gboolean"}
        Clip high pixel values  
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::
      ::field{name="High limit" type="gdouble"}
        Pixels values higher than this limit will be set to it  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
      ::

    ::
::