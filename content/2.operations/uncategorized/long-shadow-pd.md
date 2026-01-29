---
title: Extrusion via Long Shadow
description: "Fork of the existing Long Shadow filter but it uses Pixel Data."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Extrusion via Long Shadow
src: /images/operations/lb-long-shadow-pd.png
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
      ::field{name="Angle" type="gdouble"}
        Shadow angle.  
        :icon{name="i-lucide-puzzle"} Default `45.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-180.00` • :icon{name="i-lucide-arrow-right"} • `180.00`. 
        
      ::
      ::field{name="Length" type="gdouble"}
        Shadow length.  
        :icon{name="i-lucide-puzzle"} Default `40.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `55.00`. 
        
      ::
      ::field{name="Length of Pixel Data colors" type="gdouble"}
        Length of blur in pixels. Recommended to keep this over double the length of the Long Shadow.  
        :icon{name="i-lucide-puzzle"} Default `100.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `95.00` • :icon{name="i-lucide-arrow-right"} • `200.00`. 
        
      ::
      ::field{name="Fading Long Shadow mode" type="gboolean"}
        Enable a Fading Long Shadow.  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::
      ::field{name="Chroma" type="gdouble"}
        Chroma adjustment.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `30.00`. 
        
      ::
      ::field{name="Lightness" type="gdouble"}
        Lightness adjustment.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-30.00` • :icon{name="i-lucide-arrow-right"} • `30.00`. 
        
      ::
      ::field{name="Position of Extrusion" type="dictionary"}
        
        :icon{name="i-lucide-puzzle"} Default `Behind`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Stand Alone` • `Behind` 
      ::


::