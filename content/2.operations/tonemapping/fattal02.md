---
title: Fattal et al. 2002 Tone Mapping
description: Adapt an image, which may have a high dynamic range, for presentation using a low dynamic range. This operator attenuates the magnitudes of local image gradients, producing luminance within the range 0.0-1.0. This tonemapping approach was originally presented by Raanan Fattal, in the 2002 SIGGRAPH paper: Gradient Domain High Dynamic Range Compression.
links:
  - label: "gegl:fattal02"
    to: "https://gegl.org/operations/gegl-fattal02"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Fattal et al. 2002 Tone Mapping
caption: Adapt an image, which may have a high dynamic range, for presentation using a low dynamic range. This operator attenuates the magnitudes of local image gradients, producing luminance within the range 0.0-1.0. This tonemapping approach was originally presented by Raanan Fattal, in the 2002 SIGGRAPH paper: Gradient Domain High Dynamic Range Compression.
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
      ::field{name="Alpha" type="gdouble"}
        Gradient threshold for detail enhancement  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `2.00`. 
        
      ::
      ::field{name="Beta" type="gdouble"}
        Strength of local detail enhancement  
        :icon{name="i-lucide-puzzle"} Default `0.90`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.10` • :icon{name="i-lucide-arrow-right"} • `2.00`. 
        
      ::
      ::field{name="Saturation" type="gdouble"}
        Global color saturation factor  
        :icon{name="i-lucide-puzzle"} Default `0.80`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Noise" type="gdouble"}
        Gradient threshold for lowering detail enhancement  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::

    ::
::