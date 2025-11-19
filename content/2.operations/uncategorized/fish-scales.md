---
title: Fish Scales
description: "Renders a grid of fish scale patterns with customizable outline and background."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Fish Scales
src: /images/operations/ai-lb-fish-scales.png
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
      ::field{name="Scale Type" type="gint"}
        Type of scale pattern to generate.  
        :icon{name="i-lucide-puzzle"} Default `7`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `7`. 
        
      ::
      ::field{name="Scale Color" type="GeglColor"}
        Main scale color.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Enable Gradient" type="gboolean"}
        Enable highlight/shadow gradient effects.  
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::
      ::field{name="Enable Background" type="gboolean"}
        Enable background color.  
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::
      ::field{name="Background Color" type="GeglColor"}
        Background color (only used when enabled).  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Scale Size" type="gdouble"}
        Size of individual scales.  
        :icon{name="i-lucide-puzzle"} Default `100.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `5.00` • :icon{name="i-lucide-arrow-right"} • `250.00`. 
        
      ::
      ::field{name="Vertical Overlap" type="gdouble"}
        How much scales overlap vertically.  
        :icon{name="i-lucide-puzzle"} Default `0.30`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.10` • :icon{name="i-lucide-arrow-right"} • `0.50`. 
        
      ::
      ::field{name="Horizontal Spacing" type="gdouble"}
        Horizontal scale spacing (lower = closer) Don't make this too low or it will be incoherrent. Due to a known bug I have to allow the user to reach values that ruin the effect.  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.30`. 
        
      ::
      ::field{name="Rotation" type="gdouble"}
        Pattern rotation in degrees.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `360.00`. 
        
      ::
      ::field{name="Enable Outline" type="gboolean"}
        Enable outline.  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::
      ::field{name="Grow radius" type="gint"}
        Outline Grow radius.  
        :icon{name="i-lucide-puzzle"} Default `10`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `30`. 
        
      ::
      ::field{name="Outline color" type="GeglColor"}
        The outline's color (defaults to 'white').  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::

::