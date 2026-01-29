---
title: Engrave
description: "Pseudo engraves an image."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Engrave
src: /images/operations/lb-engrave.png
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
      ::field{name="Threshold radius" type="gdouble"}
        Radius of the black white threshold.  
        :icon{name="i-lucide-puzzle"} Default `34.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1.00` • :icon{name="i-lucide-arrow-right"} • `100.00`. 
        
      ::
      ::field{name="Line's size" type="gint"}
        Size of the lines.  
        :icon{name="i-lucide-puzzle"} Default `4`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `25`. 
        
      ::
      ::field{name="Line amplitude" type="gdouble"}
        Ripple's amplitude makes waves out of straight lines.  
        :icon{name="i-lucide-puzzle"} Default `34.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1.00` • :icon{name="i-lucide-arrow-right"} • `100.00`. 
        
      ::
      ::field{name="Line angle" type="gdouble"}
        Ripple's angle controls the angle of the waves.  
        :icon{name="i-lucide-puzzle"} Default `-160.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-180.00` • :icon{name="i-lucide-arrow-right"} • `180.00`. 
        
      ::
      ::field{name="Line's progress through time" type="gdouble"}
        Ripple's Phase Shift (phi) slider showing how the waving lines would change over time.  
        :icon{name="i-lucide-puzzle"} Default `-1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-1.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Presence of newsprint dots" type="gdouble"}
        Put newsprint dots on the engraved image.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Darken engraving" type="gdouble"}
        Darken the engraved image.  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1.00` • :icon{name="i-lucide-arrow-right"} • `10.00`. 
        
      ::
      ::field{name="Color" type="GeglColor"}
        The engraving's color (defaults to 'black').  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::

::