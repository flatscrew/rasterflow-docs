---
title: Stretch Contrast
description: "Scales the components of the buffer to be in the 0.0-1.0 range. This improves images that make poor use of the available contrast (little contrast, very dark, or very bright images)."
links:
  - label: "gegl:stretch-contrast"
    to: "https://gegl.org/operations/gegl-stretch-contrast"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Stretch Contrast
caption: Scales the components of the buffer to be in the 0.0-1.0 range. This improves images that make poor use of the available contrast (little contrast, very dark, or very bright images).
src: /images/operations/gegl-stretch-contrast.png
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
      ::field{name="Keep colors" type="gboolean"}
        Impact each channel with the same amount.  
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::
      ::field{name="Non-linear components" type="gboolean"}
        When set operate on gamma corrected values instead of linear RGB - acting like the old normalize filter in GIMP.  
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::

    ::
::