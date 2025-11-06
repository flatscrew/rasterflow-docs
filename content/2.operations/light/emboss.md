---
title: Emboss
description: "Simulates an image created by embossing."
links:
  - label: "gegl:emboss"
    to: "https://gegl.org/operations/gegl-emboss"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Emboss
caption: Simulates an image created by embossing.
src: /images/operations/gegl-emboss.png
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
      ::field{name="Emboss Type" type="dictionary"}
        Rendering type.  
        :icon{name="i-lucide-puzzle"} Default `Emboss`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Emboss` • `Bumpmap (preserve original colors)` 
      ::

      ::field{name="Azimuth" type="gdouble"}
        Light angle (degrees).  
        :icon{name="i-lucide-puzzle"} Default `30.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `360.00`. 
        
      ::
      ::field{name="Elevation" type="gdouble"}
        Elevation angle (degrees).  
        :icon{name="i-lucide-puzzle"} Default `45.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `180.00`. 
        
      ::
      ::field{name="Depth" type="gint"}
        Filter width.  
        :icon{name="i-lucide-puzzle"} Default `20`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `100`. 
        
      ::

    ::
::