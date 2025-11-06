---
title: PNG File Saver
description: "PNG image saver, using libpng."
links:
  - label: "gegl:png-save"
    to: "https://gegl.org/operations/gegl-png-save"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: PNG File Saver
caption: PNG image saver, using libpng.
src: /images/operations/gegl-png-save.png
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
      ::field{name="Compression" type="gint"}
        PNG compression level from 1 to 9.  
        :icon{name="i-lucide-puzzle"} Default `3`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `9`. 
        
      ::
      ::field{name="Bitdepth" type="gint"}
        8 and 16 are the currently accepted values.  
        :icon{name="i-lucide-puzzle"} Default `16`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `8` • :icon{name="i-lucide-arrow-right"} • `16`. 
        
      ::
      ::field{name="Metadata" type="GeglMetadata"}
        Object to supply image metadata.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::

    ::
::