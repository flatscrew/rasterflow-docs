---
title: Kaleidoscopic Mirroring
description: "Create a kaleidoscope like effect."
links:
  - label: "gegl:mirrors"
    to: "https://gegl.org/operations/gegl-mirrors"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Kaleidoscopic Mirroring
caption: Create a kaleidoscope like effect.
src: /images/operations/gegl-mirrors.png
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
      ::field{name="Mirror rotation" type="gdouble"}
        Rotation applied to the mirrors  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `180.00`. 
        
      ::
      ::field{name="Result rotation" type="gdouble"}
        Rotation applied to the result  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `360.00`. 
        
      ::
      ::field{name="Mirrors" type="gint"}
        Number of mirrors to use  
        :icon{name="i-lucide-puzzle"} Default `6`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `2` • :icon{name="i-lucide-arrow-right"} • `24`. 
        
      ::
      ::field{name="Offset X" type="gdouble"}
        position of symmetry center in output  
        :icon{name="i-lucide-puzzle"} Default `0.50`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Offset Y" type="gdouble"}
        position of symmetry center in output  
        :icon{name="i-lucide-puzzle"} Default `0.50`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Center X" type="gdouble"}
        X axis ratio for the center of mirroring  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-1.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Center Y" type="gdouble"}
        Y axis ratio for the center of mirroring  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-1.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Trim X" type="gdouble"}
        X axis ratio for trimming mirror expanse  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `0.50`. 
        
      ::
      ::field{name="Trim Y" type="gdouble"}
        Y axis ratio for trimming mirror expanse  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `0.50`. 
        
      ::
      ::field{name="Zoom" type="gdouble"}
        Scale factor to make rendering size bigger  
        :icon{name="i-lucide-puzzle"} Default `100.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.10` • :icon{name="i-lucide-arrow-right"} • `100.00`. 
        
      ::
      ::field{name="Expand" type="gdouble"}
        Scale factor to make rendering size bigger  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `100.00`. 
        
      ::
      ::field{name="Clip result to input size" type="gboolean"}
        
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::
      ::field{name="Wrap input" type="gboolean"}
        Fill full output area  
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::

    ::
::