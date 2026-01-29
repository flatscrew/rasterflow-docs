---
title: CMYK Print Preview
description: "Converts an RGB image to a CMYK preview to show what an image might look like when printed. Recommended to use as an 'adjustment layer' by applying on a passthrough layer group with an empty layer."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: CMYK Print Preview
src: /images/operations/ai-lb-cmyk.png
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
      ::field{name="CMYK Algorithm" type="dictionary"}
        Select the RGB to CMYK conversion algorithm.  
        :icon{name="i-lucide-puzzle"} Default `Gamut Compression`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Original` • `Vibrant Reduction` • `Gamut Compression` • `Matte Paper` • `Glossy Paper` 
      ::


::