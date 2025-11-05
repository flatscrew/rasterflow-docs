---
title: Fractal Explorer
description: Rendering of multiple different fractal systems, with configurable coloring options.
links:
  - label: "gegl:fractal-explorer"
    to: "https://gegl.org/operations/gegl-fractal-explorer"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: Fractal Explorer
caption: Rendering of multiple different fractal systems, with configurable coloring options.
---
::

::collapsible
---
name: Operation pads
---
This operation exposes the following data pads, defining how it receives, processes, and emits image data:

  ::operation-pads
  ---
  has-input: false
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
      ::field{name="Fractal type" type="dictionary"}
        Type of a fractal  
        :icon{name="i-lucide-puzzle"} Default `Mandelbrot`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Mandelbrot` • `Julia` • `Barnsley 1` • `Barnsley 2` • `Barnsley 3` • `Spider` • `Man O War` • `Lambda` • `Sierpinski` 
      ::

      ::field{name="Iterations" type="gint"}
        
        :icon{name="i-lucide-puzzle"} Default `50`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `1` • :icon{name="i-lucide-arrow-right"} • `1000`. 
        
      ::
      ::field{name="Zoom" type="gdouble"}
        Zoom in the fractal space  
        :icon{name="i-lucide-puzzle"} Default `300.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `10000000.00`. 
        
      ::
      ::field{name="Shift X" type="gdouble"}
        X shift in the fractal space  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="Shift Y" type="gdouble"}
        Y shift in the fractal space  
        :icon{name="i-lucide-puzzle"} Default `0.00`  
      ::
      ::field{name="CX" type="gdouble"}
        CX (No effect in Mandelbrot and Sierpinski)  
        :icon{name="i-lucide-puzzle"} Default `-0.75`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-2.50` • :icon{name="i-lucide-arrow-right"} • `2.50`. 
        
      ::
      ::field{name="CY" type="gdouble"}
        CY (No effect in Mandelbrot and Sierpinski)  
        :icon{name="i-lucide-puzzle"} Default `-0.20`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `-2.50` • :icon{name="i-lucide-arrow-right"} • `2.50`. 
        
      ::
      ::field{name="Red stretching factor" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Green stretching factor" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Blue stretching factor" type="gdouble"}
        
        :icon{name="i-lucide-puzzle"} Default `1.00`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `0.00` • :icon{name="i-lucide-arrow-right"} • `1.00`. 
        
      ::
      ::field{name="Red application mode" type="dictionary"}
                :icon{name="i-lucide-puzzle"} Default `Cosine`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Sine` • `Cosine` • `None` 
      ::

      ::field{name="Green application mode" type="dictionary"}
                :icon{name="i-lucide-puzzle"} Default `Cosine`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Sine` • `Cosine` • `None` 
      ::

      ::field{name="Blue application mode" type="dictionary"}
                :icon{name="i-lucide-puzzle"} Default `Sine`  
        :icon{name="i-lucide-chart-candlestick"} Possible values `Sine` • `Cosine` • `None` 
      ::

      ::field{name="Red inversion" type="gboolean"}
        
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::
      ::field{name="Green inversion" type="gboolean"}
        
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::
      ::field{name="Blue inversion" type="gboolean"}
        
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::
      ::field{name="Number of colors" type="gint"}
        
        :icon{name="i-lucide-puzzle"} Default `256`  
        :icon{name="i-lucide-ruler-dimension-line"} Value range `2` • :icon{name="i-lucide-arrow-right"} • `8192`. 
        
      ::
      ::field{name="Loglog smoothing" type="gboolean"}
        
        :icon{name="i-lucide-puzzle"} Default `false`  
      ::

    ::
::