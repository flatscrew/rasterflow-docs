---
title: Double Glow Duel Color Effect
description: "For filter to properly work enable an alpha channel and use Gimp's layer blend modes. HSL Color (mid opacity),  Overlay, Grain Merge, Linear Light (low opacity) work best. GEGL's built in blend modes will cause color loss. Where as Gimp's layer blend modes will not.'."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Double Glow Duel Color Effect
src: /images/operations/lb-doubleglow.png
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
      ::field{name="Internal Photocopy mask radius" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `5.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `3.00` • :icon{name="i-lucide-arrow-right"} • `50.00`. 
        
      ::
      ::field{name="Internal Photocopy White percentage" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.50` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Internal Photocopy Black percentage" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.50` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Internal Photocopy Sharpness" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.99`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.60` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Glow 1 Color" type="GeglColor"}
        The color to paint over the input.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Glow 1 Blur" type="gdouble"}
        Standard deviation for the X and Y axis.  
        :icon{name="i-lucide-puzzle"} Default `24.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `50.00`. 
        
      ::
      ::field{name="Glow 1 Opacity" type="gdouble"}
        Global opacity value that is always used on top of the optional auxiliary input buffer.  
        :icon{name="i-lucide-puzzle"} Default `2.50`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `4.00`. 
        
      ::
      ::field{name="Glow 2 Color" type="GeglColor"}
        The shadow's color (defaults to 'black').  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Glow 2 Blur radius" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `1.00`  
      ::
      ::field{name="Glow 2 Opacity" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `1.20`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `2.00`. 
        
      ::
      ::field{name="Glow 2 Glow Radius" type="gdouble"}
        The distance to expand the shadow before blurring; a negative value will contract the shadow instead.  
        :icon{name="i-lucide-puzzle"} Default `17.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-1.00` • :icon{name="i-lucide-arrow-right"} • `50.00`. 
        
      ::
      ::field{name="Universal Blur" type="gdouble"}
        Blur that applies to the whole filter.  
        :icon{name="i-lucide-puzzle"} Default `10.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `60.00`. 
        
      ::

::