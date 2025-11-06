---
title: Linear Motion Blur
description: "Blur pixels in a direction, simulates blurring caused by moving camera in a straight line during exposure."
links:
  - label: "gegl:motion-blur-linear"
    to: "https://gegl.org/operations/gegl-motion-blur-linear"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Linear Motion Blur
caption: Blur pixels in a direction, simulates blurring caused by moving camera in a straight line during exposure.
src: /images/operations/gegl-motion-blur-linear.png
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
      ::field{name="Length" type="gdouble"}
        Length of blur in pixels.  
        :icon{name="i-lucide-puzzle"} Default `10.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1000.00`. 
        
      ::
      ::field{name="Angle" type="gdouble"}
        Angle of blur in degrees.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-180.00` • :icon{name="i-lucide-arrow-right"} • `180.00`. 
        
      ::

    ::
::