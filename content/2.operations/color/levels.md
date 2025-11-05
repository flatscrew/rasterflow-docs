---
title: Levels
description: "Remaps the intensity range of the image"
links:
  - label: "gegl:levels"
    to: "https://gegl.org/operations/gegl-levels"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Levels
caption: Remaps the intensity range of the image
src: /images/operations/gegl-levels.png
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
      ::field{name="Low input" type="gdouble"}
        Input luminance level to become lowest output  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="High input" type="gdouble"}
        Input luminance level to become white  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
      ::
      ::field{name="Low output" type="gdouble"}
        Lowest luminance level in output  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="High output" type="gdouble"}
        Highest luminance level in output  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
      ::

    ::
::