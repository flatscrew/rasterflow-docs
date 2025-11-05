---
title: Wavelet Blur
description: "This blur is used for the wavelet decomposition filter, each pixel is computed from another by the HAT transform"
links:
  - label: "gegl:wavelet-blur"
    to: "https://gegl.org/operations/gegl-wavelet-blur"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Wavelet Blur
caption: This blur is used for the wavelet decomposition filter, each pixel is computed from another by the HAT transform
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
      ::field{name="Radius" type="gdouble"}
        Radius of the wavelet blur  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1500.00`. 
        
      ::

    ::
::