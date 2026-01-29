---
title: Weave
description: "Applies a weave pattern."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Weave
src: /images/operations/ai-lb-weave.png
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
      ::field{name="Weave Pattern" type="dictionary"}
        Type of weave pattern to apply.  
        :icon{name="i-lucide-puzzle"} Default `Plain Weave`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Plain Weave` • `Twill Weave` • `Satin Weave` • `Diamond Weave` • `Herringbone Weave` • `Wave Weave` 
      ::

      ::field{name="Thread Width" type="gdouble"}
        Width of the weave threads in pixels.  
        :icon{name="i-lucide-puzzle"} Default `75.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `2.00` • :icon{name="i-lucide-arrow-right"} • `200.00`. 
        
      ::
      ::field{name="Thread Spacing" type="gdouble"}
        Spacing between threads in pixels.  
        :icon{name="i-lucide-puzzle"} Default `60.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `2.00` • :icon{name="i-lucide-arrow-right"} • `150.00`. 
        
      ::
      ::field{name="Angle" type="gdouble"}
        Rotation angle of the weave pattern in degrees.  
        :icon{name="i-lucide-puzzle"} Default `45.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `360.00`. 
        
      ::
      ::field{name="Shadow Intensity" type="gdouble"}
        Intensity of the shadow effect for 3D appearance.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Thread Color 1" type="GeglColor"}
        Color of the first set of threads.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Thread Color 2" type="GeglColor"}
        Color of the second set of threads.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Use Background Color" type="gboolean"}
        Enable or disable a solid background color.  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::
      ::field{name="Background Color" type="GeglColor"}
        Color of the background when enabled.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::

::