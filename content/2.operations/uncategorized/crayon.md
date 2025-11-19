---
title: Crayon/Hand Drawn Text
description: "Give your text the appearance of a crayon drawing or hand drawn text. Try using a semi bold font that resemble human hand drawings with this."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Crayon/Hand Drawn Text
src: /images/operations/lb-crayon.png
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
      ::field{name="Crayon Effect" type="gdouble"}
        A noise spread distortion operation to create a crayon effect on the drawing.  
        :icon{name="i-lucide-puzzle"} Default `5.50`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `10.00`. 
        
      ::
      ::field{name="Intensity control" type="gdouble"}
        Control the intensity of the crayon text. Lower values increase the intensity. Higher values will make the crayon text even more thin. Use high values on very bold fonts and low values on normal size fonts.  
        :icon{name="i-lucide-puzzle"} Default `20.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `15.00` • :icon{name="i-lucide-arrow-right"} • `100.00`. 
        
      ::
      ::field{name="Color" type="GeglColor"}
        Color of the drawn text.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Use original color instead of color overlay" type="gboolean"}
        Check to use original color on crayon text instead of color overlay.  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::

::