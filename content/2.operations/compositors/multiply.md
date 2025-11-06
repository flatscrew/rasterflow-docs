---
title: Multiply
description: "Math operation multiply, performs the operation per pixel, using either the constant provided in 'value' or the corresponding pixel from the buffer on aux as operands. The result is the evaluation of the expression result = input * value."
links:
  - label: "gegl:multiply"
    to: "https://gegl.org/operations/gegl-multiply"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Multiply
caption: Math operation multiply, performs the operation per pixel, using either the constant provided in 'value' or the corresponding pixel from the buffer on aux as operands. The result is the evaluation of the expression result = input * value.
src: /images/operations/gegl-multiply.png
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
      ::field{name="Value" type="gdouble"}
        global value used if aux doesn't contain data.  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
      ::

    ::
::