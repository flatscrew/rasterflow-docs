---
title: Solid Noise
description: "Create a random cloud-like texture"
links:
  - label: "gegl:noise-solid"
    to: "https://gegl.org/operations/gegl-noise-solid"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Solid Noise
caption: Create a random cloud-like texture
src: /images/operations/gegl-noise-solid.png
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
      ::field{name="X Size" type="gdouble"}
        Horizontal texture size  
        :icon{name="i-lucide-puzzle"} Default `4.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.10` • :icon{name="i-lucide-arrow-right"} • `16.00`. 
        
      ::
      ::field{name="Y Size" type="gdouble"}
        Vertical texture size  
        :icon{name="i-lucide-puzzle"} Default `4.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.10` • :icon{name="i-lucide-arrow-right"} • `16.00`. 
        
      ::
      ::field{name="Detail" type="gint"}
        Detail level  
        :icon{name="i-lucide-puzzle"} Default `1`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `15`. 
        
      ::
      ::field{name="Tileable" type="gboolean"}
        Create a tileable output  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::
      ::field{name="Turbulent" type="gboolean"}
        Make a turbulent noise  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::
      ::field{name="Random seed" type="guint"}
        
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `4294967295`. 
        
      ::
      ::field{name="Width" type="gint"}
        Width of the generated buffer  
        :icon{name="i-lucide-puzzle"} Default `1024`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `2147483647`. 
        
      ::
      ::field{name="Height" type="gint"}
        Height of the generated buffer  
        :icon{name="i-lucide-puzzle"} Default `768`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `2147483647`. 
        
      ::

    ::
::