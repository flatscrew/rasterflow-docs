---
title: Texturize Canvas
description: "Textures the image as if it were an artist's canvas."
links:
  - label: "gegl:texturize-canvas"
    to: "https://gegl.org/operations/gegl-texturize-canvas"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Texturize Canvas
caption: Textures the image as if it were an artist's canvas.
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
  has-aux: false
  has-output: true
  ---
  ::
::

::collapsible
---
name: Operation properties
---

    ::field-group
      ::field{name="Direction" type="dictionary"}
        Position of the light source which lightens the canvas: Top-right, Top-left, Bottom-left or Bottom-right  
        :icon{name="i-lucide-puzzle"} Default `Top-right`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Top-right` • `Top-left` • `Bottom-left` • `Bottom-right` 
      ::

      ::field{name="Depth" type="gint"}
        Apparent depth of the rendered canvas effect; from 1 (very flat) to 50 (very deep)  
        :icon{name="i-lucide-puzzle"} Default `4`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `50`. 
        
      ::

    ::
::