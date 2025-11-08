---
title: Temporal blur
description: "Accumulating motion blur using a kalman filter, for use with video sequences of frames."
links:
  - label: "gegl:mblur"
    to: "https://gegl.org/operations/gegl-mblur"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Temporal blur
caption: Accumulating motion blur using a kalman filter, for use with video sequences of frames.
src: /images/operations/gegl-mblur.png
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
      ::field{name="Dampness" type="gdouble"}
        The value represents the contribution of the past to the new frame.  
        :icon{name="i-lucide-puzzle"} Default `0.95`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::

::