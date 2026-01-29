---
title: K-means Segmentation Port
description: "Segment colors using K-means clustering - this plugin is still in GEGL workshop but it is useful for GEGL plugin development."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: K-means Segmentation Port
src: /images/operations/port-segment-kmeans.png
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
      ::field{name="Number of clusters" type="gint"}
        Number of clusters.  
        :icon{name="i-lucide-puzzle"} Default `5`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `2` • :icon{name="i-lucide-arrow-right"} • `255`. 
        
      ::
      ::field{name="Max. Iterations" type="gint"}
        Maximum number of iterations.  
        :icon{name="i-lucide-puzzle"} Default `5`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `2147483647`. 
        
      ::
      ::field{name="Random seed" type="guint"}
        
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `4294967295`. 
        
      ::

::