---
title: 
description: "Seamless cloning composite operation."
links:
  - label: "gegl:seamless-clone-compose"
    to: "https://gegl.org/operations/gegl-seamless-clone-compose"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: 
caption: Seamless cloning composite operation.
src: /images/operations/gegl-seamless-clone-compose.png
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
  has-aux: true
  has-output: true
  ---
  ::
::

::collapsible
---
name: Operation properties
---

    ::field-group
      ::field{name="Refinement steps" type="gint"}
        Maximal amount of refinement points to be used for the interpolation mesh.  
        :icon{name="i-lucide-puzzle"} Default `2000`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `100000`. 
        
      ::
      ::field{name="Offset X" type="gint"}
        How much horizontal offset should applied to the paste.  
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `100000`. 
        
      ::
      ::field{name="Offset Y" type="gint"}
        How much vertical offset should applied to the paste.  
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `100000`. 
        
      ::
      ::field{name="Error message" type="gchararray"}
        An error message in case of a failure.  
        :icon{name="i-lucide-puzzle"} Default `""`  
      ::

    ::
::