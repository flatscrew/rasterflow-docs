---
title: Add RGB Noise
description: "Distort colors by random amounts."
links:
  - label: "gegl:noise-rgb"
    to: "https://gegl.org/operations/gegl-noise-rgb"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Add RGB Noise
caption: Distort colors by random amounts.
src: /images/operations/gegl-noise-rgb.png
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
      ::field{name="Correlated noise" type="gboolean"}
        
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::
      ::field{name="Independent RGB" type="gboolean"}
        Control amount of noise for each RGB channel separately.  
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::
      ::field{name="Linear RGB" type="gboolean"}
        Operate on linearized RGB color data.  
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::
      ::field{name="Gaussian distribution" type="gboolean"}
        Use a gaussian noise distribution, when unticked a linear noise distribution is used instead.  
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::
      ::field{name="Red" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.20`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Green" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.20`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Blue" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.20`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Alpha" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Random seed" type="guint"}
        
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `4294967295`. 
        
      ::

    ::
::