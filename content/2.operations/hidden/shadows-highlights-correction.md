---
title: 
description: Lighten shadows and darken highlights
links:
  - label: "gegl:shadows-highlights-correction"
    to: "https://gegl.org/operations/gegl-shadows-highlights-correction"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: 
caption: Lighten shadows and darken highlights
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
      ::field{name="Shadows" type="gdouble"}
        Adjust exposure of shadows  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-100.00` • :icon{name="i-lucide-arrow-right"} • `100.00`. 
        
      ::
      ::field{name="Highlights" type="gdouble"}
        Adjust exposure of highlights  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-100.00` • :icon{name="i-lucide-arrow-right"} • `100.00`. 
        
      ::
      ::field{name="White point adjustment" type="gdouble"}
        Shift white point  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-10.00` • :icon{name="i-lucide-arrow-right"} • `10.00`. 
        
      ::
      ::field{name="Compress" type="gdouble"}
        Compress the effect on shadows/highlights and preserve midtones  
        :icon{name="i-lucide-puzzle"} Default `50.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `100.00`. 
        
      ::
      ::field{name="Shadows color adjustment" type="gdouble"}
        Adjust saturation of shadows  
        :icon{name="i-lucide-puzzle"} Default `100.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `100.00`. 
        
      ::
      ::field{name="Highlights color adjustment" type="gdouble"}
        Adjust saturation of highlights  
        :icon{name="i-lucide-puzzle"} Default `50.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `100.00`. 
        
      ::

    ::
::