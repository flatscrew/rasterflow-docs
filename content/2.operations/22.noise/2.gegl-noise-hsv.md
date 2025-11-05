---
title: Add HSV Noise
description: Randomize hue, saturation and value independently
links:
  - label: "gegl:noise-hsv"
    to: "https://gegl.org/operations/gegl-noise-hsv"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Add HSV Noise
caption: Randomize hue, saturation and value independently
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
      ::field{name="Dulling" type="gint"}
        A high value lowers the randomness of the noise  
        :icon{name="i-lucide-puzzle"} Default `2`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `8`. 
        
      ::
      ::field{name="Hue" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `3.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `180.00`. 
        
      ::
      ::field{name="Saturation" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.04`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Value" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.04`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Random seed" type="guint"}
        
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `4294967295`. 
        
      ::

    ::
::