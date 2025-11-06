---
title: Checkerboard
description: "Render a checkerboard pattern."
links:
  - label: "gegl:checkerboard"
    to: "https://gegl.org/operations/gegl-checkerboard"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Checkerboard
caption: Render a checkerboard pattern.
src: /images/operations/gegl-checkerboard.png
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
      ::field{name="Width" type="gint"}
        Horizontal width of cells pixels.  
        :icon{name="i-lucide-puzzle"} Default `16`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `2147483647`. 
        
      ::
      ::field{name="Height" type="gint"}
        Vertical width of cells pixels.  
        :icon{name="i-lucide-puzzle"} Default `16`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `2147483647`. 
        
      ::
      ::field{name="Offset X" type="gint"}
        Horizontal offset (from origin) for start of grid.  
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-2147483648` • :icon{name="i-lucide-arrow-right"} • `2147483647`. 
        
      ::
      ::field{name="Offset Y" type="gint"}
        Vertical offset (from origin) for start of grid.  
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-2147483648` • :icon{name="i-lucide-arrow-right"} • `2147483647`. 
        
      ::
      ::field{name="Color 1" type="GeglColor"}
        The first cell color.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Color 2" type="GeglColor"}
        The second cell color.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Babl Format" type="gpointer"}
        The babl format of the output.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::

    ::
::