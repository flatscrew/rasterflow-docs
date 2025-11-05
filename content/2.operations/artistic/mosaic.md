---
title: Mosaic
description: Mosaic is a filter which transforms an image into what appears to be a mosaic, composed of small primitives, each of constant color and of an approximate size.
links:
  - label: "gegl:mosaic"
    to: "https://gegl.org/operations/gegl-mosaic"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Mosaic
caption: Mosaic is a filter which transforms an image into what appears to be a mosaic, composed of small primitives, each of constant color and of an approximate size.
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
      ::field{name="Tile geometry" type="dictionary"}
        What shape to use for tiles  
        :icon{name="i-lucide-puzzle"} Default `Hexagons`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Squares` • `Hexagons` • `Octagons` • `Triangles` 
      ::

      ::field{name="Tile size" type="gdouble"}
        Average diameter of each tile (in pixels)  
        :icon{name="i-lucide-puzzle"} Default `15.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1.00` • :icon{name="i-lucide-arrow-right"} • `1000.00`. 
        
      ::
      ::field{name="Tile height" type="gdouble"}
        Apparent height of each tile (in pixels)  
        :icon{name="i-lucide-puzzle"} Default `4.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1.00` • :icon{name="i-lucide-arrow-right"} • `1000.00`. 
        
      ::
      ::field{name="Tile neatness" type="gdouble"}
        Deviation from perfectly formed tiles  
        :icon{name="i-lucide-puzzle"} Default `0.65`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Tile color variation" type="gdouble"}
        Magnitude of random color variations  
        :icon{name="i-lucide-puzzle"} Default `0.20`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Color averaging" type="gboolean"}
        Tile color based on average of subsumed pixels  
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::
      ::field{name="Rough tile surface" type="gboolean"}
        Surface characteristics  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::
      ::field{name="Allow splitting tiles" type="gboolean"}
        Allows splitting tiles at hard edges  
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::
      ::field{name="Tile spacing" type="gdouble"}
        Inter-tile spacing (in pixels)  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1000.00`. 
        
      ::
      ::field{name="Joints color" type="GeglColor"}
        
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Light color" type="GeglColor"}
        
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Light direction" type="gdouble"}
        Direction of light-source (in degrees)  
        :icon{name="i-lucide-puzzle"} Default `135.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `360.00`. 
        
      ::
      ::field{name="Antialiasing" type="gboolean"}
        Enables smoother tile output  
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::
      ::field{name="Random seed" type="guint"}
        
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `4294967295`. 
        
      ::

    ::
::