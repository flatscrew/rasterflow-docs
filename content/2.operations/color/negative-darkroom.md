---
title: Negative Darkroom
description: "Simulate a negative film enlargement in an analog darkroom."
links:
  - label: "gegl:negative-darkroom"
    to: "https://gegl.org/operations/gegl-negative-darkroom"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Negative Darkroom
caption: Simulate a negative film enlargement in an analog darkroom.
src: /images/operations/gegl-negative-darkroom.png
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
  has-aux: true
  has-output: true
  ---
  ::
::

::collapsible
---
name: Operation properties
---

    ::field-group
      ::field{name="Characteristic curve" type="dictionary"}
        Hardcoded characteristic curve and color data  
        :icon{name="i-lucide-puzzle"} Default `Fujicolor Crystal Archive Digital Pearl Paper`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Fujicolor Crystal Archive Digital Pearl Paper` • `Ilford Ilfobrom Galerie FB 1` • `Ilford Ilfobrom Galerie FB 2` • `Ilford Ilfobrom Galerie FB 3` • `Ilford Ilfobrom Galerie FB 4` • `Ilford Multigrade IV RC Deluxe` • `Foma Fomabrom C` • `Foma Fomabrom N` • `Foma Fomabrom Sp` • `Foma Fomabrom S` • `Foma Fomabrom Variant III` 
      ::

      ::field{name="Exposure" type="gdouble"}
        Base enlargement exposure  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-10.00` • :icon{name="i-lucide-arrow-right"} • `10.00`. 
        
      ::
      ::field{name="Cyan filter" type="gdouble"}
        Cyan filter compensation for the negative image  
        :icon{name="i-lucide-puzzle"} Default `60.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `300.00`. 
        
      ::
      ::field{name="Magenta filter" type="gdouble"}
        Magenta filter compensation for the negative image  
        :icon{name="i-lucide-puzzle"} Default `60.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `300.00`. 
        
      ::
      ::field{name="Yellow filter" type="gdouble"}
        Yellow filter compensation for the negative image  
        :icon{name="i-lucide-puzzle"} Default `60.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `300.00`. 
        
      ::
      ::field{name="Clip base + fog" type="gboolean"}
        Clip base + fog to have a pure white output value  
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::
      ::field{name="Density boost" type="gdouble"}
        Boost paper density to take advantage of increased dynamic range of a monitor compared to a photographic paper  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.25` • :icon{name="i-lucide-arrow-right"} • `4.00`. 
        
      ::
      ::field{name="Contrast boost" type="gdouble"}
        Increase contrast for papers with fixed contrast (usually color papers)  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.25` • :icon{name="i-lucide-arrow-right"} • `4.00`. 
        
      ::
      ::field{name="Dodge/burn multiplier" type="gdouble"}
        The f-stop of dodge/burn for pure white/black auxiliary input  
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-4.00` • :icon{name="i-lucide-arrow-right"} • `4.00`. 
        
      ::
      ::field{name="Enable preflashing" type="gboolean"}
        Show preflash controls  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::
      ::field{name="Red preflash" type="gdouble"}
        Preflash the negative with red light to reduce contrast of the print  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Green preflash" type="gdouble"}
        Preflash the negative with green light to reduce contrast of the print  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Blue preflash" type="gdouble"}
        Preflash the negative with blue light to reduce contrast of the print  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Illuminant adjustment" type="gboolean"}
        Show illuminant controls  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::
      ::field{name="X multiplier" type="gdouble"}
        Adjust the X tristimulus value for output  
        :icon{name="i-lucide-puzzle"} Default `0.96`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.70` • :icon{name="i-lucide-arrow-right"} • `1.30`. 
        
      ::
      ::field{name="Z multiplier" type="gdouble"}
        Adjust the Z tristimulus value for output  
        :icon{name="i-lucide-puzzle"} Default `0.83`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.70` • :icon{name="i-lucide-arrow-right"} • `1.30`. 
        
      ::

    ::
::