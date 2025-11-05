---
title: Store in GdkPixbuf
description: "Store image in a GdkPixbuf."
links:
  - label: "gegl:save-pixbuf"
    to: "https://gegl.org/operations/gegl-save-pixbuf"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Store in GdkPixbuf
caption: Store image in a GdkPixbuf.
src: /images/operations/gegl-save-pixbuf.png
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
      ::field{name="Pixbuf" type="GdkPixbuf"}
        The output pixbuf produced by process is stored in this property  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::

    ::
::