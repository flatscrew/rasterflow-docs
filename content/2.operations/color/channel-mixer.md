---
title: Channel Mixer
description: Remix colors; by defining relative contributions from source components.
links:
  - label: "gegl:channel-mixer"
    to: "https://gegl.org/operations/gegl-channel-mixer"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Channel Mixer
caption: Remix colors; by defining relative contributions from source components.
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
      ::field{name="Preserve luminosity" type="gboolean"}
        
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::
      ::field{name="Red in Red channel" type="gdouble"}
        Set the red amount for the red channel  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-2.00` • :icon{name="i-lucide-arrow-right"} • `2.00`. 
        
      ::
      ::field{name="Green in Red channel" type="gdouble"}
        Set the green amount for the red channel  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-2.00` • :icon{name="i-lucide-arrow-right"} • `2.00`. 
        
      ::
      ::field{name="Blue in Red channel" type="gdouble"}
        Set the blue amount for the red channel  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-2.00` • :icon{name="i-lucide-arrow-right"} • `2.00`. 
        
      ::
      ::field{name="Red in Green channel" type="gdouble"}
        Set the red amount for the green channel  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-2.00` • :icon{name="i-lucide-arrow-right"} • `2.00`. 
        
      ::
      ::field{name="Green for Green channel" type="gdouble"}
        Set the green amount for the green channel  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-2.00` • :icon{name="i-lucide-arrow-right"} • `2.00`. 
        
      ::
      ::field{name="Blue in Green channel" type="gdouble"}
        Set the blue amount for the green channel  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-2.00` • :icon{name="i-lucide-arrow-right"} • `2.00`. 
        
      ::
      ::field{name="Red in Blue channel" type="gdouble"}
        Set the red amount for the blue channel  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-2.00` • :icon{name="i-lucide-arrow-right"} • `2.00`. 
        
      ::
      ::field{name="Green in Blue channel" type="gdouble"}
        Set the green amount for the blue channel  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-2.00` • :icon{name="i-lucide-arrow-right"} • `2.00`. 
        
      ::
      ::field{name="Blue in Blue channel" type="gdouble"}
        Set the blue amount for the blue channel  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-2.00` • :icon{name="i-lucide-arrow-right"} • `2.00`. 
        
      ::

    ::
::