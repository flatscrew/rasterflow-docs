---
title: Gamma
description: "Math operation gamma, performs the operation per pixel, using either the constant provided in 'value' or the corresponding pixel from the buffer on aux as operands. The result is the evaluation of the expression result = (input >= 0.0f ? powf (input, value) : -powf (-input, value))"
links:
  - label: "gegl:gamma"
    to: "https://gegl.org/operations/gegl-gamma"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Gamma
caption: Math operation gamma, performs the operation per pixel, using either the constant provided in 'value' or the corresponding pixel from the buffer on aux as operands. The result is the evaluation of the expression result = (input >= 0.0f ? powf (input, value) : -powf (-input, value))
src: /images/operations/gegl-gamma.png
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
        global value used if aux doesn't contain data  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
      ::

    ::
::