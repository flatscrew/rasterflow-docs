---
title: Extract Component
description: "Extract a color model component"
links:
  - label: "gegl:component-extract"
    to: "https://gegl.org/operations/gegl-component-extract"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Extract Component
caption: Extract a color model component
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
      ::field{name="Component" type="dictionary"}
        Component to extract  
        :icon{name="i-lucide-puzzle"} Default `RGB Red`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `RGB Red` • `RGB Green` • `RGB Blue` • `Hue` • `HSV Saturation` • `HSV Value` • `HSL Saturation` • `HSL Lightness` • `CMYK Cyan` • `CMYK Magenta` • `CMYK Yellow` • `CMYK Key` • `Y'CbCr Y'` • `Y'CbCr Cb` • `Y'CbCr Cr` • `LAB L` • `LAB A` • `LAB B` • `LCH C(ab)` • `LCH H(ab)` • `Alpha` 
      ::

      ::field{name="Invert component" type="gboolean"}
        Invert the extracted component  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::
      ::field{name="Linear output" type="gboolean"}
        Use linear output instead of gamma corrected  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::

    ::
::