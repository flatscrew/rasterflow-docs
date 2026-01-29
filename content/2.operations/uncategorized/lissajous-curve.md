---
title: Lissajous Curve
description: "Renders a Lissajous curve with customizable line and background colors, adjustable line thickness, parameters for frequency, phase, rotation, and position."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Lissajous Curve
src: /images/operations/ai-lb-lissajous-curve.png
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
      ::field{name="Curve Type" type="dictionary"}
        Select the type of Lissajous curve to render.  
        :icon{name="i-lucide-puzzle"} Default `Default Lissajous Curve`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Default Lissajous Curve` • `Dashed Lissajous Curve` • `Wavy Lissajous Curve` • `Offset Lissajous Curve` • `Twisted Lissajous Curve` 
      ::

      ::field{name="Transparent Background" type="gboolean"}
        If checked, the background will be transparent; if unchecked, the background color will be used.  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::
      ::field{name="Background Color" type="GeglColor"}
        Color of the background.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Line Color" type="GeglColor"}
        Color of the Lissajous curve lines.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Line Thickness" type="gdouble"}
        Thickness of the Lissajous curve lines.  
        :icon{name="i-lucide-puzzle"} Default `15.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `11.00` • :icon{name="i-lucide-arrow-right"} • `100.00`. 
        
      ::
      ::field{name="A" type="gint"}
        Frequency for x-axis (controls horizontal oscillations).  
        :icon{name="i-lucide-puzzle"} Default `5`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `8`. 
        
      ::
      ::field{name="B" type="gint"}
        Frequency for y-axis (controls vertical oscillations).  
        :icon{name="i-lucide-puzzle"} Default `4`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `8`. 
        
      ::
      ::field{name="Delta" type="gdouble"}
        Phase shift for x-axis (in radians).  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `12.28`. 
        
      ::
      ::field{name="Scale" type="gdouble"}
        Zoom level for the Lissajous curve (higher values zoom in, lower values zoom out).  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.01` • :icon{name="i-lucide-arrow-right"} • `2.00`. 
        
      ::
      ::field{name="Rotation" type="gdouble"}
        Rotate the LJC around its center (in degrees).  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `360.00`. 
        
      ::
      ::field{name="Offset X" type="gdouble"}
        Horizontal offset of the Lissajous curve (normalized, -1.0 to 1.0).  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-1.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Offset Y" type="gdouble"}
        Vertical offset of the Lissajous curve (normalized, -1.0 to 1.0).  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-1.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Quality of Lines" type="gint"}
        Controls the number of steps for rendering the curve. Higher values fix visual bugs in the lines at the cost of slower rendering speed. When the lines are thin and scale is hgh this should be higher to prevent the known visual bug of bead-like lines.  
        :icon{name="i-lucide-puzzle"} Default `1900`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1800` • :icon{name="i-lucide-arrow-right"} • `3500`. 
        
      ::

::