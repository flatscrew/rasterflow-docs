---
title: Lens Flare
description: "Adds a lens flare effect."
links:
  - label: "gegl:lens-flare"
    to: "https://gegl.org/operations/gegl-lens-flare"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Lens Flare
caption: Adds a lens flare effect.
src: /images/operations/gegl-lens-flare.png
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
      ::field{name="X position" type="gdouble"}
        X coordinates of the flare center.  
        :icon{name="i-lucide-puzzle"} Default `0.50`  
      ::
      ::field{name="Y position" type="gdouble"}
        Y coordinates of the flare center.  
        :icon{name="i-lucide-puzzle"} Default `0.50`  
      ::

    ::
::