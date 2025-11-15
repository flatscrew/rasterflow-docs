---
seo:
  title: RasterFlow
  description: Build procedural images with RasterFlow’s node-based editor, real-time previews, and non-destructive workflow.
---

::u-page-hero{class="dark:bg-gradient-to-b from-neutral-900 to-neutral-950"}
---
orientation: horizontal
---
#top
:hero-background

#title
Procedural Imaging for [Real-World]{.text-primary} Workflows.

#description
Build procedural images with RasterFlow’s node-based editor, real-time previews, and non-destructive workflow.
Combine over 250 operations into flexible visual graphs. Generate textures and patterns procedurally, and export results instantly.
The same open foundation trusted by the [GEGL](https://gegl.org/operations){.text-primary} ecosystem — designed for creators, developers, and technical artists.

#links
  :::u-button
  ---
  size: xl
  icon: i-lucide-download
  to: /pages/get-rasterflow
  ---
  Get RasterFlow
  :::

  :::u-button
  ---
  icon: i-lucide-arrow-right
  color: neutral
  variant: outline
  size: xl
  to: /guide
  ---
  Quick start
  :::

#default
  ::HeroCarousel
  ::
::


::u-page-section{class="dark:bg-neutral-950"}
#title
Core Features

#links
  :::u-button
  ---
  color: neutral
  size: lg
  to: /guide
  trailingIcon: i-lucide-arrow-right
  variant: subtle
  ---
  Explore RasterFlow UI
  :::

#features
  :::u-page-feature
  ---
  icon: i-lucide-undo-2
  ---
  #title
  Non-Destructive Editing

  #description
  Every operation exists within a live node graph. You can adjust, reconnect, or reorder any part of the process without losing previous steps — the entire workflow remains reversible.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-layers
  ---
  #title
  254+ Image Operations

  #description
  RasterFlow provides the complete GEGL library: filters, color tools, generators, distortions, and blend modes ready to combine in any order.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-eye
  ---
  #title
  Instant Visualization

  #description
  Every node previews its output in real time. No rendering delays, no refresh buttons — what you see is what the graph produces.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-history
  ---
  #title
  Undo & Redo Support

  #description
  Experiment freely knowing every action can be reversed. RasterFlow keeps your creative flow safe and recoverable.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-code-2
  ---
  #title
  Built with GTK4 & Vala

  #description
  A fully native application with smooth performance and responsive interaction, even in large, complex graphs.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-globe-2
  ---
  #title
  Cross-Platform

  #description
  RasterFlow runs on Linux, MacOS and Windows using open technologies — no dependencies outside GEGL and GTK.
  :::
::

::u-page-section{class="dark:bg-neutral-950"}
#title
Workflow & Tools

#links
  :::u-button
  ---
  color: neutral
  size: lg
  to: /operations
  trailingIcon: i-lucide-arrow-right
  variant: subtle
  ---
  Explore operations
  :::

#features
  :::u-page-feature
  ---
  icon: i-lucide-zoom-in
  ---
  #title
  Fluid Navigation & Zoom

  #description
  Navigate your graph naturally with mouse or touchpad. Zoom smoothly in and out to focus on details or get a full overview of your composition.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-map
  ---
  #title
  Minimap Overview

  #description
  A built-in minimap gives you instant orientation in large graphs. Node colors and structure stay clear even in complex networks.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-palette
  ---
  #title
  Custom Node Colors

  #description
  Organize your graphs visually. Assign colors to nodes or groups to highlight structure and logic — perfectly mirrored on the minimap.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-save
  ---
  #title
  Save What You See

  #description
  Export any node’s output directly to an image file, or export the entire graph as a PNG snapshot for documentation and sharing.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-search
  ---
  #title
  Visual Debugging

  #description
  Preview intermediate results and inspect connections in real time. Perfect for understanding the flow of data through your image.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-sliders
  ---
  #title
  Precise Parameter Control

  #description
  Adjust values numerically or interactively. Small tweaks can transform the entire look of your composition.
  :::
::

::u-page-section{class="dark:bg-neutral-950"}
#title
Creative & Procedural

#features
  :::u-page-feature
  ---
  icon: i-lucide-audio-waveform
  ---
  #title
  Procedural Generators

  #description
  Start from noise, grids, gradients, or patterns. RasterFlow lets you build images from nothing but math and imagination.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-git-branch
  ---
  #title
  Compositing Made Modular

  #description
  Replace flat layer stacks with logic-driven graphs. Blend, mask, and combine images through explicit connections you can always see.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-sliders-horizontal
  ---
  #title
  Graph Properties

  #description
  Expose key parameters as global controls. Adjust them live and see changes propagate instantly across the graph.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-monitor
  ---
  #title
  Detachable Viewers

  #description
  Pop out any node into its own live window to compare stages, monitor different outputs, or analyze color and detail independently.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-gamepad-2
  ---
  #title
  Game-Dev Ready

  #description
  Assemble HDRP mask maps, generate channel-packed textures, or combine data for procedural materials — all directly inside RasterFlow.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-infinity
  ---
  #title
  Endless Experimentation

  #description
  RasterFlow is an image editor and generator built for discovery. Every node, link, and adjustment is part of a living process.
  :::
::

::u-page-section{class="dark:bg-gradient-to-b from-neutral-950 to-neutral-900"}
  :::u-page-c-t-a
  ---
  links:
    - label: Start building
      to: '/guide'
      trailingIcon: i-lucide-arrow-right
    - label: View on GitHub
      to: 'https://github.com/flatscrew/rasterflow'
      target: _blank
      variant: subtle
      icon: i-simple-icons-github
  title: Ready to get creative?
  description: Craft procedural image pipelines with a clear, visual graph editor powered by GEGL.
  class: dark:bg-neutral-950
  ---

  :stars-bg
  :::
::
