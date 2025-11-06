---
title: Video Degradation
description: "This function simulates the degradation of being on an old low-dotpitch RGB video monitor."
links:
  - label: "gegl:video-degradation"
    to: "https://gegl.org/operations/gegl-video-degradation"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Video Degradation
caption: This function simulates the degradation of being on an old low-dotpitch RGB video monitor.
src: /images/operations/gegl-video-degradation.png
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
  has-output: true
  ---
  ::
::

::collapsible
---
name: Operation properties
---

    ::field-group
      ::field{name="Pattern" type="dictionary"}
        Type of RGB pattern to use.  
        :icon{name="i-lucide-puzzle"} Default `Striped`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Staggered` • `Large staggered` • `Striped` • `Wide striped` • `Long staggered` • `3x3` • `Large 3x3` • `Hex` • `Dots` 
      ::

      ::field{name="Additive" type="gboolean"}
        Whether the function adds the result to the original image.  
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::
      ::field{name="Rotated" type="gboolean"}
        Whether to rotate the RGB pattern by ninety degrees.  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::

    ::
::