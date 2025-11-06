---
title: Bayer Matrix
description: "Generate a Bayer matrix pattern."
links:
  - label: "gegl:bayer-matrix"
    to: "https://gegl.org/operations/gegl-bayer-matrix"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Bayer Matrix
caption: Generate a Bayer matrix pattern.
src: /images/operations/gegl-bayer-matrix.png
---
::

::collapsible
---
name: Operation pads
---
This operation exposes the following data pads, defining how it receives, processes, and emits image data:

  ::operation-pads
  ---
  has-input: false
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
      ::field{name="Subdivisions" type="gint"}
        Number of subdivisions.  
        :icon{name="i-lucide-puzzle"} Default `1`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `15`. 
        
      ::
      ::field{name="X Scale" type="gint"}
        Horizontal pattern scale.  
        :icon{name="i-lucide-puzzle"} Default `1`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `2147483647`. 
        
      ::
      ::field{name="Y Scale" type="gint"}
        Vertical pattern scale.  
        :icon{name="i-lucide-puzzle"} Default `1`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `2147483647`. 
        
      ::
      ::field{name="Rotation" type="dictionary"}
        Pattern rotation angle.  
        :icon{name="i-lucide-puzzle"} Default `0°`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `0°` • `90°` • `180°` • `270°` 
      ::

      ::field{name="Reflect" type="gboolean"}
        Reflect the pattern horizontally.  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::
      ::field{name="Amplitude" type="gdouble"}
        Pattern amplitude (logarithmic scale).  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="Offset" type="gdouble"}
        Value offset.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="Exponent" type="gdouble"}
        Value exponent (logarithmic scale).  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="X Offset" type="gint"}
        Offset for X axis.  
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-2147483648` • :icon{name="i-lucide-arrow-right"} • `2147483647`. 
        
      ::
      ::field{name="Y Offset" type="gint"}
        Offset for Y axis.  
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-2147483648` • :icon{name="i-lucide-arrow-right"} • `2147483647`. 
        
      ::

    ::
::