---
title: Frame 2
description: "Applies a customizable frame mask with adjustable width and color."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Frame 2
src: /images/operations/ai-lb-frame2.png
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
      ::field{name="Frame Mask Style" type="dictionary"}
        Select one of the 24 predefined frame mask styles inspired by FastStone.  
        :icon{name="i-lucide-puzzle"} Default `Fractal Spiral`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Fractal Spiral` • `Radial Mosaic` • `Wavy Petals` • `Star Cluster` • `Geometric Lattice` • `Organic Bloom` • `Cracked Earth` • `Pixelated Swirl` • `Celestial Orbit` • `Crystal Shard` • `Feathered Edge` • `Marble Veins` • `Kaleidoscope Burst` • `Frosted Glass` • `Rustic Weave` • `Neon Glow` • `Sand Dune` • `Ink Splash` • `Cosmic Dust` • `Glacial Rift` • `Tropical Vine` • `Aurora Wave` • `Stained Glass` • `Desert Mirage` 
      ::

      ::field{name="Mask Color" type="GeglColor"}
        Color of the frame mask.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Border Width" type="gint"}
        Width of the frame border in pixels.  
        :icon{name="i-lucide-puzzle"} Default `15`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `200`. 
        
      ::
      ::field{name="Pattern Density" type="gdouble"}
        Density of the pattern (higher = more detailed).  
        :icon{name="i-lucide-puzzle"} Default `10.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1.00` • :icon{name="i-lucide-arrow-right"} • `50.00`. 
        
      ::

::