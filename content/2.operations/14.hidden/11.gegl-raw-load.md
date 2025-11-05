---
title: libraw File Loader
description: Camera RAW image loader
links:
  - label: "gegl:raw-load"
    to: "https://gegl.org/operations/gegl-raw-load"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: libraw File Loader
caption: Camera RAW image loader
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
      ::field{name="Image number" type="gint"}
        
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-2147483648` • :icon{name="i-lucide-arrow-right"} • `2147483647`. 
        
      ::
      ::field{name="Color space" type="dictionary"}
        Color space to use for loaded data  
        :icon{name="i-lucide-puzzle"} Default `s RGB`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Camera RGB` • `s RGB` • `Adobe RGB compatible` • `Wide gamut RGB` • `ProPhoto RGB` 
      ::

      ::field{name="quality" type="gint"}
        
        :icon{name="i-lucide-puzzle"} Default `10`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-2147483648` • :icon{name="i-lucide-arrow-right"} • `2147483647`. 
        
      ::

    ::
::