---
title: Radiant Color Blend Mode
description: "Applies a Radiant Color blend mode, enhancing the aux color in bright areas of the grayscale-inverted input for a vibrant glow, adjustable via Intensity Factor and Opacity, with optional sRGB gamma."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Radiant Color Blend Mode
src: /images/operations/ai-lb-radiant-color.png
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
      ::field{name="SRGB" type="gboolean"}
        Use sRGB gamma instead of linear.  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::
      ::field{name="Intensity Factor" type="gdouble"}
        Adjusts the strength of the Radiant Color glow (0.0 to 2.0).  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `2.00`. 
        
      ::
      ::field{name="Opacity" type="gdouble"}
        Blend opacity (0.0 to 1.0).  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::

::