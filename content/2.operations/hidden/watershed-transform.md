---
title: Watershed Transform
description: "Labels propagation by watershed transformation. Output buffer will keep the input format. Unlabelled pixels are marked with a given flag value (by default: last component with NULL value). The aux buffer is a "Y u8" image representing the priority levels (lower value is higher priority). If aux is absent, all labellized pixels have the same priority and propagated labels have a lower priority."
links:
  - label: "gegl:watershed-transform"
    to: "https://gegl.org/operations/gegl-watershed-transform"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Watershed Transform
src: /images/operations/gegl-watershed-transform.png
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
      ::field{name="Index of component flagging unlabelled pixels" type="gint"}
        Index of component flagging unlabelled pixels.  
        :icon{name="i-lucide-puzzle"} Default `-1`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-2147483648` • :icon{name="i-lucide-arrow-right"} • `2147483647`. 
        
      ::
      ::field{name="Flag" type="gpointer"}
        Pointer to flag value for unlabelled pixels.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::

::