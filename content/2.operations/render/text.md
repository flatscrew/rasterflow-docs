---
title: Render Text
description: "Display a string of text using pango and cairo."
links:
  - label: "gegl:text"
    to: "https://gegl.org/operations/gegl-text"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Render Text
caption: Display a string of text using pango and cairo.
src: /images/operations/gegl-text.png
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
      ::field{name="Text" type="gchararray"}
        String to display (utf8).  
        :icon{name="i-lucide-puzzle"} Default `"Hello"`  
      ::
      ::field{name="Font family" type="gchararray"}
        Font family (utf8).  
        :icon{name="i-lucide-puzzle"} Default `"Sans"`  
      ::
      ::field{name="Size" type="gdouble"}
        Font size in pixels.  
        :icon{name="i-lucide-puzzle"} Default `10.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `2048.00`. 
        
      ::
      ::field{name="Color" type="GeglColor"}
        Color for the text (defaults to 'black').  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Wrap width" type="gint"}
        Sets the width in pixels at which long lines will wrap. Use -1 for no wrapping.  
        :icon{name="i-lucide-puzzle"} Default `-1`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-1` • :icon{name="i-lucide-arrow-right"} • `1000000`. 
        
      ::
      ::field{name="Wrap height" type="gint"}
        Sets the height in pixels according to which the text is vertically justified. Use -1 for no vertical justification.  
        :icon{name="i-lucide-puzzle"} Default `-1`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-1` • :icon{name="i-lucide-arrow-right"} • `1000000`. 
        
      ::
      ::field{name="Justification" type="gint"}
        Alignment for multi-line text (0=Left, 1=Center, 2=Right).  
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `2`. 
        
      ::
      ::field{name="Vertical justification" type="gint"}
        Vertical text alignment (0=Top, 1=Middle, 2=Bottom).  
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `2`. 
        
      ::
      ::field{name="Width" type="gint"}
        Rendered width in pixels. (read only).  
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-2147483648` • :icon{name="i-lucide-arrow-right"} • `2147483647`. 
        
      ::
      ::field{name="Height" type="gint"}
        Rendered height in pixels. (read only).  
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-2147483648` • :icon{name="i-lucide-arrow-right"} • `2147483647`. 
        
      ::

    ::
::