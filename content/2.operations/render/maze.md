---
title: Maze
description: "Draw a labyrinth"
links:
  - label: "gegl:maze"
    to: "https://gegl.org/operations/gegl-maze"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Maze
caption: Draw a labyrinth
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
      ::field{name="Width" type="gint"}
        Horizontal width of cells pixels  
        :icon{name="i-lucide-puzzle"} Default `16`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `2147483647`. 
        
      ::
      ::field{name="Height" type="gint"}
        Vertical width of cells pixels  
        :icon{name="i-lucide-puzzle"} Default `16`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `2147483647`. 
        
      ::
      ::field{name="Algorithm type" type="dictionary"}
        Maze algorithm type  
        :icon{name="i-lucide-puzzle"} Default `Depth first`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Depth first` • `Prim's algorithm` 
      ::

      ::field{name="Tileable" type="gboolean"}
        
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::
      ::field{name="Random seed" type="guint"}
        
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `4294967295`. 
        
      ::
      ::field{name="Foreground Color" type="GeglColor"}
        The foreground color  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Background Color" type="GeglColor"}
        The background color  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::

    ::
::