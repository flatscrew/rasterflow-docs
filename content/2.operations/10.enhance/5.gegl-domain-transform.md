---
title: Smooth by Domain Transform
description: An edge-preserving smoothing filter implemented with the Domain Transform recursive technique. Similar to a bilateral filter, but faster to compute.
links:
  - label: "gegl:domain-transform"
    to: "https://gegl.org/operations/gegl-domain-transform"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Smooth by Domain Transform
caption: An edge-preserving smoothing filter implemented with the Domain Transform recursive technique. Similar to a bilateral filter, but faster to compute.
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
      ::field{name="Quality" type="gint"}
        Number of filtering iterations. A value between 2 and 4 is usually enough.  
        :icon{name="i-lucide-puzzle"} Default `3`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `5`. 
        
      ::
      ::field{name="Blur radius" type="gdouble"}
        Spatial standard deviation of the blur kernel, measured in pixels.  
        :icon{name="i-lucide-puzzle"} Default `30.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1000.00`. 
        
      ::
      ::field{name="Edge preservation" type="gdouble"}
        Amount of edge preservation. This quantity is inversely proportional to the range standard deviation of the blur kernel.  
        :icon{name="i-lucide-puzzle"} Default `0.80`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::

    ::
::