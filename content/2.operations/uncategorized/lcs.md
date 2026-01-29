---
title: Swap lighting with color
description: "Swap lighting channel with a color fill."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Swap lighting with color
src: /images/operations/lb-lcs.png
---
::

## Operation pads
This operation exposes the following data pads, defining how it receives, processes, and emits image data:

::operation-pads
---
has-input: true
has-aux: false
has-output: true
---
::

## Operation properties
::field-group
      ::field{name="Color" type="GeglColor"}
        
        :icon{name="i-lucide-puzzle"} Default ``  
      ::

::