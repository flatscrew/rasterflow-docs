---
title: Four Corners Gradient
description: "Renders a gradient with customizable colors at each of the four corners of the canvas."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Four Corners Gradient
src: /images/operations/ai-lb-four-corners-gradient.png
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
      ::field{name="Interpolation Type" type="dictionary"}
        Select the interpolation method for the gradient (Linear for standard blending, Cubic for smoother transitions).  
        :icon{name="i-lucide-puzzle"} Default `Cubic`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Linear` • `Cubic` 
      ::

      ::field{name="Top-Left Color" type="GeglColor"}
        Color for the top-left corner of the gradient.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Top-Right Color" type="GeglColor"}
        Color for the top-right corner of the gradient.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Bottom-Left Color" type="GeglColor"}
        Color for the bottom-left corner of the gradient.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Bottom-Right Color" type="GeglColor"}
        Color for the bottom-right corner of the gradient.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::

::