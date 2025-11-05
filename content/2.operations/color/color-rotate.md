---
title: Color Rotate
description: Replace a range of colors with another
links:
  - label: "gegl:color-rotate"
    to: "https://gegl.org/operations/gegl-color-rotate"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Color Rotate
caption: Replace a range of colors with another
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
      ::field{name="Clockwise" type="gboolean"}
        Switch to clockwise  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::
      ::field{name="From" type="gdouble"}
        Start angle of the source color range  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `360.00`. 
        
      ::
      ::field{name="To" type="gdouble"}
        End angle of the source color range  
        :icon{name="i-lucide-puzzle"} Default `90.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `360.00`. 
        
      ::
      ::field{name="Clockwise" type="gboolean"}
        Switch to clockwise  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::
      ::field{name="From" type="gdouble"}
        Start angle of the destination color range  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `360.00`. 
        
      ::
      ::field{name="To" type="gdouble"}
        End angle of the destination color range  
        :icon{name="i-lucide-puzzle"} Default `90.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `360.00`. 
        
      ::
      ::field{name="Gray threshold" type="gdouble"}
        Colors with a saturation less than this will treated as gray  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Gray mode" type="dictionary"}
        Treat as this: Gray colors from above source range will be treated as if they had this hue and saturation
Change to this: Change gray colors to this hue and saturation  
        :icon{name="i-lucide-puzzle"} Default `Change to this`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Treat as this` • `Change to this` 
      ::

      ::field{name="Hue" type="gdouble"}
        Hue value for above gray settings  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `360.00`. 
        
      ::
      ::field{name="Saturation" type="gdouble"}
        Saturation value for above gray settings  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::

    ::
::