---
title: TriColor Pattern Collection
description: "Creates a variety of three color patterns with adjustable zoom, with region thickness, rotation, and position."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: TriColor Pattern Collection
src: /images/operations/ai-lb-tri-pattern-collection.png
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
      ::field{name="Pattern Type" type="dictionary"}
        Select the pattern type to render.  
        :icon{name="i-lucide-puzzle"} Default `Grid`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Grid` • `Diamond Grid` • `Spiral` • `Eye Mosaic` • `Baroque Curls` • `Floral Motifs` • `Marble Veins` • `Circle Grid` • `Oval Waves` • `Pebble Grid` • `Concentric Circles` • `Triangle Spiral` • `Arc Waves` • `Square Tiles` • `Blinds` • `Stitch Lines` • `Cross Stitches` • `Stitch Weave` • `Stitch Mosaic` • `Three Color Stripes` • `Long Pebble Grid` • `Cube Grid` • `Radial Lines` • `Radial Burst` • `Organic Grid` • `Psychedelic Swirls` • `Ornamental Lattice` • `Circuit Traces` • `Crystal Facets` • `Organic Shards` • `Chaos Webs` • `Nebula Clouds` • `Oval Grid` 
      ::

      ::field{name="Primary Color" type="GeglColor"}
        First color of the pattern.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Secondary Color" type="GeglColor"}
        Second color of the pattern.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Tertiary Color" type="GeglColor"}
        Third color of the pattern.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Scale" type="gdouble"}
        Zoom level of the pattern (smaller values zoom in, larger values zoom out).  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1.00` • :icon{name="i-lucide-arrow-right"} • `10.00`. 
        
      ::
      ::field{name="Shape Size 1" type="gdouble"}
        Thickness of the primary color region.  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1.00` • :icon{name="i-lucide-arrow-right"} • `7.00`. 
        
      ::
      ::field{name="Shape Size 2" type="gdouble"}
        Thickness of the secondary color outline.  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1.00` • :icon{name="i-lucide-arrow-right"} • `7.00`. 
        
      ::
      ::field{name="Line Size 3" type="gdouble"}
        Thickness of the tertiary color region.  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.10` • :icon{name="i-lucide-arrow-right"} • `5.00`. 
        
      ::
      ::field{name="Rotation" type="gdouble"}
        Rotation angle of the pattern in degrees.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `360.00`. 
        
      ::
      ::field{name="X Offset" type="gdouble"}
        Horizontal movement of the pattern in pixels.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-1000.00` • :icon{name="i-lucide-arrow-right"} • `1000.00`. 
        
      ::
      ::field{name="Y Offset" type="gdouble"}
        Vertical movement of the pattern in pixels.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-1000.00` • :icon{name="i-lucide-arrow-right"} • `1000.00`. 
        
      ::

::