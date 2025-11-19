---
title: GdkPixbuf Source
description: "Uses the GdkPixbuf located at the memory location in <em>pixbuf</em>."
links:
  - label: "gegl:pixbuf"
    to: "https://gegl.org/operations/gegl-pixbuf"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: GdkPixbuf Source
src: /images/operations/gegl-pixbuf.png
---
::

## Operation pads
This operation exposes the following data pads, defining how it receives, processes, and emits image data:

::operation-pads
---
has-input: false
has-aux: false
has-output: true
---
::

## Operation properties
::field-group
      ::field{name="Pixbuf" type="GdkPixbuf"}
        GdkPixbuf to use.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::

::