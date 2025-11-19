---
title: Sobel Edge Detection
description: "Specialized direction-dependent edge detection."
links:
  - label: "gegl:edge-sobel"
    to: "https://gegl.org/operations/gegl-edge-sobel"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Sobel Edge Detection
src: /images/operations/gegl-edge-sobel.png
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
      ::field{name="Horizontal" type="gboolean"}
        
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::
      ::field{name="Vertical" type="gboolean"}
        
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::
      ::field{name="Keep Sign" type="gboolean"}
        Keep negative values in result; when off, the absolute value of the result is used instead.  
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::

::