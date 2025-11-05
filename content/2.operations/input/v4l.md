---
title: Video4Linux Frame Source
description: "Video4Linux input, webcams framegrabbers and similar devices."
links:
  - label: "gegl:v4l"
    to: "https://gegl.org/operations/gegl-v4l"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Video4Linux Frame Source
caption: Video4Linux input, webcams framegrabbers and similar devices.
src: /images/operations/gegl-v4l.png
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
      ::field{name="Path" type="gchararray"}
        Path to v4l device  
        :icon{name="i-lucide-puzzle"} Default `"/dev/video0"`  
      ::
      ::field{name="Width" type="gint"}
        Width for rendered image  
        :icon{name="i-lucide-puzzle"} Default `320`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `2147483647`. 
        
      ::
      ::field{name="Height" type="gint"}
        Height for rendered image  
        :icon{name="i-lucide-puzzle"} Default `240`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `2147483647`. 
        
      ::
      ::field{name="Frame" type="gint"}
        current frame number, can be changed to trigger a reload of the image.  
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `2147483647`. 
        
      ::
      ::field{name="FPS" type="gint"}
        autotrigger reload this many times a second.  
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `2147483647`. 
        
      ::

    ::
::