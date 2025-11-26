export const cssFlexGridMcq = [
  {
    question: "Which CSS property enables Flexbox on an element?",
    options: ["flex", "display: flex", "flex-enable", "flex-mode"],
    answer: "display: flex"
  },
  {
    question: "Which property defines the direction of flex items?",
    options: ["flex-flow", "flex-direction", "direction", "flex-order"],
    answer: "flex-direction"
  },
  {
    question: "Which value sets flex items horizontally?",
    options: ["row", "column", "horizontal", "inline"],
    answer: "row"
  },
  {
    question: "Which property controls wrapping of flex items?",
    options: ["wrap-items", "flex-wrap", "flex-flow", "item-wrap"],
    answer: "flex-wrap"
  },
  {
    question: "Which shorthand combines flex-direction and flex-wrap?",
    options: ["flex-mix", "flex-config", "flex-flow", "flex-setup"],
    answer: "flex-flow"
  },
  {
    question: "Which property aligns items along the main axis?",
    options: ["align-items", "justify-content", "flex-align", "place-content"],
    answer: "justify-content"
  },
  {
    question: "Which property aligns items along the cross axis?",
    options: ["align-items", "justify-items", "flex-align", "align-self"],
    answer: "align-items"
  },
  {
    question: "Which value evenly distributes space between items?",
    options: ["space-around", "space-evenly", "space-between", "center"],
    answer: "space-between"
  },
  {
    question: "Which property sets individual item order?",
    options: ["flex-order", "order", "item-order", "set-order"],
    answer: "order"
  },
  {
    question: "Which property defines the ability to grow relative to other items?",
    options: ["flex-grow", "flex-expand", "grow-item", "increase"],
    answer: "flex-grow"
  },

  // 11–20
  {
    question: "Which property defines the ability to shrink?",
    options: ["shrink-item", "flex-shrink", "flex-compact", "item-shrink"],
    answer: "flex-shrink"
  },
  {
    question: "Which property sets the initial size of a flex item?",
    options: ["flex-size", "flex-basis", "item-width", "start-size"],
    answer: "flex-basis"
  },
  {
    question: "What is the shorthand for flex-grow, flex-shrink, flex-basis?",
    options: ["flex", "flex-prop", "flex-values", "flex-config"],
    answer: "flex"
  },
  {
    question: "Which property overrides align-items for one item?",
    options: ["align-self", "self-align", "cross-align", "item-align"],
    answer: "align-self"
  },
  {
    question: "Which value centers items in both axes using Flexbox?",
    options: ["align:center; justify:center", "display:center", "place-items:center", "center-box"],
    answer: "align:center; justify:center"
  },
  {
    question: "What is the default flex-direction?",
    options: ["column", "row", "row-reverse", "column-reverse"],
    answer: "row"
  },
  {
    question: "What is the default flex-wrap value?",
    options: ["wrap", "nowrap", "wrap-reverse", "auto"],
    answer: "nowrap"
  },
  {
    question: "Which property places items along both axes (Flexbox Level 2)?",
    options: ["place-content", "place-items", "justify-items", "gap"],
    answer: "place-content"
  },
  {
    question: "Which property creates spacing between flex items?",
    options: ["gap", "space", "item-gap", "flex-spacing"],
    answer: "gap"
  },
  {
    question: "Which property aligns the flex container itself?",
    options: ["align-content", "justify-content", "align-items", "align-box"],
    answer: "align-content"
  },

  // 21–30 (CSS GRID)
  {
    question: "Which property enables CSS Grid?",
    options: ["grid", "display: grid", "grid-mode", "display: table"],
    answer: "display: grid"
  },
  {
    question: "Which property defines columns in Grid?",
    options: ["grid-columns", "grid-template-columns", "grid-col", "columns"],
    answer: "grid-template-columns"
  },
  {
    question: "Which property defines rows in Grid?",
    options: ["grid-template-rows", "grid-rows", "rows", "grid-row-lines"],
    answer: "grid-template-rows"
  },
  {
    question: "Which property places an item across multiple columns?",
    options: ["grid-column", "span-column", "column-span", "grid-col"],
    answer: "grid-column"
  },
  {
    question: "Which property places an item across rows?",
    options: ["grid-row", "span-row", "row-span", "grid-line"],
    answer: "grid-row"
  },
  {
    question: "Which property sets spacing between grid items?",
    options: ["gap", "spacing", "gutter", "grid-gap"],
    answer: "gap"
  },
  {
    question: "Which CSS function repeats column/row values?",
    options: ["loop()", "repeat()", "grid-loop()", "cycle()"],
    answer: "repeat()"
  },
  {
    question: "Which unit allows leftover space distribution?",
    options: ["px", "em", "fr", "%"],
    answer: "fr"
  },
  {
    question: "Which property sets both rows and columns template?",
    options: ["grid-template", "grid-layout", "grid", "template-grid"],
    answer: "grid-template"
  },
  {
    question: "Which property aligns grid items horizontally?",
    options: ["justify-items", "align-items", "place-items", "justify"],
    answer: "justify-items"
  },

  // 31–40
  {
    question: "Which property aligns grid items vertically?",
    options: ["align-items", "justify-items", "place-content", "grid-align"],
    answer: "align-items"
  },
  {
    question: "Which shorthand sets both align-items and justify-items?",
    options: ["place-items", "grid-items", "set-items", "align-all"],
    answer: "place-items"
  },
  {
    question: "Which property aligns the entire grid horizontally?",
    options: ["justify-content", "align-content", "grid-content", "place-items"],
    answer: "justify-content"
  },
  {
    question: "Which property aligns the entire grid vertically?",
    options: ["align-content", "justify-content", "content-align", "grid-align"],
    answer: "align-content"
  },
  {
    question: "Which property defines the number of implicit rows?",
    options: ["grid-auto-rows", "grid-rows", "auto-rows", "implicit-rows"],
    answer: "grid-auto-rows"
  },
  {
    question: "Which property defines the number of implicit columns?",
    options: ["grid-auto-columns", "auto-columns", "grid-columns", "implicit-columns"],
    answer: "grid-auto-columns"
  },
  {
    question: "Which property controls layout of added items?",
    options: ["grid-auto-flow", "auto-flow", "grid-flow", "layout-flow"],
    answer: "grid-auto-flow"
  },
  {
    question: "Which auto-flow value fills rows first?",
    options: ["row", "column", "dense", "reverse"],
    answer: "row"
  },
  {
    question: "Which auto-flow value fills columns first?",
    options: ["column", "row", "dense", "span"],
    answer: "column"
  },
  {
    question: "Which property controls overlapping grid items?",
    options: ["z-index", "overlap", "grid-order", "grid-layer"],
    answer: "z-index"
  },

  // 41–50
  {
    question: "Which property sets start and end position for grid columns?",
    options: ["grid-column", "grid-col-position", "column-line", "grid-position"],
    answer: "grid-column"
  },
  {
    question: "Which property sets start and end position for rows?",
    options: ["grid-row", "row-position", "line-row", "grid-line"],
    answer: "grid-row"
  },
  {
    question: "Which shorthand defines row, column, and area?",
    options: ["grid-area", "grid-zone", "grid-space", "grid-block"],
    answer: "grid-area"
  },
  {
    question: "Which property names specific grid areas?",
    options: ["grid-template-areas", "grid-names", "named-areas", "template-areas"],
    answer: "grid-template-areas"
  },
  {
    question: "Which property defines spacing for both rows & columns?",
    options: ["gap", "grid-gap", "grid-spacing", "space"],
    answer: "gap"
  },
  {
    question: "Which function sets minimum and maximum size?",
    options: ["clamp()", "minmax()", "range()", "limit()"],
    answer: "minmax()"
  },
  {
    question: "Which CSS layout system is one-dimensional?",
    options: ["Grid", "Flexbox", "Table", "Float"],
    answer: "Flexbox"
  },
  {
    question: "Which CSS layout system is two-dimensional?",
    options: ["Flexbox", "Grid", "Float", "Block"],
    answer: "Grid"
  },
  {
    question: "Which property controls gaps in Grid only (now merged into gap)?",
    options: ["grid-gap", "col-gap", "space-grid", "item-gap"],
    answer: "grid-gap"
  },
  {
    question: "Which property sets column gap specifically?",
    options: ["column-gap", "col-gap", "grid-column-gap", "gap-col"],
    answer: "column-gap"
  }
];
