---
title: Bump Map
description: "This plug-in uses the algorithm described by John Schlag, "Fast Embossing Effects on Raster Image Data" in Graphics GEMS IV (ISBN 0-12-336155-9). It takes a buffer to be applied as a bump map to another buffer and produces a nice embossing effect."
links:
  - label: "gegl:bump-map"
    to: "https://gegl.org/operations/gegl-bump-map"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Bump Map
src: /images/operations/gegl-bump-map.png
---
::

## Operation pads
This operation exposes the following data pads, defining how it receives, processes, and emits image data:

::operation-pads
---
has-input: true
has-aux: true
has-output: true
---
::

## Operation properties
::field-group
      ::field{name="Type" type="dictionary"}
        Type of map.  
        :icon{name="i-lucide-puzzle"} Default `Linear`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Linear` • `Spherical` • `Sinusoidal` 
      ::

      ::field{name="Compensate" type="gboolean"}
        Compensate for darkening.  
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::
      ::field{name="Invert" type="gboolean"}
        Invert bumpmap.  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::
      ::field{name="Tiled" type="gboolean"}
        Tiled bumpmap.  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::
      ::field{name="Azimuth" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `135.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `360.00`. 
        
      ::
      ::field{name="Elevation" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `45.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.50` • :icon{name="i-lucide-arrow-right"} • `90.00`. 
        
      ::
      ::field{name="Depth" type="gint"}
        
        :icon{name="i-lucide-puzzle"} Default `3`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `65`. 
        
      ::
      ::field{name="Offset X" type="gint"}
        
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-20000` • :icon{name="i-lucide-arrow-right"} • `20000`. 
        
      ::
      ::field{name="Offset Y" type="gint"}
        
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-20000` • :icon{name="i-lucide-arrow-right"} • `20000`. 
        
      ::
      ::field{name="Waterlevel" type="gdouble"}
        Level that full transparency should represent.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Ambient lighting factor" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::

::