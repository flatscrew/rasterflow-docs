---
title: Convolution Matrix
description: Apply a generic 5x5 convolution matrix
links:
  - label: "gegl:convolution-matrix"
    to: "https://gegl.org/operations/gegl-convolution-matrix"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Convolution Matrix
caption: Apply a generic 5x5 convolution matrix
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
      ::field{name="(1,1)" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="(1,2)" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="(1,3)" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="(1,4)" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="(1,5)" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="(2,1)" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="(2,2)" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="(2,3)" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="(2,4)" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="(2,5)" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="(3,1)" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="(3,2)" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="(3,3)" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `1.00`  
      ::
      ::field{name="(3,4)" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="(3,5)" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="(4,1)" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="(4,2)" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="(4,3)" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="(4,4)" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="(4,5)" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="(5,1)" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="(5,2)" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="(5,3)" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="(5,4)" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="(5,5)" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="Divisor" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `1.00`  
      ::
      ::field{name="Offset" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-1.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Red channel" type="gboolean"}
        
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::
      ::field{name="Green channel" type="gboolean"}
        
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::
      ::field{name="Blue channel" type="gboolean"}
        
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::
      ::field{name="Alpha channel" type="gboolean"}
        
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::
      ::field{name="Normalize" type="gboolean"}
        
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::
      ::field{name="Alpha-weighting" type="gboolean"}
        
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::
      ::field{name="Border" type="dictionary"}
                :icon{name="i-lucide-puzzle"} Default `Clamp`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `None` • `Clamp` • `Loop` • `Black` • `White` 
      ::


    ::
::