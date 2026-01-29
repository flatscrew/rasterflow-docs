---
title: Velvet Overlay Blend Mode
description: "Applies a Velvet Overlay blend mode, adding a soft, velvety texture enhancement, adjustable via Intensity Factor and Opacity."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Velvet Overlay Blend Mode
src: /images/operations/ai-lb-velvet-overlay.png
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
        Multiplier for velvet texture strength (0.0 to 8.0).  
        :icon{name="i-lucide-puzzle"} Default `6.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `8.00`. 
        
      ::
      ::field{name="Opacity" type="gdouble"}
        Blend opacity (0.0 to 1.0).  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::

::