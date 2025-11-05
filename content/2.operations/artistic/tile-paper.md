---
title: Paper Tile
description: "Cut image into paper tiles, and slide them"
links:
  - label: "gegl:tile-paper"
    to: "https://gegl.org/operations/gegl-tile-paper"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Paper Tile
caption: Cut image into paper tiles, and slide them
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
      ::field{name="Tile Width" type="gint"}
        Width of the tile  
        :icon{name="i-lucide-puzzle"} Default `155`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `2147483647`. 
        
      ::
      ::field{name="Tile Height" type="gint"}
        Height of the tile  
        :icon{name="i-lucide-puzzle"} Default `56`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `2147483647`. 
        
      ::
      ::field{name="Move rate" type="gdouble"}
        Move rate  
        :icon{name="i-lucide-puzzle"} Default `25.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1.00` • :icon{name="i-lucide-arrow-right"} • `100.00`. 
        
      ::
      ::field{name="Wrap around" type="gboolean"}
        Wrap the fractional tiles  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::
      ::field{name="Fractional type" type="dictionary"}
        Fractional Type  
        :icon{name="i-lucide-puzzle"} Default `Force`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Background` • `Ignore` • `Force` 
      ::

      ::field{name="Centering" type="gboolean"}
        Centering of the tiles  
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::
      ::field{name="Background type" type="dictionary"}
        Background type  
        :icon{name="i-lucide-puzzle"} Default `Inverted image`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Transparent` • `Inverted image` • `Image` • `Color` 
      ::

      ::field{name="Background color" type="GeglColor"}
        The tiles' background color  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Random seed" type="guint"}
        
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `4294967295`. 
        
      ::

    ::
::