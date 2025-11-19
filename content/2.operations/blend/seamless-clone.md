---
title: 
description: "Seamless cloning operation."
links:
  - label: "gegl:seamless-clone"
    to: "https://gegl.org/operations/gegl-seamless-clone"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: 
src: /images/operations/gegl-seamless-clone.png
---
::

## Operation pads
This operation exposes the following data pads, defining how it receives, processes, and emits image data:

::operation-pads
---
has-input: true
has-aux: true
has-output: true
---
::

## Operation properties
::field-group
      ::field{name="Refinement scale" type="gint"}
        Maximal scale of refinement points to be used for the interpolation mesh.  
        :icon{name="i-lucide-puzzle"} Default `5`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `100000`. 
        
      ::
      ::field{name="Offset X" type="gint"}
        How much horizontal offset should applied to the paste.  
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-100000` • :icon{name="i-lucide-arrow-right"} • `100000`. 
        
      ::
      ::field{name="Offset Y" type="gint"}
        How much horizontal offset should applied to the paste.  
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-100000` • :icon{name="i-lucide-arrow-right"} • `100000`. 
        
      ::
      ::field{name="Error message" type="gchararray"}
        An error message in case of a failure.  
        :icon{name="i-lucide-puzzle"} Default `""`  
      ::

::