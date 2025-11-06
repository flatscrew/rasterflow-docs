---
title: Focus Blur
description: "Blur the image around a focal point."
links:
  - label: "gegl:focus-blur"
    to: "https://gegl.org/operations/gegl-focus-blur"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Focus Blur
caption: Blur the image around a focal point.
src: /images/operations/gegl-focus-blur.png
---
::

::collapsible
---
name: Operation pads
---
This operation exposes the following data pads, defining how it receives, processes, and emits image data:

  ::operation-pads
  ---
  has-input: true
  has-aux: false
  has-output: true
  ---
  ::
::

::collapsible
---
name: Operation properties
---

    ::field-group
      ::field{name="Blur type" type="dictionary"}
                :icon{name="i-lucide-puzzle"} Default `Gaussian Blur`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Gaussian Blur` • `Lens Blur` 
      ::

      ::field{name="Blur radius" type="gdouble"}
        Out-of-focus blur radius.  
        :icon{name="i-lucide-puzzle"} Default `25.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1500.00`. 
        
      ::
      ::field{name="Highlight factor" type="gdouble"}
        Relative highlight strength.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Highlight threshold (low)" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="Highlight threshold (high)" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `1.00`  
      ::
      ::field{name="Shape" type="dictionary"}
                :icon{name="i-lucide-puzzle"} Default `Circle`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Circle` • `Square` • `Diamond` • `Horizontal` • `Vertical` 
      ::

      ::field{name="Center X" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.50`  
      ::
      ::field{name="Center Y" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.50`  
      ::
      ::field{name="Radius" type="gdouble"}
        Focus-region outer radius.  
        :icon{name="i-lucide-puzzle"} Default `0.75`  
      ::
      ::field{name="Sharpness" type="gdouble"}
        Focus-region inner limit.  
        :icon{name="i-lucide-puzzle"} Default `0.25`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Midpoint" type="gdouble"}
        Focus-transition midpoint.  
        :icon{name="i-lucide-puzzle"} Default `0.50`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Aspect ratio" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-1.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Rotation" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-180.00` • :icon{name="i-lucide-arrow-right"} • `180.00`. 
        
      ::
      ::field{name="High quality" type="gboolean"}
        Generate more accurate and consistent output (slower).  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::

    ::
::