---
title: TIFF File Saver
description: "TIFF image saver using libtiff"
links:
  - label: "gegl:tiff-save"
    to: "https://gegl.org/operations/gegl-tiff-save"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: TIFF File Saver
caption: TIFF image saver using libtiff
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
        Target path and filename, use '-' for stdout  
        :icon{name="i-lucide-puzzle"} Default `""`  
      ::
      ::field{name="Bitdepth" type="gint"}
        -1, 8, 16, 32 and 64 are the currently accepted values, -1 means auto  
        :icon{name="i-lucide-puzzle"} Default `-1`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-1` • :icon{name="i-lucide-arrow-right"} • `64`. 
        
      ::
      ::field{name="use floating point" type="gint"}
        floating point -1 means auto, 0 means integer 1 meant float.  
        :icon{name="i-lucide-puzzle"} Default `-1`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-1` • :icon{name="i-lucide-arrow-right"} • `1`. 
        
      ::
      ::field{name="Metadata" type="GeglMetadata"}
        Object to receive image metadata  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::

    ::
::