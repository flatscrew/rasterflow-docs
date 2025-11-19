---
title: Gradient Collection
description: "Applies seamless gradient patterns, including spiral shapes with integer frequencies for seamlessness, to the image with customizable shape, direction, frequency, saturation, brightness, and transparency handling. To blend in a quality way, use GIMP's HSV-Hue or LCH Hue blend modes."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Gradient Collection
src: /images/operations/ai-lb-gradient.png
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
      ::field{name="Gradient Type" type="dictionary"}
        Type of gradient to apply.  
        :icon{name="i-lucide-puzzle"} Default `Rainbow Gradient`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Rainbow Gradient` • `Tropical Colors` • `Berry Blast` • `Citrus Zest` • `Mango Tango` • `Melon Medley` • `Peach Dream` • `Pineapple Punch` • `Tropical Breeze` • `Golden` • `Sunrise` • `Abstract 1` • `Abstract 2` • `Abstract 3` • `Blue Sunset` • `Fire Glow` • `Ocean Wave` • `Forest Glade` • `Pastel Dream` • `Neon Glow` • `Autumn Leaves` • `Purple Haze` • `Desert Sand` • `Icy Frost` • `Candy Swirl` • `Violet Dusk` • `Green Lime` • `Red Sunset` • `Blue Lagoon` • `Pink Sunrise` • `Cool Breeze` • `Warm Glow` • `Lavender Mist` • `Sky Blue` • `Rainbow Cycle` • `Sunset Glow` • `Mint Fresh` • `Coral Reef` • `Electric Pulse` • `Gold Shimmer` • `Gold Radiance` • `Silver Gleam` • `Silver Luster` • `Bronze Glow` • `Bronze Sheen` • `Twilight Purple` • `Sunlit Meadow` • `Ocean Depths` • `Cherry Blossom` • `Emerald Dream` • `Sapphire Night` • `Ruby Glow` • `Amethyst Haze` • `Topaz Sunset` • `Aquamarine Wave` • `Cotton Candy` • `Sweet Candies` • `Starry Sky` • `Moonlit Fog` • `Sunflower Field` • `Lilac Dusk` • `Turquoise Tide` • `Crimson Sky` • `Periwinkle Breeze` • `Galactic Horizon` • `Peppermint Twist` • `Rose Quartz` • `Midnight Blue` • `Saffron Sunrise` • `Jade Mist` 
      ::

      ::field{name="Gradient Shape" type="dictionary"}
        Shape of the gradient pattern.  
        :icon{name="i-lucide-puzzle"} Default `Linear`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Linear` • `Bilinear` • `Radial` • `Spiral` • `Spiral Counter-Clockwise` • `Square` 
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
        Lock the alpha channel to preserve the input image’s transparency (when enabled, gradient does not affect transparent areas).  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::

::