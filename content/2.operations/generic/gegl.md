---
title: GEGL graph
description: "Do a chain of operations, with key=value pairs after each operation name to set properties. And aux=[ source filter ] for specifying a chain with a source as something connected to an aux pad."
links:
  - label: "gegl:gegl"
    to: "https://gegl.org/operations/gegl-gegl"
    target: "_blank"
    variant: "outline"
    icon: "i-lucide-external-link"
---

::adwaita-card
---
alt: GEGL graph
caption: Do a chain of operations, with key=value pairs after each operation name to set properties. And aux=[ source filter ] for specifying a chain with a source as something connected to an aux pad.
src: /images/operations/gegl-gegl.png
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
      ::field{name="Pipeline" type="gchararray"}
        [op [property=value] [property=value]] [[op] [property=value].  
        :icon{name="i-lucide-puzzle"} Default `"# uncomment a set of lines below by removing the
# leading to test and modify an example, use
# use ctrl+a before typing to select all, if you
# want a blank slate.
#
id=in # name a reference to the input buffer 'in'


# adaptive threshold:
#
#threshold aux=[ ref=in gaussian-blur  std-dev-x=0.2rel std-dev-y=0.2rel ]

# local white balance and contrast stretching
#
#divide aux=[  ref=in  median-blur radius=.25rel percentile=100  gaussian-blur std-dev-x=.5rel std-dev-y=.5rel ]

# median sharpen (unsharp-mask with median-blur):
#
#add aux=[  ref=in subtract aux=[ ref=in  median-blur radius=5  ] ] 

# styled text overlay
#
#over aux=[ text wrap=1.0rel  color=rgb(0.1,0.1,.3) size=.1rel string="ipsum sic amet deliriarium mic sel adendum. Mic fubar bax qux facilium dhat." dropshadow radius=.01rel  grow-radius=0.0065rel color=white x=0 y=0 border-align x=0.5 y=0.33  ] # try x=1 y=1


# thumbs with misc filters along bottom of image:
#
#over aux=[
#  ref=in scale-ratio x=0.20 y=0.20 newsprint period=0.01rel period2=0.01rel period3=0.01rel period4=0.01rel color-model=cmyk aa-samples=64 pattern=pssquare pattern2=pssquare pattern3=pssquare pattern4=pssquare 
#  pack gap=0.05rel aux=[ ref=in scale-ratio x=0.20 y=0.20 newsprint period=0.01rel period2=0.01rel period3=0.01rel period4=00.01rel color-model=rgb aa-samples=64  ] 
#  pack gap=0.05rel aux=[ ref=in scale-ratio x=0.20 y=0.20 id=scaled snn-mean snn-mean crop aux=[ ref=scaled ] ] 
#  pack gap=0.05rel aux=[ ref=in scale-ratio x=0.20 y=0.20 mosaic tile-size=0.03rel ] 
#  border-align x=0.5 y=0.9
#]

# All the examples can be expanded to be on
# multiple lines, this graph description
# language is not whitespace sensitive, the
# rel suffix is relative to image height
"`  
      ::
      ::field{name="Eeeeeek" type="gchararray"}
        There is a problem in the syntax or in the application of parsed property values. Things might mostly work nevertheless.  
        :icon{name="i-lucide-puzzle"} Default `""`  
      ::

    ::
::