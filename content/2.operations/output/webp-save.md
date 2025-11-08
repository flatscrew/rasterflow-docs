---
title: WebP File Saver
description: "WebP image saver."
links:
  - label: "gegl:webp-save"
    to: "https://gegl.org/operations/gegl-webp-save"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: WebP File Saver
caption: WebP image saver.
src: /images/operations/gegl-webp-save.png
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
        WebP compression quality.  
        :icon{name="i-lucide-puzzle"} Default `90`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `100`. 
        
      ::

::