---
title: Oilify
description: "Emulate an oil painting"
links:
  - label: "gegl:oilify"
    to: "https://gegl.org/operations/gegl-oilify"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Oilify
caption: Emulate an oil painting
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
      ::field{name="Mask Radius" type="gint"}
        Radius of circle around pixel, can also be scaled per pixel by a buffer on the aux pad.  
        :icon{name="i-lucide-puzzle"} Default `4`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `100`. 
        
      ::
      ::field{name="Exponent" type="gint"}
        Exponent for processing; controls smoothness - can be scaled per pixel with a buffer on the aux2 pad.  
        :icon{name="i-lucide-puzzle"} Default `8`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `20`. 
        
      ::
      ::field{name="Number of intensities" type="gint"}
        Histogram size  
        :icon{name="i-lucide-puzzle"} Default `128`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `8` • :icon{name="i-lucide-arrow-right"} • `256`. 
        
      ::
      ::field{name="Intensity Mode" type="gboolean"}
        Use pixel luminance values  
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::

    ::
::