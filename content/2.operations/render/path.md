---
title: Render Path
description: "Renders a brush stroke."
links:
  - label: "gegl:path"
    to: "https://gegl.org/operations/gegl-path"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Render Path
caption: Renders a brush stroke.
src: /images/operations/gegl-path.png
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
      ::field{name="Fill Color" type="GeglColor"}
        Color of paint to use for filling, use 0 opacity to disable filling.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Stroke Color" type="GeglColor"}
        Color of paint to use for stroking.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Stroke width" type="gdouble"}
        The width of the brush used to stroke the path.  
        :icon{name="i-lucide-puzzle"} Default `2.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `200.00`. 
        
      ::
      ::field{name="Stroke opacity" type="gdouble"}
        Opacity of stroke, note, does not behave like SVG since at the moment stroking is done using an airbrush tool.  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-2.00` • :icon{name="i-lucide-arrow-right"} • `2.00`. 
        
      ::
      ::field{name="Hardness" type="gdouble"}
        Hardness of the brush, 0.0 for a soft brush, 1.0 for a hard brush.  
        :icon{name="i-lucide-puzzle"} Default `0.60`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Fill rule" type="gchararray"}
        How to determine what to fill (nonzero|evenodd).  
        :icon{name="i-lucide-puzzle"} Default `"nonzero"`  
      ::
      ::field{name="Transform" type="gchararray"}
        SVG style description of transform.  
        :icon{name="i-lucide-puzzle"} Default `""`  
      ::
      ::field{name="Fill opacity" type="gdouble"}
        The fill opacity to use.  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-2.00` • :icon{name="i-lucide-arrow-right"} • `2.00`. 
        
      ::
      ::field{name="Vector" type="GeglPath"}
        A GeglVector representing the path of the stroke.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::

    ::
::