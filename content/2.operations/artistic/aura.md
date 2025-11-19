---
title: Aura
description: "Generate both an Outer Glow and Inner Glow aura-ish effect. Apply filter on duplicate layer above transparent subject/object. Filter is intended to be used with Gimp blend modes HSV Hue, HSL Color and Grain Merge. Filter benefits from the Union Composite Mode when used in transparent backgrounds."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Aura
src: /images/operations/lb-aura.png
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
      ::field{name="Color" type="GeglColor"}
        
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Lens Blur to Glow" type="gdouble"}
        Blur radius.  
        :icon{name="i-lucide-puzzle"} Default `11.00`  
      ::
      ::field{name="Gaussian Blur to Glow" type="gdouble"}
        Blur radius.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="Hyper Opacity" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1.00` • :icon{name="i-lucide-arrow-right"} • `4.00`. 
        
      ::
      ::field{name="Aura Size" type="gdouble"}
        Average diameter of each tile (in pixels).  
        :icon{name="i-lucide-puzzle"} Default `3.80`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `3.00` • :icon{name="i-lucide-arrow-right"} • `16.00`. 
        
      ::
      ::field{name="Gaps in Aura" type="gdouble"}
        Expand tiles by this amount.  
        :icon{name="i-lucide-puzzle"} Default `5.40`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `3.00` • :icon{name="i-lucide-arrow-right"} • `8.00`. 
        
      ::
      ::field{name="Internal Oilify filter for Aura" type="gint"}
        Radius of circle around pixel, can also be scaled per pixel by a buffer on the aux pad.  
        :icon{name="i-lucide-puzzle"} Default `4`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `7`. 
        
      ::
      ::field{name="Random seed for Aura" type="guint"}
        
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `4294967295`. 
        
      ::
      ::field{name="Enable Base Mosaic" type="gboolean"}
        Base the aura off the Mosaic Filter.  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::
      ::field{name="Base Mosaic mode blur" type="gdouble"}
        Blur radius; shapes were intentionally left so this filter could have a hidden use of shape outlines.  
        :icon{name="i-lucide-puzzle"} Default `6.00`  
      ::
      ::field{name="Base Mosaic Mode Flame shape" type="dictionary"}
        What shape to use for tiles.  
        :icon{name="i-lucide-puzzle"} Default `Triangles`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Squares` • `Hexagons` • `Octagons` • `Triangles` 
      ::

      ::field{name="Base Mosaic Mode Flame Size" type="gdouble"}
        Average diameter of each tile (in pixels).  
        :icon{name="i-lucide-puzzle"} Default `40.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1.00` • :icon{name="i-lucide-arrow-right"} • `70.00`. 
        
      ::
      ::field{name="Seed for Base Mosaic" type="guint"}
        
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `4294967295`. 
        
      ::

::