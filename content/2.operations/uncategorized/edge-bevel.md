---
title: Edge Bevel
description: "This filter presents difference of gaussian's edge detect with other things to make a unique bevel effect."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Edge Bevel
src: /images/operations/lb-edge-bevel.png
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
      ::field{name="Enable color priority mode" type="gboolean"}
        This (when enabled) disables the bevel's ability to get the layers color information. But in return the color overlay will be enabled. Due to the logic of this filter very dark colors or black will not work with it.  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::
      ::field{name="Color" type="GeglColor"}
        The color to overlay (defaults to 'white').  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Radius of differenced gaussian" type="gdouble"}
        Intensity of edge effect.  
        :icon{name="i-lucide-puzzle"} Default `94.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `30.00` • :icon{name="i-lucide-arrow-right"} • `100.00`. 
        
      ::
      ::field{name="Azimuth" type="gdouble"}
        Light angle (degrees).  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `360.00`. 
        
      ::
      ::field{name="Elevation" type="gdouble"}
        Elevation angle (degrees).  
        :icon{name="i-lucide-puzzle"} Default `45.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `45.00`. 
        
      ::
      ::field{name="Depth" type="gint"}
        Depth of the bevel.  
        :icon{name="i-lucide-puzzle"} Default `100`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `100`. 
        
      ::
      ::field{name="Edge intensity" type="gdouble"}
        Intensity of edge effect.  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Shine light " type="gdouble"}
        Increase light of shine effect.  
        :icon{name="i-lucide-puzzle"} Default `40.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `35.00` • :icon{name="i-lucide-arrow-right"} • `65.00`. 
        
      ::
      ::field{name="Smooth" type="gint"}
        Smooth rough areas of the bevel.  
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `20`. 
        
      ::

::