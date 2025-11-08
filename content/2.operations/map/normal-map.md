---
title: Normal Map
description: "Generate a normal map from a height map."
links:
  - label: "gegl:normal-map"
    to: "https://gegl.org/operations/gegl-normal-map"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Normal Map
caption: Generate a normal map from a height map.
src: /images/operations/gegl-normal-map.png
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
      ::field{name="Scale" type="gdouble"}
        The amount by which to scale the height values.  
        :icon{name="i-lucide-puzzle"} Default `10.00`  
      ::
      ::field{name="X Component" type="dictionary"}
        The component used for the X coordinates.  
        :icon{name="i-lucide-puzzle"} Default `Red`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Red` • `Green` • `Blue` 
      ::

      ::field{name="Y Component" type="dictionary"}
        The component used for the Y coordinates.  
        :icon{name="i-lucide-puzzle"} Default `Green`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Red` • `Green` • `Blue` 
      ::

      ::field{name="Flip X" type="gboolean"}
        Flip the X coordinates.  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::
      ::field{name="Flip Y" type="gboolean"}
        Flip the Y coordinates.  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::
      ::field{name="Full Z Range" type="gboolean"}
        Use the full [0,1] range to encode the Z coordinates.  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::
      ::field{name="Tileable" type="gboolean"}
        Generate a tileable map.  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::

::