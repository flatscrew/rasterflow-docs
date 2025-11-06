---
title: Clip RGB
description: "Keep RGB pixels values inside a specific range."
links:
  - label: "gegl:rgb-clip"
    to: "https://gegl.org/operations/gegl-rgb-clip"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Clip RGB
caption: Keep RGB pixels values inside a specific range.
src: /images/operations/gegl-rgb-clip.png
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
        Clip low pixel values.  
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::
      ::field{name="Low limit" type="gdouble"}
        Pixels values lower than this limit will be set to it.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="Clip high pixel values" type="gboolean"}
        Clip high pixel values.  
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::
      ::field{name="High limit" type="gdouble"}
        Pixels values higher than this limit will be set to it.  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
      ::

    ::
::