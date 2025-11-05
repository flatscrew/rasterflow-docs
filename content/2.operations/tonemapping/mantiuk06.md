---
title: Mantiuk 2006 Tone Mapping
description: "Adapt an image, which may have a high dynamic range, for presentation using a low dynamic range. This operator constrains contrasts across multiple spatial frequencies, producing luminance within the range 0.0-1.0"
links:
  - label: "gegl:mantiuk06"
    to: "https://gegl.org/operations/gegl-mantiuk06"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Mantiuk 2006 Tone Mapping
caption: Adapt an image, which may have a high dynamic range, for presentation using a low dynamic range. This operator constrains contrasts across multiple spatial frequencies, producing luminance within the range 0.0-1.0
src: /images/operations/gegl-mantiuk06.png
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
      ::field{name="Contrast" type="gdouble"}
        The amount of contrast compression  
        :icon{name="i-lucide-puzzle"} Default `0.10`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Saturation" type="gdouble"}
        Global color saturation factor  
        :icon{name="i-lucide-puzzle"} Default `0.80`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `2.00`. 
        
      ::
      ::field{name="Detail" type="gdouble"}
        Level of emphasis on image gradient details  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1.00` • :icon{name="i-lucide-arrow-right"} • `99.00`. 
        
      ::

    ::
::