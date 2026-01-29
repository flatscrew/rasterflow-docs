---
title: Chisel
description: "The term chisel refers to a bevel that extends outside the shape. The goal of a chisel is to blend the shape with outside content. On replace it is expected to be manually blended. Filter also comes with a bonus Inner Bevel ability due to it being logically very similar (but visually distinct)."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Chisel
src: /images/operations/lb-chisel.png
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
      ::field{name="Chisel Position/Filter Choice" type="dictionary"}
        The position of the chisel, on replace it is expected to be manually blended. This also includes a bonus Innel Bevel filter that has similar logic to chisel.  
        :icon{name="i-lucide-puzzle"} Default `Normal`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Replace (to blend)` • `Normal` • `Behind` • `Replace (Inner Bevel to blend)` • `Normal (Inner Bevel)` 
      ::

      ::field{name="Bevel Type" type="dictionary"}
        The type of bevel to use.  
        :icon{name="i-lucide-puzzle"} Default `Sharp Chamfer`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Sharp Chamfer` • `Bump` 
      ::

      ::field{name="Blur below chisel" type="gdouble"}
        A blur at the beginning before the chisel starts. A general rule is if the text is larger make this higher, if the text is smaller make this smaller.  
        :icon{name="i-lucide-puzzle"} Default `3.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `4.00`. 
        
      ::
      ::field{name="Chisel's soft radius" type="gdouble"}
        An internal inner glow blur radius that makes that usually makes the chisel go from rough to smooth.  
        :icon{name="i-lucide-puzzle"} Default `8.50`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `5.00` • :icon{name="i-lucide-arrow-right"} • `25.00`. 
        
      ::
      ::field{name="Chisel's grow radius" type="gdouble"}
        The distance to expand the grow the chisel bevel internally.  
        :icon{name="i-lucide-puzzle"} Default `5.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1.00` • :icon{name="i-lucide-arrow-right"} • `30.00`. 
        
      ::
      ::field{name="Distance map setting" type="dictionary"}
        Distance Map is unique to sharp chamfer bevel and in this case a chisel, it has three settings that alter the structure of the chamfer.  
        :icon{name="i-lucide-puzzle"} Default `Euclidean`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Euclidean` • `Manhattan` • `Chebyshev` 
      ::

      ::field{name="Radius" type="gdouble"}
        Radius of softening for a chisel bump bevel.  
        :icon{name="i-lucide-puzzle"} Default `3.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1.00` • :icon{name="i-lucide-arrow-right"} • `5.00`. 
        
      ::
      ::field{name="Light Angle" type="gdouble"}
        Direction of a light source illuminating and shading the chisel bevel.  
        :icon{name="i-lucide-puzzle"} Default `360.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `360.00`. 
        
      ::
      ::field{name="Expand chisel outline outward" type="gint"}
        Expand the entire chisel bevel as if it were an outline going beyond its default constraints.  
        :icon{name="i-lucide-puzzle"} Default `5`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `20`. 
        
      ::
      ::field{name="Light adjustment" type="gdouble"}
        Lightness adjustment.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-20.00` • :icon{name="i-lucide-arrow-right"} • `20.00`. 
        
      ::
      ::field{name="Opacity" type="gdouble"}
        Opacity of the chisel bevel.  
        :icon{name="i-lucide-puzzle"} Default `0.88`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::

::