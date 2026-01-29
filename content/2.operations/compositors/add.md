---
title: Add
description: "Math operation add, performs the operation per pixel, using either the constant provided in 'value' or the corresponding pixel from the buffer on aux as operands. The result is the evaluation of the expression result = input + value."
links:
  - label: "gegl:add"
    to: "https://gegl.org/operations/gegl-add"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Add
src: /images/operations/gegl-add.png
---
::

## Operation pads
This operation exposes the following data pads, defining how it receives, processes, and emits image data:

::operation-pads
---
has-input: true
has-aux: true
has-output: true
---
::

## Operation properties
::field-group
      ::field{name="Value" type="gdouble"}
        global value used if aux doesn't contain data.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::

::