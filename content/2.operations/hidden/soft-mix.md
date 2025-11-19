---
title: Soft Mix Blend Mode
description: "Applies a Soft Mix blend mode, inspired by Hard Mix but with smoother transitions, adjustable via Intensity Factor and Opacity, with optional sRGB gamma."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Soft Mix Blend Mode
src: /images/operations/ai-lb-soft-mix.png
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
        Adjusts the intensity of the Soft Mix effect (0.0 to 2.0).  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `2.00`. 
        
      ::
      ::field{name="Opacity" type="gdouble"}
        Blend opacity (0.0 to 1.0).  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::

::