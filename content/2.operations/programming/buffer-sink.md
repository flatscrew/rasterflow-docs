---
title: Buffer Sink
description: "Create a new GEGL buffer to write the resulting rendering."
links:
  - label: "gegl:buffer-sink"
    to: "https://gegl.org/operations/gegl-buffer-sink"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Buffer Sink
caption: Create a new GEGL buffer to write the resulting rendering.
src: /images/operations/gegl-buffer-sink.png
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
  has-output: false
  ---
  ::
::

::collapsible
---
name: Operation properties
---

    ::field-group
      ::field{name="Buffer location" type="gpointer"}
        
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Babl format" type="gpointer"}
        
        :icon{name="i-lucide-puzzle"} Default ``  
      ::

    ::
::