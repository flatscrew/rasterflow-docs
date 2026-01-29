---
title: Color warp
description: "Warps the colors of an image between colors with weighted distortion factors, color pairs which are black to black get ignored when constructing the mapping."
links:
  - label: "gegl:color-warp"
    to: "https://gegl.org/operations/gegl-color-warp"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Color warp
src: /images/operations/gegl-color-warp.png
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
      ::field{name="From 0" type="GeglColor"}
        
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="To 0" type="GeglColor"}
        
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Weight 0" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `100.00`  
      ::
      ::field{name="From 1" type="GeglColor"}
        
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="To 1" type="GeglColor"}
        
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Weight 1" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `100.00`  
      ::
      ::field{name="From 2" type="GeglColor"}
        
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="To 2" type="GeglColor"}
        
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Weight 2" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `100.00`  
      ::
      ::field{name="From 3" type="GeglColor"}
        
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="To 3" type="GeglColor"}
        
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Weight 3" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `100.00`  
      ::
      ::field{name="From 4" type="GeglColor"}
        
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="To 4" type="GeglColor"}
        
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Weight 4" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `100.00`  
      ::
      ::field{name="From 5" type="GeglColor"}
        
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="To 5" type="GeglColor"}
        
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Weight 5" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `100.00`  
      ::
      ::field{name="From 6" type="GeglColor"}
        
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="To 6" type="GeglColor"}
        
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Weight 6" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `100.00`  
      ::
      ::field{name="From 7" type="GeglColor"}
        
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="To 7" type="GeglColor"}
        
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Weight 7" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `100.00`  
      ::
      ::field{name="Global weight scale" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `1.00`  
      ::
      ::field{name="Amount" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `1.00`  
      ::

::