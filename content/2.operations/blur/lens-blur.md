---
title: Lens Blur
description: "Simulate out-of-focus lens blur"
links:
  - label: "gegl:lens-blur"
    to: "https://gegl.org/operations/gegl-lens-blur"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Lens Blur
caption: Simulate out-of-focus lens blur
src: /images/operations/gegl-lens-blur.png
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
      ::field{name="Radius" type="gdouble"}
        Blur radius  
        :icon{name="i-lucide-puzzle"} Default `10.00`  
      ::
      ::field{name="Highlight factor" type="gdouble"}
        Relative highlight strength  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Highlight threshold (low)" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="Highlight threshold (high)" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `1.00`  
      ::
      ::field{name="Clip to input extents" type="gboolean"}
        Clip output to the input extents  
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::
      ::field{name="Linear mask" type="gboolean"}
        Use linear mask values  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::

    ::
::