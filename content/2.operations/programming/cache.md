---
title: Cache
description: "An explicit caching node, caches results and should provide faster recomputation if what is cached by it is expensive but isn't changing."
links:
  - label: "gegl:cache"
    to: "https://gegl.org/operations/gegl-cache"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Cache
caption: An explicit caching node, caches results and should provide faster recomputation if what is cached by it is expensive but isn't changing.
src: /images/operations/gegl-cache.png
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
      ::field{name="Cache" type="GeglBuffer"}
        NULL or a GeglBuffer containing cached rendering results, this is a special buffer where gegl_buffer_list_valid_rectangles returns the part of the cache that is valid.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::

::