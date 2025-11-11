---
title: Contrast Curve
description: "Adjusts the contrast of a grayscale image with a curve specifying contrast for intensity."
links:
  - label: "gegl:contrast-curve"
    to: "https://gegl.org/operations/gegl-contrast-curve"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Contrast Curve
caption: Adjusts the contrast of a grayscale image with a curve specifying contrast for intensity.
src: /images/operations/gegl-contrast-curve.png
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
      ::field{name="Sample points" type="gint"}
        Number of curve sampling points.  0 for exact calculation.  
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `65536`. 
        
      ::
      ::field{name="Curve" type="GeglCurve"}
        The contrast curve.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::

::