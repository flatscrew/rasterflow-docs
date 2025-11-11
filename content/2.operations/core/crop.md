---
title: Crop
description: "Crops a buffer, if the aux pad is connected the bounding box of the node connected is used. When the crop area is configured to 0x0 at 0,0 and nothing is connected on aux, the bounding box of the node at the producing end of the input chain is used."
links:
  - label: "gegl:crop"
    to: "https://gegl.org/operations/gegl-crop"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Crop
caption: Crops a buffer, if the aux pad is connected the bounding box of the node connected is used. When the crop area is configured to 0x0 at 0,0 and nothing is connected on aux, the bounding box of the node at the producing end of the input chain is used.
src: /images/operations/gegl-crop.png
---
::

## Operation pads
This operation exposes the following data pads, defining how it receives, processes, and emits image data:

::operation-pads
---
has-input: true
has-aux: true
has-output: true
---
::

## Operation properties
::field-group
      ::field{name="X" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="Y" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="Width" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="Height" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="Reset origin" type="gboolean"}
        
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::

::