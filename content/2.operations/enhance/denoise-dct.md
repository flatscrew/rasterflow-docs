---
title: Denoise DCT
description: "Denoising algorithm using a per-patch DCT thresholding"
links:
  - label: "gegl:denoise-dct"
    to: "https://gegl.org/operations/gegl-denoise-dct"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Denoise DCT
caption: Denoising algorithm using a per-patch DCT thresholding
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
      ::field{name="Patch size" type="dictionary"}
        Size of patches used to denoise  
        :icon{name="i-lucide-puzzle"} Default `8x8`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `8x8` • `16x16` 
      ::

      ::field{name="Strength" type="gdouble"}
        Noise standard deviation  
        :icon{name="i-lucide-puzzle"} Default `5.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1.00` • :icon{name="i-lucide-arrow-right"} • `100.00`. 
        
      ::

    ::
::