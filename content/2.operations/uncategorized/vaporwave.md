---
title: Vaporwave
description: "Vaporwave wallpaper."
links:
  - label: "LinuxBeaver"
    to: "https://github.com/LinuxBeaver"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Vaporwave
src: /images/operations/ai-lb-vaporwave.png
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
      ::field{name="Background Gradient" type="gboolean"}
        Use a linear gradient for the background.  
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::
      ::field{name="Scanlines" type="gboolean"}
        Add retro scanline effect.  
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::
      ::field{name="Noise" type="gboolean"}
        Add subtle noise for texture.  
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::
      ::field{name="Random Seed" type="guint"}
        Seed for noise randomization.  
        :icon{name="i-lucide-puzzle"} Default `0`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0` • :icon{name="i-lucide-arrow-right"} • `4294967295`. 
        
      ::
      ::field{name="Mountains Silhouette" type="gboolean"}
        Enable silhouette color fill of mountains.  
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::
      ::field{name="Mountains Color" type="GeglColor"}
        Color of the mountains silhouette.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Mountains Wave Position" type="gdouble"}
        Adjust the horizontal position of the mountain wave pattern.  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `6.28`. 
        
      ::
      ::field{name="Background Color" type="GeglColor"}
        Base color for the sky gradient.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Background Gradient Color" type="GeglColor"}
        End color for the background linear gradient.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Gradient Y Offset" type="gdouble"}
        Vertical offset of the gradient start point (relative to canvas height).  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-1.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Sun Color" type="GeglColor"}
        Color of the sun and its glow.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Sun Lines" type="gboolean"}
        Add transparent horizontal lines across the sun.  
        :icon{name="i-lucide-puzzle"} Default `true`  
      ::
      ::field{name="Sun Glow Size" type="gdouble"}
        Adjust the size of the sun's glow (relative to sun size).  
        :icon{name="i-lucide-puzzle"} Default `2.50`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1.00` • :icon{name="i-lucide-arrow-right"} • `3.00`. 
        
      ::
      ::field{name="Grid Color" type="GeglColor"}
        Color of the grid lines.  
        :icon{name="i-lucide-puzzle"} Default ``  
      ::
      ::field{name="Grid Density" type="gdouble"}
        Density of the grid lines (0.5 = sparse, 2.0 = dense).  
        :icon{name="i-lucide-puzzle"} Default `0.50`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.50` • :icon{name="i-lucide-arrow-right"} • `2.00`. 
        
      ::
      ::field{name="Grid Thickness" type="gint"}
        Thickness of the grid lines (1 = thinnest, 5 = thickest).  
        :icon{name="i-lucide-puzzle"} Default `3`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `5`. 
        
      ::
      ::field{name="Sun Size" type="gdouble"}
        Size of the sun relative to image width.  
        :icon{name="i-lucide-puzzle"} Default `0.15`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.05` • :icon{name="i-lucide-arrow-right"} • `0.50`. 
        
      ::
      ::field{name="Sun Height" type="gdouble"}
        Height of the sun above the horizon (relative to image height).  
        :icon{name="i-lucide-puzzle"} Default `0.30`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `0.50`. 
        
      ::
      ::field{name="Horizon Height" type="gint"}
        Height of the horizon line (as a percentage of image height).  
        :icon{name="i-lucide-puzzle"} Default `40`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `20` • :icon{name="i-lucide-arrow-right"} • `80`. 
        
      ::

::