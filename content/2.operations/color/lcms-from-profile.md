---
title: LCMS From Profile
description: "Converts the input from an ICC color profile to a well defined babl format. The buffer's data will then be correctly managed by GEGL for further processing."
links:
  - label: "gegl:lcms-from-profile"
    to: "https://gegl.org/operations/gegl-lcms-from-profile"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: LCMS From Profile
src: /images/operations/gegl-lcms-from-profile.png
---
::

## Operation pads
This operation exposes the following data pads, defining how it receives, processes, and emits image data:

::operation-pads
---
has-input: true
has-aux: false
has-output: true
---
::

## Operation properties
::field-group
      ::field{name="Source Profile" type="gpointer"}
        
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Rendering intent" type="dictionary"}
        The rendering intent to use in the conversion.  
        :icon{name="i-lucide-puzzle"} Default `Perceptual`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Perceptual` • `Relative Colorimetric` • `Saturation` • `Absolute Colorimetric` 
      ::

      ::field{name="Black point compensation" type="gboolean"}
        Convert using black point compensation.  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::

::