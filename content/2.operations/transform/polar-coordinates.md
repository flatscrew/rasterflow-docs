---
title: Polar Coordinates
description: "Convert image to or from polar coordinates."
links:
  - label: "gegl:polar-coordinates"
    to: "https://gegl.org/operations/gegl-polar-coordinates"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Polar Coordinates
src: /images/operations/gegl-polar-coordinates.png
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
      ::field{name="Circle depth in percent" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `100.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `100.00`. 
        
      ::
      ::field{name="Offset angle" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `360.00`. 
        
      ::
      ::field{name="Map backwards" type="gboolean"}
        Start from the right instead of the left.  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::
      ::field{name="Map from top" type="gboolean"}
        Put the top row in the middle and the bottom row on the outside.  
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::
      ::field{name="To polar" type="gboolean"}
        Map the image to a circle.  
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::
      ::field{name="X" type="gint"}
        Origin point for the polar coordinates.  
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `2147483647`. 
        
      ::
      ::field{name="Y" type="gint"}
        Origin point for the polar coordinates.  
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `2147483647`. 
        
      ::
      ::field{name="Choose middle" type="gboolean"}
        Let origin point to be the middle one.  
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::

::