---
title: Spatio Temporal Retinex-like Envelope with Stochastic Sampling
description: "Spatio Temporal Retinex-like Envelope with Stochastic Sampling."
links:
  - label: "gegl:stress"
    to: "https://gegl.org/operations/gegl-stress"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Spatio Temporal Retinex-like Envelope with Stochastic Sampling
src: /images/operations/gegl-stress.png
---
::

## Operation pads
This operation exposes the following data pads, defining how it receives, processes, and emits image data:

::operation-pads
---
has-input: true
has-aux: false
has-output: true
---
::

## Operation properties
::field-group
      ::field{name="Radius" type="gint"}
        Neighborhood taken into account, for enhancement ideal values are close to the longest side of the image, increasing this increases the runtime.  
        :icon{name="i-lucide-puzzle"} Default `300`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `2` • :icon{name="i-lucide-arrow-right"} • `6000`. 
        
      ::
      ::field{name="Samples" type="gint"}
        Number of samples to do per iteration looking for the range of colors.  
        :icon{name="i-lucide-puzzle"} Default `5`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `2` • :icon{name="i-lucide-arrow-right"} • `500`. 
        
      ::
      ::field{name="Iterations" type="gint"}
        Number of iterations, a higher number of iterations provides a less noisy rendering at a computational cost.  
        :icon{name="i-lucide-puzzle"} Default `5`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `1000`. 
        
      ::
      ::field{name="Enhance Shadows" type="gboolean"}
        When enabled also enhances shadow regions - when disabled a more natural result is yielded.  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::

::