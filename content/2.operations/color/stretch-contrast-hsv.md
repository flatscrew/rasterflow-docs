---
title: Stretch Contrast HSV
description: "Scales the components of the buffer to be in the 0.0-1.0 range. This improves images that make poor use of the available contrast (little contrast, very dark, or very bright images). This version differs from Contrast Autostretch in that it works in HSV space, and preserves hue."
links:
  - label: "gegl:stretch-contrast-hsv"
    to: "https://gegl.org/operations/gegl-stretch-contrast-hsv"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Stretch Contrast HSV
caption: Scales the components of the buffer to be in the 0.0-1.0 range. This improves images that make poor use of the available contrast (little contrast, very dark, or very bright images). This version differs from Contrast Autostretch in that it works in HSV space, and preserves hue.
src: /images/operations/gegl-stretch-contrast-hsv.png
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

::