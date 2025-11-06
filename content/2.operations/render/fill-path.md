---
title: Fill Path
description: "Renders a filled region."
links:
  - label: "gegl:fill-path"
    to: "https://gegl.org/operations/gegl-fill-path"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Fill Path
caption: Renders a filled region.
src: /images/operations/gegl-fill-path.png
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
      ::field{name="Color" type="GeglColor"}
        Color of paint to use for filling.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Opacity" type="gdouble"}
        The fill opacity to use.  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-2.00` • :icon{name="i-lucide-arrow-right"} • `2.00`. 
        
      ::
      ::field{name="Fill rule." type="gchararray"}
        how to determine what to fill (nonzero|evenodd).  
        :icon{name="i-lucide-puzzle"} Default `"nonzero"`  
      ::
      ::field{name="Transform" type="gchararray"}
        svg style description of transform.  
        :icon{name="i-lucide-puzzle"} Default `""`  
      ::
      ::field{name="Vector" type="GeglPath"}
        A GeglVector representing the path of the stroke.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::

    ::
::