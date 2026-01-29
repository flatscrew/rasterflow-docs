---
title: Edge Extraction
description: "Extract edges with the edge sobel algorithm then blend it against the image."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Edge Extraction
src: /images/operations/lb-edge-extract.png
---
::

## Operation pads
This operation exposes the following data pads, defining how it receives, processes, and emits image data:

::operation-pads
---
has-input: true
has-aux: false
has-output: true
---
::

## Operation properties
::field-group
      ::field{name="Edge Amount" type="gdouble"}
        internal Edge detect amount.  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1.00` • :icon{name="i-lucide-arrow-right"} • `16.00`. 
        
      ::
      ::field{name="Threshold Value" type="gdouble"}
        Threshold adjustment to thin the edge extract.  
        :icon{name="i-lucide-puzzle"} Default `0.19`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-0.25` • :icon{name="i-lucide-arrow-right"} • `0.90`. 
        
      ::
      ::field{name="Threshold High" type="gdouble"}
        Highest value to be include as white within the internal threshold.  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1.00` • :icon{name="i-lucide-arrow-right"} • `10.00`. 
        
      ::
      ::field{name="Blur" type="gdouble"}
        Blur the edge extract.  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.50` • :icon{name="i-lucide-arrow-right"} • `20.00`. 
        
      ::
      ::field{name="Color" type="GeglColor"}
        The color to paint over the input.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::

::