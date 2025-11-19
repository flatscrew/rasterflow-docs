---
title: Ring Text
description: "Make Ringed Text."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Ring Text
src: /images/operations/lb-ring.png
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
      ::field{name="Amount of rings:" type="dictionary"}
        Choose the amount of rings 1-6.  
        :icon{name="i-lucide-puzzle"} Default `Four Rings (two structures)`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `One Ring (half structure)` • `Two Rings (one structure)` • `Three Rings (one and a half structures)` • `Four Rings (two structures)` • `Five Rings (two and a half structures)` • `Six Rings (three structures)` • `Non editable - 16 Rings (8 structures)` 
      ::

      ::field{name="Size of the text" type="gint"}
        Median radius to control the size of the text.  
        :icon{name="i-lucide-puzzle"} Default `3`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `9`. 
        
      ::
      ::field{name="Ring size" type="gint"}
        Control the size of the rings. This also creates gaps when bottom bevel's opacity is low. .  
        :icon{name="i-lucide-puzzle"} Default `5`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `9`. 
        
      ::
      ::field{name="Shape of ring" type="dictionary"}
        Shape of the Rings that internally uses Median Blur's neighborhood setting (square, circle, diamond). This does not apply to 16 rings mode.  
        :icon{name="i-lucide-puzzle"} Default `Circle`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Square` • `Circle` • `Diamond` 
      ::

      ::field{name="" type="gchararray"}
        This plugin provides GEGL syntax to insert in this box. Syntax can do crazy things like make the rings gold. But the syntax needs my other plugins that do NOT ship with this. On the download page of this plugin their will be links to the download of other unrelated plugins Gold Text, Custom Bevel, Glossy Balloon ect... They are not needed for this plugin to work, but are needed to take advantage of the syntax I wrote to make the ringed bevel gold, balloon-esque or whatever. You are also free to write your own syntax to effect the ring text. Literally anything can go here.  
        :icon{name="i-lucide-puzzle"} Default `"#GEGL Syntax goes here"`  
      ::

::