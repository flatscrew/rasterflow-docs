---
title: Candy Spiral Starburst
description: "Generates a multicolor Archimedean spiral with up to eight customizable colors, also when twist is at 0 it becomes a starburst effect."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Candy Spiral Starburst
src: /images/operations/ai-lb-spiral.png
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
      ::field{name="Number of Colors" type="dictionary"}
        Number of colors to use in the spiral arms.  
        :icon{name="i-lucide-puzzle"} Default `5 Colors`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `2 Colors` • `3 Colors` • `4 Colors` • `5 Colors` • `6 Colors` • `7 Colors` • `8 Colors` 
      ::

      ::field{name="Spiral Color 1" type="GeglColor"}
        First color of the spiral arms.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Spiral Color 2" type="GeglColor"}
        Second color of the spiral arms.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Spiral Color 3" type="GeglColor"}
        Third color of the spiral arms.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Spiral Color 4" type="GeglColor"}
        Fourth color of the spiral arms.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Spiral Color 5" type="GeglColor"}
        Fifth color of the spiral arms.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Spiral Color 6" type="GeglColor"}
        Sixth color of the spiral arms.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Spiral Color 7" type="GeglColor"}
        Seventh color of the spiral arms.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Spiral Color 8" type="GeglColor"}
        Eighth color of the spiral arms.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Background Color" type="GeglColor"}
        Color of the background that will only be visible if the arm thickness is low.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Number of Arms" type="gint"}
        Number of spiral arms.  
        :icon{name="i-lucide-puzzle"} Default `4`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `10`. 
        
      ::
      ::field{name="Twist (starburst to spiral)" type="gdouble"}
        At 0 it's a starburst; as you increase, it transitions into a tighter spiral.  
        :icon{name="i-lucide-puzzle"} Default `0.20`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Arm Thickness" type="gdouble"}
        Thickness of the spiral arms.  
        :icon{name="i-lucide-puzzle"} Default `15.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.50` • :icon{name="i-lucide-arrow-right"} • `15.00`. 
        
      ::
      ::field{name="X" type="gdouble"}
        X position of the spiral center (relative to image width).  
        :icon{name="i-lucide-puzzle"} Default `0.50`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Y" type="gdouble"}
        Y position of the spiral center (relative to image height).  
        :icon{name="i-lucide-puzzle"} Default `0.50`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Counter-Clockwise" type="gboolean"}
        Draw spiral counter-clockwise.  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::
      ::field{name="Rotation" type="gdouble"}
        Rotation angle of the spiral in degrees (0 to 360).  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `360.00`. 
        
      ::

::