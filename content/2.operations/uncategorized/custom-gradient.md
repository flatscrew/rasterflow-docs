---
title: Custom Gradient
description: "Generate a custom gradient with 2 to 8 user-defined colors, supporting linear, bilinear, radial, spiral, and square patterns with seamless transitions, customizable frequency, saturation, brightness, and transparency handling."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Custom Gradient
src: /images/operations/ai-lb-custom-gradient.png
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
      ::field{name="Gradient Shape" type="dictionary"}
        Shape of the gradient pattern.  
        :icon{name="i-lucide-puzzle"} Default `Linear`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Linear` • `Bilinear` • `Radial` • `Spiral` • `Spiral Counter-Clockwise` • `Square` 
      ::

      ::field{name="Number of Colors" type="dictionary"}
        Number of colors in the gradient (2 to 8).  
        :icon{name="i-lucide-puzzle"} Default `2 Colors`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `2 Colors` • `3 Colors` • `4 Colors` • `5 Colors` • `6 Colors` • `7 Colors` • `8 Colors` 
      ::

      ::field{name="Color 1" type="GeglColor"}
        First color of the gradient.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Color 2" type="GeglColor"}
        Second color of the gradient.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Color 3" type="GeglColor"}
        Third color of the gradient.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Color 4" type="GeglColor"}
        Fourth color of the gradient.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Color 5" type="GeglColor"}
        Fifth color of the gradient.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Color 6" type="GeglColor"}
        Sixth color of the gradient.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Color 7" type="GeglColor"}
        Seventh color of the gradient.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Color 8" type="GeglColor"}
        Eighth color of the gradient.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Gradient Angle" type="gdouble"}
        Angle of the gradient in degrees (affects Linear and Bilinear shapes; rotates starting point for Spiral shapes).  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `360.00`. 
        
      ::
      ::field{name="Frequency" type="gdouble"}
        Number of gradient cycles across the image.  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.10` • :icon{name="i-lucide-arrow-right"} • `10.00`. 
        
      ::
      ::field{name="Spiral Frequency" type="gint"}
        Number of spiral gradient cycles across the image (whole numbers for seamless spirals).  
        :icon{name="i-lucide-puzzle"} Default `1`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `10`. 
        
      ::
      ::field{name="Saturation" type="gdouble"}
        Color intensity (0.0 = grayscale, 1.0 = full color).  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Brightness" type="gdouble"}
        Color brightness (0.0 = dark, 1.0 = bright).  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="X Offset" type="gdouble"}
        Horizontal offset of the gradient center (as a percentage of image width, -100 to 100).  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-100.00` • :icon{name="i-lucide-arrow-right"} • `100.00`. 
        
      ::
      ::field{name="Y Offset" type="gdouble"}
        Vertical offset of the gradient center (as a percentage of image height, -100 to 100).  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-100.00` • :icon{name="i-lucide-arrow-right"} • `100.00`. 
        
      ::
      ::field{name="Blend" type="gdouble"}
        Blending with the input image.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `0.10`. 
        
      ::
      ::field{name="Lock Alpha Channel" type="gboolean"}
        Lock the alpha channel to preserve the input image.  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::

::