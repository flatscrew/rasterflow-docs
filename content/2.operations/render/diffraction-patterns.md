---
title: Diffraction Patterns
description: "Generate diffraction patterns"
links:
  - label: "gegl:diffraction-patterns"
    to: "https://gegl.org/operations/gegl-diffraction-patterns"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Diffraction Patterns
caption: Generate diffraction patterns
src: /images/operations/gegl-diffraction-patterns.png
---
::

::collapsible
---
name: Operation pads
---
This operation exposes the following data pads, defining how it receives, processes, and emits image data:

  ::operation-pads
  ---
  has-input: false
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
      ::field{name="Red frequency" type="gdouble"}
        Light frequency (red)  
        :icon{name="i-lucide-puzzle"} Default `0.81`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `20.00`. 
        
      ::
      ::field{name="Green frequency" type="gdouble"}
        Light frequency (green)  
        :icon{name="i-lucide-puzzle"} Default `1.22`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `20.00`. 
        
      ::
      ::field{name="Blue frequency" type="gdouble"}
        Light frequency (blue)  
        :icon{name="i-lucide-puzzle"} Default `1.12`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `20.00`. 
        
      ::
      ::field{name="Red contours" type="gdouble"}
        Number of contours (red)  
        :icon{name="i-lucide-puzzle"} Default `0.82`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `10.00`. 
        
      ::
      ::field{name="Green contours" type="gdouble"}
        Number of contours (green)  
        :icon{name="i-lucide-puzzle"} Default `0.82`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `10.00`. 
        
      ::
      ::field{name="Blue contours" type="gdouble"}
        Number of contours (blue)  
        :icon{name="i-lucide-puzzle"} Default `0.97`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `10.00`. 
        
      ::
      ::field{name="Red sharp edges" type="gdouble"}
        Number of sharp edges (red)  
        :icon{name="i-lucide-puzzle"} Default `0.61`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Green sharp edges" type="gdouble"}
        Number of sharp edges (green)  
        :icon{name="i-lucide-puzzle"} Default `0.68`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Blue sharp edges" type="gdouble"}
        Number of sharp edges (blue)  
        :icon{name="i-lucide-puzzle"} Default `0.64`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Brightness" type="gdouble"}
        Brightness and shifting/fattening of contours  
        :icon{name="i-lucide-puzzle"} Default `0.07`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Scattering" type="gdouble"}
        Scattering (speed vs. quality)  
        :icon{name="i-lucide-puzzle"} Default `37.13`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `100.00`. 
        
      ::
      ::field{name="Polarization" type="gdouble"}
        Polarization  
        :icon{name="i-lucide-puzzle"} Default `-0.47`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-1.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Width" type="gint"}
        Width of the generated buffer  
        :icon{name="i-lucide-puzzle"} Default `200`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `2147483647`. 
        
      ::
      ::field{name="Height" type="gint"}
        Height of the generated buffer  
        :icon{name="i-lucide-puzzle"} Default `200`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `2147483647`. 
        
      ::

    ::
::