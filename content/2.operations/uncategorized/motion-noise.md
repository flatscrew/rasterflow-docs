---
title: Noise in Motion
description: "RGB Noise optimally manipulated by motion blur filters to create effects like brushed metal and wood."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Noise in Motion
src: /images/operations/lb-motion-noise.png
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
      ::field{name="Internal Motion Type" type="dictionary"}
        The internal motion to choose that controls the structure of the noise.  
        :icon{name="i-lucide-puzzle"} Default `Linear Motion Blur`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Linear Motion Blur` • `Zoom Motion Blur` • `Cicular Motion Blur` 
      ::

      ::field{name="Color" type="GeglColor"}
        The color to paint over the noise. The default color makes noise.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Angle" type="gdouble"}
        Rotation blur angle of the circular motion blur. A large angle may take some time to render.  
        :icon{name="i-lucide-puzzle"} Default `15.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `10.00` • :icon{name="i-lucide-arrow-right"} • `75.00`. 
        
      ::
      ::field{name="Direction" type="gdouble"}
        Direction of noise.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-180.00` • :icon{name="i-lucide-arrow-right"} • `180.00`. 
        
      ::
      ::field{name="Center X" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.50`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-10.00` • :icon{name="i-lucide-arrow-right"} • `10.00`. 
        
      ::
      ::field{name="Center Y" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.50`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-10.00` • :icon{name="i-lucide-arrow-right"} • `10.00`. 
        
      ::
      ::field{name="Blurring factor" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.10`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-10.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Length" type="gdouble"}
        Length of noise in pixels.  
        :icon{name="i-lucide-puzzle"} Default `70.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `20.00` • :icon{name="i-lucide-arrow-right"} • `120.00`. 
        
      ::
      ::field{name="Sharpen" type="gdouble"}
        Sharpen the noise .  
        :icon{name="i-lucide-puzzle"} Default `4.50`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `2.00` • :icon{name="i-lucide-arrow-right"} • `10.00`. 
        
      ::
      ::field{name="Random seed" type="guint"}
        The random seed for the noise function.  
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `4294967295`. 
        
      ::
      ::field{name="Desaturate" type="gdouble"}
        Desaturation option that makes a brushed metal effect easier.  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Add light around dark areas" type="gdouble"}
        Make a shiny outline around dark areas using edge detect.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `0.11`. 
        
      ::

::