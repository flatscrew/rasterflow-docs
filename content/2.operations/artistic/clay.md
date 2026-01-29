---
title: Clay Bevel
description: "Clay Bevel Text styling using GEGL. This does not well on small text and will not work at all on very dark/black text."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Clay Bevel
src: /images/operations/lb-clay.png
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
      ::field{name="Emboss Type" type="dictionary"}
        Rendering type.  
        :icon{name="i-lucide-puzzle"} Default `Preserve original color mode`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Recolor and Image file overlay mode` • `Preserve original color mode` 
      ::

      ::field{name="Widness of Bevel" type="gdouble"}
        Global opacity to make clay wider or.  
        :icon{name="i-lucide-puzzle"} Default `7.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1.00` • :icon{name="i-lucide-arrow-right"} • `10.00`. 
        
      ::
      ::field{name="Azimuth" type="gdouble"}
        Light angle (degrees).  
        :icon{name="i-lucide-puzzle"} Default `50.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `30.00` • :icon{name="i-lucide-arrow-right"} • `90.00`. 
        
      ::
      ::field{name="Elevation" type="gdouble"}
        Elevation angle (degrees). This along with gaussian blur is primarily what brings out the clay effect. .  
        :icon{name="i-lucide-puzzle"} Default `32.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `25.00` • :icon{name="i-lucide-arrow-right"} • `90.00`. 
        
      ::
      ::field{name="Depth" type="gint"}
        Bevel Filter width. This will Make Bevel Darker.  
        :icon{name="i-lucide-puzzle"} Default `36`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `100`. 
        
      ::
      ::field{name="Internal Median Blur Radius" type="gint"}
        Neighborhood radius, a negative value will calculate with inverted percentiles.  
        :icon{name="i-lucide-puzzle"} Default `3`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-10` • :icon{name="i-lucide-arrow-right"} • `10`. 
        
      ::
      ::field{name="Internal Median Blur Percentile" type="gdouble"}
        Neighborhood color percentile.  
        :icon{name="i-lucide-puzzle"} Default `65.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `20.00` • :icon{name="i-lucide-arrow-right"} • `80.00`. 
        
      ::
      ::field{name="Internal Median Blur Alpha percentile" type="gdouble"}
        Neighborhood alpha percentile.  
        :icon{name="i-lucide-puzzle"} Default `75.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `21.00` • :icon{name="i-lucide-arrow-right"} • `100.00`. 
        
      ::
      ::field{name="Expand Bevel" type="gdouble"}
        An internal Gaussian blur to expand the bevel. Larger text can benefit from a large gaussian, On small text keep this low.  
        :icon{name="i-lucide-puzzle"} Default `3.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `12.00`. 
        
      ::
      ::field{name="Lightness" type="gdouble"}
        Lightness adjustment.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-18.00` • :icon{name="i-lucide-arrow-right"} • `18.00`. 
        
      ::
      ::field{name="Image file Overlay - Works best with Recolor and Image overlay mode" type="gchararray"}
        Source image file path (png, jpg, raw, svg, bmp, tif, ...).  
        :icon{name="i-lucide-puzzle"} Default `""`  
      ::
      ::field{name="Hue rotation for Image File Overlay" type="gdouble"}
        Hue adjustment for an image file uploaded. Without an image file this will do nothing.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-180.00` • :icon{name="i-lucide-arrow-right"} • `180.00`. 
        
      ::
      ::field{name="Recolor white text" type="GeglColor"}
        If the text is white/grayscale or you are using --Recolor and Image file overlay mode-- you can make the text any color. If the text is not white it will be as if you are applying the multiply blend mode over text.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::

::