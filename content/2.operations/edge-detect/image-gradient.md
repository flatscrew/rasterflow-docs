---
title: Image Gradient
description: "Compute gradient magnitude and/or direction by central differences."
links:
  - label: "gegl:image-gradient"
    to: "https://gegl.org/operations/gegl-image-gradient"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Image Gradient
src: /images/operations/gegl-image-gradient.png
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
      ::field{name="Output mode" type="dictionary"}
        Output Mode.  
        :icon{name="i-lucide-puzzle"} Default `Magnitude`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Magnitude` • `Direction` • `Both` 
      ::


::