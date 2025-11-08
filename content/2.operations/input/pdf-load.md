---
title: pdf loader
description: "PDF page decoder."
links:
  - label: "gegl:pdf-load"
    to: "https://gegl.org/operations/gegl-pdf-load"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: pdf loader
caption: PDF page decoder.
src: /images/operations/gegl-pdf-load.png
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
      ::field{name="Path" type="gchararray"}
        file to load.  
        :icon{name="i-lucide-puzzle"} Default `""`  
      ::
      ::field{name="URI" type="gchararray"}
        uri of file to load.  
        :icon{name="i-lucide-puzzle"} Default `""`  
      ::
      ::field{name="Page" type="gint"}
        Page to render.  
        :icon{name="i-lucide-puzzle"} Default `1`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `10000`. 
        
      ::
      ::field{name="Pages" type="gint"}
        Total pages, provided as a visual read-only property.  
        :icon{name="i-lucide-puzzle"} Default `1`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `10000`. 
        
      ::
      ::field{name="PPI" type="gdouble"}
        Point/pixels per inch.  
        :icon{name="i-lucide-puzzle"} Default `200.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `10.00` • :icon{name="i-lucide-arrow-right"} • `2400.00`. 
        
      ::
      ::field{name="Password" type="gchararray"}
        Password to use for decryption of PDF, or blank for none.  
        :icon{name="i-lucide-puzzle"} Default `""`  
      ::

::