---
title: Simple Linear Iterative Clustering
description: Superpixels based on k-means clustering
links:
  - label: "gegl:slic"
    to: "https://gegl.org/operations/gegl-slic"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Simple Linear Iterative Clustering
caption: Superpixels based on k-means clustering
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
      ::field{name="Regions size" type="gint"}
        Size of a region side  
        :icon{name="i-lucide-puzzle"} Default `32`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `2` • :icon{name="i-lucide-arrow-right"} • `2147483647`. 
        
      ::
      ::field{name="Compactness" type="gint"}
        Cluster size  
        :icon{name="i-lucide-puzzle"} Default `20`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `40`. 
        
      ::
      ::field{name="Iterations" type="gint"}
        Number of iterations  
        :icon{name="i-lucide-puzzle"} Default `1`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `30`. 
        
      ::

    ::
::