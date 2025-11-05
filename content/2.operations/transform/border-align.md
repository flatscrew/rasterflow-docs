---
title: Border Align
description: "Aligns box of input rectangle with border of compositing target or aux' bounding-box border, if aux pad is not connected the op tries to figure out which bounding box' border applies."
links:
  - label: "gegl:border-align"
    to: "https://gegl.org/operations/gegl-border-align"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Border Align
caption: Aligns box of input rectangle with border of compositing target or aux' bounding-box border, if aux pad is not connected the op tries to figure out which bounding box' border applies.
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
  has-aux: true
  has-output: true
  ---
  ::
::

::collapsible
---
name: Operation properties
---

    ::field-group
      ::field{name="Origin-x" type="gdouble"}
        X coordinate of origin  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="Origin-y" type="gdouble"}
        Y coordinate of origin  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="Near-z" type="gdouble"}
        Z coordinate of the near clipping plane  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Sampler" type="dictionary"}
        Sampler used internally  
        :icon{name="i-lucide-puzzle"} Default `Linear`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Nearest` • `Linear` • `Cubic` • `NoHalo` • `LoHalo` 
      ::

      ::field{name="X" type="gdouble"}
        Horizontal justification 0.0 is left 0.5 centered and 1.0 right.  
        :icon{name="i-lucide-puzzle"} Default `0.50`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-2.00` • :icon{name="i-lucide-arrow-right"} • `3.00`. 
        
      ::
      ::field{name="Y" type="gdouble"}
        Vertical justification 0.0 is top 0.5 middle and 1.0 bottom.  
        :icon{name="i-lucide-puzzle"} Default `0.50`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-2.00` • :icon{name="i-lucide-arrow-right"} • `3.00`. 
        
      ::
      ::field{name="Horizontal Margin" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="Vertical Margin" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="snap to integer position" type="gboolean"}
        
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::

    ::
::