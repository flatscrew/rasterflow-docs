---
title: Waves
description: Distort the image with waves
links:
  - label: "gegl:waves"
    to: "https://gegl.org/operations/gegl-waves"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Waves
caption: Distort the image with waves
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
      ::field{name="Center X" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.50`  
      ::
      ::field{name="Center Y" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.50`  
      ::
      ::field{name="Amplitude" type="gdouble"}
        Amplitude of the ripple  
        :icon{name="i-lucide-puzzle"} Default `25.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1000.00`. 
        
      ::
      ::field{name="Period" type="gdouble"}
        Period (wavelength) of the ripple  
        :icon{name="i-lucide-puzzle"} Default `100.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.10` • :icon{name="i-lucide-arrow-right"} • `1000.00`. 
        
      ::
      ::field{name="Phase shift" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-1.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Aspect ratio" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.10` • :icon{name="i-lucide-arrow-right"} • `10.00`. 
        
      ::
      ::field{name="Resampling method" type="dictionary"}
        Mathematical method for reconstructing pixel values  
        :icon{name="i-lucide-puzzle"} Default `Cubic`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Nearest` • `Linear` • `Cubic` • `NoHalo` • `LoHalo` 
      ::

      ::field{name="Clamp deformation" type="gboolean"}
        Limit deformation in the image area.  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::

    ::
::