---
title: 
description: GEGL graph visualizer.
links:
  - label: "gegl:introspect"
    to: "https://gegl.org/operations/gegl-introspect"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: 
caption: GEGL graph visualizer.
---
::

::collapsible
---
name: Operation pads
---
This operation exposes the following data pads, defining how it receives, processes, and emits image data:

  ::operation-pads
  ---
  has-input: false
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
      ::field{name="Node" type="GeglNode"}
        
        :icon{name="i-lucide-puzzle"} Default ``  
      ::

    ::
::