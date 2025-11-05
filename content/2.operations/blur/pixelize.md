---
title: Pixelize
description: "Simplify image into an array of solid-colored rectangles"
links:
  - label: "gegl:pixelize"
    to: "https://gegl.org/operations/gegl-pixelize"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Pixelize
caption: Simplify image into an array of solid-colored rectangles
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
      ::field{name="Shape" type="dictionary"}
        The shape of pixels  
        :icon{name="i-lucide-puzzle"} Default `Square`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Diamond` • `Round` • `Square` 
      ::

      ::field{name="Block width" type="gint"}
        Width of blocks in pixels  
        :icon{name="i-lucide-puzzle"} Default `16`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `2147483647`. 
        
      ::
      ::field{name="Block height" type="gint"}
        Height of blocks in pixels  
        :icon{name="i-lucide-puzzle"} Default `16`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `2147483647`. 
        
      ::
      ::field{name="Offset X" type="gint"}
        Horizontal offset of blocks in pixels  
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-2147483648` • :icon{name="i-lucide-arrow-right"} • `2147483647`. 
        
      ::
      ::field{name="Offset Y" type="gint"}
        Vertical offset of blocks in pixels  
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-2147483648` • :icon{name="i-lucide-arrow-right"} • `2147483647`. 
        
      ::
      ::field{name="Size ratio X" type="gdouble"}
        Horizontal size ratio of a pixel inside each block  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Size ratio Y" type="gdouble"}
        Vertical size ratio of a pixel inside each block  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Background color" type="GeglColor"}
        Color used to fill the background  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::

    ::
::