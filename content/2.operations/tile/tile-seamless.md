---
title: Make Seamlessly tileable
description: "Make the input buffer seamlessly tileable. The algorithm is not content-aware, so the result may need post-processing."
links:
  - label: "gegl:tile-seamless"
    to: "https://gegl.org/operations/gegl-tile-seamless"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Make Seamlessly tileable
caption: Make the input buffer seamlessly tileable. The algorithm is not content-aware, so the result may need post-processing.
src: /images/operations/gegl-tile-seamless.png
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

    ::
::