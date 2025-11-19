---
title: Extract and Recolor Luma (Glow)
description: "Somewhat similar to the Bloom filter except you can choose the color. Extract the brightest pixels, recolors them and blur it  them. This filter is meant to be fused with GIMP's blend modes, such as plus mid opacity. If the color is white the Luminance and LCH Lightness blend mode will make it glow. Experiment with various blend modes and see what happens."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Extract and Recolor Luma (Glow)
src: /images/operations/lb-colorizeluminance.png
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
      ::field{name="Auto Blend with Plus blend mode" type="gboolean"}
        Auto blend with the gegl:plus blend mode at 70% opacity for quality results. Plus is a blend mode exclusive to GEGL which behaves very similar to GIMP's addition blend mode. Both addition and plus are the most recommended blend mode for this filter. The technical reason I used GEGL's Plus instead of GIMPs addition is because I want to make my filters work outside of GIMP and if it used GIMP's addition that would mean no other app but GIMP could use it .  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::
      ::field{name="Adjust exposure of highlights" type="gdouble"}
        Adjust exposure of highlights.  
        :icon{name="i-lucide-puzzle"} Default `-90.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-100.00` • :icon{name="i-lucide-arrow-right"} • `0.00`. 
        
      ::
      ::field{name="Glow Strength" type="gdouble"}
        Bloom's Glow strength.  
        :icon{name="i-lucide-puzzle"} Default `55.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1000.00`. 
        
      ::
      ::field{name="Control light (reverse sliders) " type="gdouble"}
        Higher values make the light dampen, lower values make the light more intense.  
        :icon{name="i-lucide-puzzle"} Default `0.70`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.10` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Gaussian blur for Glow Effect" type="gdouble"}
        Blur that applies to the whole filter. Try it with the union composite mode on a Gimp layer above.  
        :icon{name="i-lucide-puzzle"} Default `6.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `95.00`. 
        
      ::
      ::field{name="Color" type="GeglColor"}
        The color to paint over the input.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::

::