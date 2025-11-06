---
title: TIFF File Loader
description: "TIFF image loader using libtiff."
links:
  - label: "gegl:tiff-load"
    to: "https://gegl.org/operations/gegl-tiff-load"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: TIFF File Loader
caption: TIFF image loader using libtiff.
src: /images/operations/gegl-tiff-load.png
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
      ::field{name="File" type="gchararray"}
        Path of file to load.  
        :icon{name="i-lucide-puzzle"} Default `""`  
      ::
      ::field{name="URI" type="gchararray"}
        URI for file to load.  
        :icon{name="i-lucide-puzzle"} Default `""`  
      ::
      ::field{name="Directory" type="gint"}
        Image file directory (subfile).  
        :icon{name="i-lucide-puzzle"} Default `1`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `2147483647`. 
        
      ::
      ::field{name="Metadata" type="GeglMetadata"}
        Object to receive image metadata.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::

    ::
::