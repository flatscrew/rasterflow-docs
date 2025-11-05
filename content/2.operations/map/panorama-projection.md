---
title: Panorama Projection
description: "Do panorama viewer rendering mapping or its inverse for an equirectangular input image. (2:1 ratio containing 360x180 degree panorama)."
links:
  - label: "gegl:panorama-projection"
    to: "https://gegl.org/operations/gegl-panorama-projection"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Panorama Projection
caption: Do panorama viewer rendering mapping or its inverse for an equirectangular input image. (2:1 ratio containing 360x180 degree panorama).
src: /images/operations/gegl-panorama-projection.png
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
      ::field{name="Pan" type="gdouble"}
        Horizontal camera panning  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-360.00` • :icon{name="i-lucide-arrow-right"} • `360.00`. 
        
      ::
      ::field{name="Tilt" type="gdouble"}
        Vertical camera panning  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-180.00` • :icon{name="i-lucide-arrow-right"} • `180.00`. 
        
      ::
      ::field{name="Spin" type="gdouble"}
        Spin angle around camera axis  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-360.00` • :icon{name="i-lucide-arrow-right"} • `360.00`. 
        
      ::
      ::field{name="Zoom" type="gdouble"}
        Zoom level  
        :icon{name="i-lucide-puzzle"} Default `100.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.01` • :icon{name="i-lucide-arrow-right"} • `1000.00`. 
        
      ::
      ::field{name="Width" type="gint"}
        output/rendering width in pixels, -1 for input width  
        :icon{name="i-lucide-puzzle"} Default `-1`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-1` • :icon{name="i-lucide-arrow-right"} • `10000`. 
        
      ::
      ::field{name="Height" type="gint"}
        output/rendering height in pixels, -1 for input height  
        :icon{name="i-lucide-puzzle"} Default `-1`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-1` • :icon{name="i-lucide-arrow-right"} • `10000`. 
        
      ::
      ::field{name="Inverse transform" type="gboolean"}
        Do the inverse mapping, useful for touching up zenith, nadir or other parts of panorama.  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::
      ::field{name="Resampling method" type="dictionary"}
        Image resampling method to use, for good results with double resampling when retouching panoramas, use nearest to generate the view and cubic or better for the inverse transform back to panorama.  
        :icon{name="i-lucide-puzzle"} Default `Nearest`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Nearest` • `Linear` • `Cubic` • `NoHalo` • `LoHalo` 
      ::


    ::
::