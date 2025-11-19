---
title: Bokeh Effect -Requires Alpha Channel 
description: "Create a fake bokeh effect using GEGL. For edits directly on top of the image without layers use the normal or other blending options (like overlay or softlight). If the image is glitching it is because your layer has no alpha channel."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Bokeh Effect -Requires Alpha Channel 
src: /images/operations/lb-bokeh.png
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
      ::field{name="Shape" type="dictionary"}
        Median Shapes for the bokeh. Circle, Square and Diamond are the options.  
        :icon{name="i-lucide-puzzle"} Default `Circle`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Square` • `Circle` • `Diamond` 
      ::

      ::field{name="Color of the Bokeh" type="GeglColor"}
        
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Amount of Bokeh shapes" type="gdouble"}
        The scale of the noise function that increases the amount of individual bokeh shapes.  
        :icon{name="i-lucide-puzzle"} Default `0.12`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.05` • :icon{name="i-lucide-arrow-right"} • `0.35`. 
        
      ::
      ::field{name="Random seed" type="guint"}
        The random seed for the noise function.  
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `4294967295`. 
        
      ::
      ::field{name="Internal Median to increase Bokeh Size" type="gint"}
        Median Blur Radius to increase the size of the bokeh. .  
        :icon{name="i-lucide-puzzle"} Default `25`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `80`. 
        
      ::
      ::field{name="Opacity Control" type="gdouble"}
        Global opacity value for the bokehs.  
        :icon{name="i-lucide-puzzle"} Default `0.60`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.10` • :icon{name="i-lucide-arrow-right"} • `1.30`. 
        
      ::
      ::field{name="Blur" type="gint"}
        Blurring tiny bokehs will make it snow.  
        :icon{name="i-lucide-puzzle"} Default `2`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `12`. 
        
      ::

::