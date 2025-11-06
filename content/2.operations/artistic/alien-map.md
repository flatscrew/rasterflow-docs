---
title: Alien Map
description: "Heavily distort images colors by applying trigonometric functions to map color values."
links:
  - label: "gegl:alien-map"
    to: "https://gegl.org/operations/gegl-alien-map"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Alien Map
caption: Heavily distort images colors by applying trigonometric functions to map color values.
src: /images/operations/gegl-alien-map.png
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
      ::field{name="Color model" type="dictionary"}
        What color model used for the transformation.  
        :icon{name="i-lucide-puzzle"} Default `RGB`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `RGB` • `HSL` 
      ::

      ::field{name="Component 1 frequency" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `20.00`. 
        
      ::
      ::field{name="Component 2 frequency" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `20.00`. 
        
      ::
      ::field{name="Component 3 frequency" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `20.00`. 
        
      ::
      ::field{name="Component 1 phase shift" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `360.00`. 
        
      ::
      ::field{name="Component 2 phase shift" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `360.00`. 
        
      ::
      ::field{name="Component 3 phase shift" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `360.00`. 
        
      ::
      ::field{name="Keep component 1" type="gboolean"}
        
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::
      ::field{name="Keep component 2" type="gboolean"}
        
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::
      ::field{name="Keep component 3" type="gboolean"}
        
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::

    ::
::