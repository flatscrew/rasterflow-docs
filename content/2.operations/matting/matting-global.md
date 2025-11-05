---
title: Matting Global
description: "Given a sparse user supplied tri-map and an input image, create a foreground alpha matte. Set white as foreground, black as background for the tri-map. Everything else will be treated as unknown and filled in."
links:
  - label: "gegl:matting-global"
    to: "https://gegl.org/operations/gegl-matting-global"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Matting Global
caption: Given a sparse user supplied tri-map and an input image, create a foreground alpha matte. Set white as foreground, black as background for the tri-map. Everything else will be treated as unknown and filled in.
src: /images/operations/gegl-matting-global.png
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
      ::field{name="Iterations" type="gint"}
        
        :icon{name="i-lucide-puzzle"} Default `10`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `10000`. 
        
      ::
      ::field{name="Random seed" type="guint"}
        
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `4294967295`. 
        
      ::

    ::
::