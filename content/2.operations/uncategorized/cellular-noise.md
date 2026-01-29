---
title: Cellular Noise
description: "Generates various cellular noise patterns with adjustable parameters."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Cellular Noise
src: /images/operations/ai-lb-cellular-noise.png
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
      ::field{name="Noise Type" type="dictionary"}
        Type of noise pattern to generate.  
        :icon{name="i-lucide-puzzle"} Default `Cellular`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Cellular` • `Worley` • `Voronoi` • `Cellular Cracked` • `Cellular Mosaic` • `Rusty Patina` • `Rippled Dots` • `Cellular Shards` • `Crystal Lattice` • `Organic Blobs` • `Fractured Tiles` • `Bubble Foam` • `Voronoi Ripples` • `Square Cells` • `Jelly Bean Cells` • `Hexagonal Cells` • `Rounded Square Cells` 
      ::

      ::field{name="Cell Shape" type="dictionary"}
        Shape of the cells for cellular noise patterns.  
        :icon{name="i-lucide-puzzle"} Default `Circle`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Circle` • `Square` • `Diamond` • `Oval` • `Star` 
      ::

      ::field{name="Scale" type="gdouble"}
        Scale of the noise pattern (higher values create smaller, finer noise).  
        :icon{name="i-lucide-puzzle"} Default `180.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `15.00` • :icon{name="i-lucide-arrow-right"} • `600.00`. 
        
      ::
      ::field{name="Roughness and Distortion" type="gdouble"}
        Roughness of the noise (higher values create more distorted patterns).  
        :icon{name="i-lucide-puzzle"} Default `3.50`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `12.00`. 
        
      ::
      ::field{name="Octaves" type="gint"}
        Number of octaves for fractal summation (adds finer details).  
        :icon{name="i-lucide-puzzle"} Default `1`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `3`. 
        
      ::
      ::field{name="Cell Jitter" type="gdouble"}
        Randomness of cell point positions (higher values create more irregular cells).  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Edge Sharpness" type="gdouble"}
        Sharpness of cell edges (positive values sharpen, negative values soften).  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-1.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Cluster Factor" type="gdouble"}
        How tightly cells cluster together (higher values create tighter clusters).  
        :icon{name="i-lucide-puzzle"} Default `0.50`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Softness" type="gdouble"}
        Smoothness of cell edges (higher values create softer edges).  
        :icon{name="i-lucide-puzzle"} Default `0.50`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Fracture Intensity" type="gdouble"}
        Intensity of fractures within cells (higher values create more fractures).  
        :icon{name="i-lucide-puzzle"} Default `0.50`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Ripple Strength" type="gdouble"}
        Strength of ripples radiating from cell centers (higher values create stronger ripples).  
        :icon{name="i-lucide-puzzle"} Default `0.50`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Detail Scale" type="gdouble"}
        Scale of fine details in the noise pattern (smaller for finer details, larger for coarser).  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.50` • :icon{name="i-lucide-arrow-right"} • `4.00`. 
        
      ::
      ::field{name="Cell Distortion" type="gdouble"}
        Distorts the shape of cells (higher values create more warped cells).  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Cell Stretch" type="gdouble"}
        Stretches cells horizontally (lower values compress, higher values stretch).  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.50` • :icon{name="i-lucide-arrow-right"} • `2.00`. 
        
      ::
      ::field{name="Seed" type="guint"}
        Random seed for the noise pattern.  
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `4294967295`. 
        
      ::

::