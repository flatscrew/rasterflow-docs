---
title: Saber
description: "An electrical neon border effect combined."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Saber
src: /images/operations/lb-saber.png
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
      ::field{name="Merge with image" type="gboolean"}
        Should Saber merge with the image content or be alone?.  
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::
      ::field{name="Electricity effect size" type="gdouble"}
        Size of the electricity effect caused by an internal cubism.  
        :icon{name="i-lucide-puzzle"} Default `13.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `4.00` • :icon{name="i-lucide-arrow-right"} • `20.00`. 
        
      ::
      ::field{name="Random seed" type="guint"}
        
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `4294967295`. 
        
      ::
      ::field{name="Outline grow radius" type="gdouble"}
        The size of the outline.  
        :icon{name="i-lucide-puzzle"} Default `2.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1.00` • :icon{name="i-lucide-arrow-right"} • `5.00`. 
        
      ::
      ::field{name="Electrical current 1" type="gdouble"}
        The size of the eletrical current.  
        :icon{name="i-lucide-puzzle"} Default `3.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1.00` • :icon{name="i-lucide-arrow-right"} • `10.00`. 
        
      ::
      ::field{name="Electrical current 2" type="gdouble"}
        The size of the electrical current.  
        :icon{name="i-lucide-puzzle"} Default `2.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1.00` • :icon{name="i-lucide-arrow-right"} • `8.00`. 
        
      ::
      ::field{name="Color rotation" type="gdouble"}
        Hue rotation.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-180.00` • :icon{name="i-lucide-arrow-right"} • `180.00`. 
        
      ::
      ::field{name="Off canvas clipping" type="gboolean"}
        A trade off between two technical settings that actually modifies Saber. Default TRUE is best for text styles to prevent the glowing border outlines from clipping, but the consequence is canvas bordering content will always clip with a glowing line.  When disabled FALSE Saber doesn't clip at the end of the canvas so opaque pixels touching the canvas canvas don't have a glowing line, but text styles will clip if the outline borders are large, thus making the text style bad. In example, when TRUE said glowing line clip will present itself on a transparent covered image of a human that cuts off at the ankles, because the ankles are the canvas edge. Said image of person's ankles will clip if TRUE, and not clip of FALSE. This exist because there is no perfect GEGL graph only trade offs. Put simply, consider making FALSE for human legs or any content touching the canvas, for text styles on canvas keep TRUE.  
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::

::