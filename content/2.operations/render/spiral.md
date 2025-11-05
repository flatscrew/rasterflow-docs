---
title: Spiral
description: "Spiral renderer"
links:
  - label: "gegl:spiral"
    to: "https://gegl.org/operations/gegl-spiral"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Spiral
caption: Spiral renderer
src: /images/operations/gegl-spiral.png
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
      ::field{name="Type" type="dictionary"}
        Spiral type  
        :icon{name="i-lucide-puzzle"} Default `Linear`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Linear` • `Logarithmic` 
      ::

      ::field{name="X" type="gdouble"}
        Spiral origin X coordinate  
        :icon{name="i-lucide-puzzle"} Default `0.50`  
      ::
      ::field{name="Y" type="gdouble"}
        Spiral origin Y coordinate  
        :icon{name="i-lucide-puzzle"} Default `0.50`  
      ::
      ::field{name="Radius" type="gdouble"}
        Spiral radius  
        :icon{name="i-lucide-puzzle"} Default `100.00`  
      ::
      ::field{name="Base" type="gdouble"}
        Logarithmic spiral base  
        :icon{name="i-lucide-puzzle"} Default `2.00`  
      ::
      ::field{name="Balance" type="gdouble"}
        Area balance between the two colors  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-1.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Rotation" type="gdouble"}
        Spiral rotation  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `360.00`. 
        
      ::
      ::field{name="Direction" type="dictionary"}
        Spiral swirl direction  
        :icon{name="i-lucide-puzzle"} Default `Clockwise`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Clockwise` • `Counter-clockwise` 
      ::

      ::field{name="Color 1" type="GeglColor"}
        
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Color 2" type="GeglColor"}
        
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Width" type="gint"}
        Width of the generated buffer  
        :icon{name="i-lucide-puzzle"} Default `1024`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `2147483647`. 
        
      ::
      ::field{name="Height" type="gint"}
        Height of the generated buffer  
        :icon{name="i-lucide-puzzle"} Default `768`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `2147483647`. 
        
      ::

    ::
::