---
title: Convert color space
description: "set color space which subsequent babl-formats in the pipeline are created with, and the ICC profile potentially embedded for external color management, setting a pointer to a format overrides the string property and setting an aux pad overrides both. ."
links:
  - label: "gegl:convert-space"
    to: "https://gegl.org/operations/gegl-convert-space"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Convert color space
caption: set color space which subsequent babl-formats in the pipeline are created with, and the ICC profile potentially embedded for external color management, setting a pointer to a format overrides the string property and setting an aux pad overrides both. .
src: /images/operations/gegl-convert-space.png
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
  has-aux: true
  has-output: true
  ---
  ::
::

::collapsible
---
name: Operation properties
---

    ::field-group
      ::field{name="Space name" type="gchararray"}
        One of: sRGB, Adobish, Rec2020, ProPhoto, Apple, ACEScg, ACES2065-1.  
        :icon{name="i-lucide-puzzle"} Default `"sRGB"`  
      ::
      ::field{name="Pointer" type="gpointer"}
        pointer to a const * Babl space.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Path" type="gchararray"}
        File system path to ICC matrix profile to load.  
        :icon{name="i-lucide-puzzle"} Default `""`  
      ::

    ::
::