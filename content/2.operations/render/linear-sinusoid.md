---
title: Linear Sinusoid
description: "Generate a linear sinusoid pattern"
links:
  - label: "gegl:linear-sinusoid"
    to: "https://gegl.org/operations/gegl-linear-sinusoid"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Linear Sinusoid
caption: Generate a linear sinusoid pattern
src: /images/operations/gegl-linear-sinusoid.png
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
      ::field{name="X Period" type="gdouble"}
        Period for X axis  
        :icon{name="i-lucide-puzzle"} Default `128.00`  
      ::
      ::field{name="Y Period" type="gdouble"}
        Period for Y axis  
        :icon{name="i-lucide-puzzle"} Default `128.00`  
      ::
      ::field{name="X Amplitude" type="gdouble"}
        Amplitude for X axis (logarithmic scale)  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="Y Amplitude" type="gdouble"}
        Amplitude for Y axis (logarithmic scale)  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="X Phase" type="gdouble"}
        Phase for X axis  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="Y Phase" type="gdouble"}
        Phase for Y axis  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="Angle" type="gdouble"}
        Axis separation angle  
        :icon{name="i-lucide-puzzle"} Default `90.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `360.00`. 
        
      ::
      ::field{name="Offset" type="gdouble"}
        Value offset  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="Exponent" type="gdouble"}
        Value exponent (logarithmic scale)  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="X Offset" type="gdouble"}
        Offset for X axis  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="Y Offset" type="gdouble"}
        Offset for Y axis  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="Rotation" type="gdouble"}
        Pattern rotation angle  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `360.00`. 
        
      ::
      ::field{name="Supersampling" type="gint"}
        Number of samples along each axis per pixel  
        :icon{name="i-lucide-puzzle"} Default `1`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `8`. 
        
      ::

    ::
::