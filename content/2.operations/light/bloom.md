---
title: Bloom
description: "Add glow around bright areas"
links:
  - label: "gegl:bloom"
    to: "https://gegl.org/operations/gegl-bloom"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Bloom
caption: Add glow around bright areas
src: /images/operations/gegl-bloom.png
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
      ::field{name="Threshold" type="gdouble"}
        Glow-area brightness threshold  
        :icon{name="i-lucide-puzzle"} Default `50.00`  
      ::
      ::field{name="Softness" type="gdouble"}
        Glow-area edge softness  
        :icon{name="i-lucide-puzzle"} Default `25.00`  
      ::
      ::field{name="Radius" type="gdouble"}
        Glow radius  
        :icon{name="i-lucide-puzzle"} Default `10.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1500.00`. 
        
      ::
      ::field{name="Strength" type="gdouble"}
        Glow strength  
        :icon{name="i-lucide-puzzle"} Default `50.00`  
      ::
      ::field{name="Limit exposure" type="gboolean"}
        Don't over-expose highlights  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::

    ::
::