---
title: Confetti Scatter
description: "Generates a festive confetti pattern with randomized placement, customizable colors, size, and density."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Confetti Scatter
src: /images/operations/ai-lb-confetti.png
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
      ::field{name="Tile Size" type="gdouble"}
        Size of the grid tiles for confetti placement in pixels.  
        :icon{name="i-lucide-puzzle"} Default `50.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `20.00` • :icon{name="i-lucide-arrow-right"} • `100.00`. 
        
      ::
      ::field{name="Seed" type="guint"}
        Randomizes confetti placement and rotation.  
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `4294967295`. 
        
      ::
      ::field{name="Confetti Color 1 (Red)" type="GeglColor"}
        First confetti color.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Confetti Color 2 (Blue)" type="GeglColor"}
        Second confetti color.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Confetti Color 3 (Yellow)" type="GeglColor"}
        Third confetti color.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Confetti Color 4 (Green)" type="GeglColor"}
        Fourth confetti color.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Confetti Color 5 (Purple)" type="GeglColor"}
        Fifth confetti color.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Confetti Color 6 (Pink)" type="GeglColor"}
        Sixth confetti color.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Confetti Color 7 (Orange)" type="GeglColor"}
        Seventh confetti color.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Background Color" type="GeglColor"}
        Color of the background.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Confetti Length" type="gdouble"}
        Length of confetti pieces in pixels.  
        :icon{name="i-lucide-puzzle"} Default `8.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `4.00` • :icon{name="i-lucide-arrow-right"} • `50.00`. 
        
      ::
      ::field{name="Confetti Width" type="gdouble"}
        Width of confetti pieces in pixels.  
        :icon{name="i-lucide-puzzle"} Default `2.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1.00` • :icon{name="i-lucide-arrow-right"} • `20.00`. 
        
      ::
      ::field{name="Confetti Density" type="gdouble"}
        Average number of confetti pieces per tile.  
        :icon{name="i-lucide-puzzle"} Default `5.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1.00` • :icon{name="i-lucide-arrow-right"} • `10.00`. 
        
      ::

::