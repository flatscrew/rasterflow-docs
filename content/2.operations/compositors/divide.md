---
title: Divide
description: "Math operation divide, performs the operation per pixel, using either the constant provided in 'value' or the corresponding pixel from the buffer on aux as operands. The result is the evaluation of the expression result = value==0.0f?0.0f:input/value."
links:
  - label: "gegl:divide"
    to: "https://gegl.org/operations/gegl-divide"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Divide
caption: Math operation divide, performs the operation per pixel, using either the constant provided in 'value' or the corresponding pixel from the buffer on aux as operands. The result is the evaluation of the expression result = value==0.0f?0.0f:input/value.
src: /images/operations/gegl-divide.png
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
        :icon{name="i-lucide-puzzle"} Default `1.00`  
      ::

::