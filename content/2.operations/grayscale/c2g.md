---
title: Color to Grayscale
description: "Color to grayscale conversion, uses envelopes formed with the STRESS approach to perform local color-difference preserving grayscale generation."
links:
  - label: "gegl:c2g"
    to: "https://gegl.org/operations/gegl-c2g"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Color to Grayscale
caption: Color to grayscale conversion, uses envelopes formed with the STRESS approach to perform local color-difference preserving grayscale generation.
src: /images/operations/gegl-c2g.png
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
      ::field{name="Radius" type="gint"}
        Neighborhood taken into account, this is the radius in pixels taken into account when deciding which colors map to which gray values  
        :icon{name="i-lucide-puzzle"} Default `300`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `2` • :icon{name="i-lucide-arrow-right"} • `6000`. 
        
      ::
      ::field{name="Samples" type="gint"}
        Number of samples to do per iteration looking for the range of colors  
        :icon{name="i-lucide-puzzle"} Default `4`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `1000`. 
        
      ::
      ::field{name="Iterations" type="gint"}
        Number of iterations, a higher number of iterations provides less noisy results at a computational cost  
        :icon{name="i-lucide-puzzle"} Default `10`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `1000`. 
        
      ::
      ::field{name="Enhance Shadows" type="gboolean"}
        When enabled details in shadows are boosted at the expense of noise  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::

    ::
::