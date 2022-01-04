const {
  customProperties,
  dollarVariables,
  resetMixins,
  declarations,
  extendRules,
  includeRules,
  pseudoElementsMixins,
  pseudoClassesMixins,
  pseudoClasses,
  pseudoElements,
  selectors,
  mediaBreakpointsMixins,
  mediaQueries,
} = require('./content-ordering');

module.exports = [
  /* Custom properties (e. g., --property: 10px) */
  customProperties,

  /* Dollar variables (e. g., $variable) */
  dollarVariables,

  /* For reset mixins (e. g., @include reset-list) */
  resetMixins,

  /* CSS declarations (e. g., display: block) */
  declarations,

  /* SCSS extend rules (e. g., @extend .selector) */
  extendRules,

  /* SCSS include rules (e. g., @include some-mixin) */
  includeRules,

  /* SCSS pseudo-classes mixins (e. g., @include hover) */
  ...pseudoClassesMixins,

  /* SCSS pseudo-elements mixins (e. g., @include before-after) */
  ...pseudoElementsMixins,

  /* CSS pseudo-classes (e. g., &:hover) */
  ...pseudoClasses,

  /* CSS pseudo-elements (e. g., &::first-letter) */
  ...pseudoElements,

  /* CSS selectors (e. g., #some-id) */
  ...selectors,

  /* Media breakpoints mixins */
  ...mediaBreakpointsMixins,

  /* Media queries */
  mediaQueries,
];
