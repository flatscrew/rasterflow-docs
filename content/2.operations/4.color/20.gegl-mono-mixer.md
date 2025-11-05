---
title: Mono Mixer
description: Monochrome channel mixer
links:
  - label: "gegl:mono-mixer"
    to: "https://gegl.org/operations/gegl-mono-mixer"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Mono Mixer
caption: Monochrome channel mixer
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
      ::field{name="Preserve luminosity" type="gboolean"}
        
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::
      ::field{name="Red Channel Multiplier" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.33`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-5.00` • :icon{name="i-lucide-arrow-right"} • `5.00`. 
        
      ::
      ::field{name="Green Channel Multiplier" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.33`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-5.00` • :icon{name="i-lucide-arrow-right"} • `5.00`. 
        
      ::
      ::field{name="Blue Channel Multiplier" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.33`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-5.00` • :icon{name="i-lucide-arrow-right"} • `5.00`. 
        
      ::

    ::
::