---
title: 
description: "Performs n-point image deformation."
links:
  - label: "gegl:npd"
    to: "https://gegl.org/operations/gegl-npd"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: 
caption: Performs n-point image deformation.
src: /images/operations/gegl-npd.png
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
      ::field{name="Model" type="gpointer"}
        Model - basic element we operate on.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Square Size" type="gint"}
        Size of an edge of square the mesh consists of.  
        :icon{name="i-lucide-puzzle"} Default `20`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `5` • :icon{name="i-lucide-arrow-right"} • `1000`. 
        
      ::
      ::field{name="Rigidity" type="gint"}
        The number of deformation iterations.  
        :icon{name="i-lucide-puzzle"} Default `100`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `10000`. 
        
      ::
      ::field{name="ASAP Deformation" type="gboolean"}
        ASAP deformation is performed when TRUE, ARAP deformation otherwise.  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::
      ::field{name="MLS Weights" type="gboolean"}
        Use MLS weights.  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::
      ::field{name="MLS Weights Alpha" type="gdouble"}
        Alpha parameter of MLS weights.  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.10` • :icon{name="i-lucide-arrow-right"} • `2.00`. 
        
      ::
      ::field{name="Preserve Model" type="gboolean"}
        When TRUE the model will not be freed.  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::
      ::field{name="Sampler" type="dictionary"}
        Sampler used internally.  
        :icon{name="i-lucide-puzzle"} Default `Cubic`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Nearest` • `Linear` • `Cubic` • `NoHalo` • `LoHalo` 
      ::


    ::
::