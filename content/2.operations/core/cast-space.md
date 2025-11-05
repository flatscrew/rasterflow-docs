---
title: Cast color space
description: Override the specified color space setting a pointer to a format override the string property and setting an aux pad overrides both. 
links:
  - label: "gegl:cast-space"
    to: "https://gegl.org/operations/gegl-cast-space"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Cast color space
caption: Override the specified color space setting a pointer to a format override the string property and setting an aux pad overrides both. 
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
      ::field{name="Name" type="gchararray"}
        One of: sRGB, Adobish, Rec2020, ProPhoto, Apple, ACEScg, ACES2065-1  
        :icon{name="i-lucide-puzzle"} Default `"sRGB"`  
      ::
      ::field{name="Pointer" type="gpointer"}
        pointer to a const * Babl space  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Path" type="gchararray"}
        File system path to ICC matrix profile to load  
        :icon{name="i-lucide-puzzle"} Default `""`  
      ::

    ::
::