---
title: JPEG File Saver
description: "JPEG image saver, using libjpeg."
links:
  - label: "gegl:jpg-save"
    to: "https://gegl.org/operations/gegl-jpg-save"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: JPEG File Saver
src: /images/operations/gegl-jpg-save.png
---
::

## Operation pads
This operation exposes the following data pads, defining how it receives, processes, and emits image data:

::operation-pads
---
has-input: true
has-aux: false
has-output: false
---
::

## Operation properties
::field-group
      ::field{name="File" type="gchararray"}
        Target path and filename, use '-' for stdout.  
        :icon{name="i-lucide-puzzle"} Default `""`  
      ::
      ::field{name="Quality" type="gint"}
        JPEG compression quality (between 1 and 100).  
        :icon{name="i-lucide-puzzle"} Default `90`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `100`. 
        
      ::
      ::field{name="Smoothing" type="gint"}
        Smoothing factor from 1 to 100; 0 disables smoothing.  
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `100`. 
        
      ::
      ::field{name="Optimize" type="gboolean"}
        Use optimized huffman tables.  
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::
      ::field{name="Progressive" type="gboolean"}
        Create progressive JPEG images.  
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::
      ::field{name="Grayscale" type="gboolean"}
        Create a grayscale (monochrome) image.  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::
      ::field{name="Metadata" type="GeglMetadata"}
        Object to supply image metadata.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::

::