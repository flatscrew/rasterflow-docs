---
title: PPM File Saver
description: "PPM image saver (Portable pixmap saver.)"
links:
  - label: "gegl:ppm-save"
    to: "https://gegl.org/operations/gegl-ppm-save"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: PPM File Saver
caption: PPM image saver (Portable pixmap saver.)
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
      ::field{name="File" type="gchararray"}
        Target path and filename, use '-' for stdout.  
        :icon{name="i-lucide-puzzle"} Default `""`  
      ::
      ::field{name="Raw format" type="gboolean"}
        
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::
      ::field{name="Bitdepth" type="gint"}
        8 and 16 are the currently accepted values.  
        :icon{name="i-lucide-puzzle"} Default `16`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `8` • :icon{name="i-lucide-arrow-right"} • `16`. 
        
      ::

    ::
::