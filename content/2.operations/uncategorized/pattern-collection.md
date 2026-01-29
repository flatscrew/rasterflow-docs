---
title: Pattern Collection
description: "Renders a variety of repeating geometric patterns with adjustable line width, rotation, and colors."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Pattern Collection
src: /images/operations/ai-lb-pattern-collection.png
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
      ::field{name="Pattern" type="dictionary"}
        Select the pattern to render.  
        :icon{name="i-lucide-puzzle"} Default `Lattice`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Lattice` • `Ripple Effect` • `Petal Swirls` • `Checkerboard Waves` • `Mosaic Tiles` • `Interlocking Gears` • `Wave Interference` • `Crystal Shards` • `Prism Shards` • `Echo Waves` • `Interlocked Rings` • `Pulse Waves` • `Woven Threads` • `Fractal Waves` • `Star Weave` • `Grid Waves` • `Zigzag Weave` • `Diamond Grid` • `Tribal Bands` • `Asanoha Stars` • `Interlocked Squares` • `Spiral Maze` • `Wave Crests` • `Floral Lattice` • `Chevron Stripes` • `Cherry Blossoms` • `Sunburst Motif` • `Meander` • `Double Chevron Bands` • `Overlapping Circle Waves` • `Hexagon Wave Tiles` • `Wave Frieze` • `Chevron Grid Overlay` • `Interlocked Squares Alternate` • `Chevron Ripple Effect` • `Circle Lattice Flow` • `Palmette Waves` • `Spiral Maze Alternate` • `Key Wave` • `Anthemion Motif` • `Chevron Maze` • `Star Frieze` • `Lotus Wave` • `Star Lattice` • `Rosette Pattern` • `Concentric Rings` • `Wavy Stripes` • `Zigzag Stripes` • `Twisted Ribbons` • `Interfering Waves` • `Curved Bands` • `Wave Cross` • `Ripple Grid` • `Petal Grid` • `Wave Spikes` • `Circle Weave` • `Grid Swirls` • `Braided Strips` • `Wave Lattice` • `Loop Motif` • `Curve Maze` • `Pulse Grid` 
      ::

      ::field{name="Tile Size" type="gdouble"}
        Size of the repeating tile in pixels.  
        :icon{name="i-lucide-puzzle"} Default `500.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `50.00` • :icon{name="i-lucide-arrow-right"} • `2000.00`. 
        
      ::
      ::field{name="Line Width" type="gdouble"}
        Adjust the thickness of the pattern lines.  
        :icon{name="i-lucide-puzzle"} Default `0.70`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.01` • :icon{name="i-lucide-arrow-right"} • `3.00`. 
        
      ::
      ::field{name="Rotation" type="gdouble"}
        Rotate the pattern (degrees).  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `360.00`. 
        
      ::
      ::field{name="Foreground Color" type="GeglColor"}
        Color of the pattern shapes.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Background Color" type="GeglColor"}
        Color of the background.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Transparent Background" type="gboolean"}
        Make the background transparent instead of using the background color.  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::

::