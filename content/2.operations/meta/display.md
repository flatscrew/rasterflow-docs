---
title: Display
description: "Display the input buffer in a window."
links:
  - label: "gegl:display"
    to: "https://gegl.org/operations/gegl-display"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Display
src: /images/operations/gegl-display.png
---
::

## Operation pads
This operation exposes the following data pads, defining how it receives, processes, and emits image data:

::operation-pads
---
has-input: true
has-aux: false
has-output: false
---
::

## Operation properties
::field-group
      ::field{name="Window title" type="gchararray"}
        Title to be given to output window.  
        :icon{name="i-lucide-puzzle"} Default `"window_title"`  
      ::

::