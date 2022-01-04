const selectors = selectors =>
  selectors.map(selector => {
    return {
      type: 'rule',
      selector,
    };
  });

const mixins = mixins =>
  mixins.map(mixin => {
    return {
      type: 'at-rule',
      name: 'include',
      parameter: mixin,
    };
  });

const breakpoints = (...breakpoints) =>
  breakpoints.map(breakpoint => {
    return {
      type: 'at-rule',
      name: 'include',
      parameter: `^breakpoint-${breakpoint}`,
    };
  });

const breakpointsOrdering = ['min', 'only', 'between', 'max'];
const selectorsOrdering = ['^[a-z]', '^\\.\\w+', '^#', '^&\\.\\w+']; // tag -> class -> id
const pseudoElementsOrdering = ['^&::before', '^&::after', '^&::[a-z]'];
const pseudoClassesOrdering = [
  '^&:first-letter',
  '^&:first',
  '^&:nth',
  '^&:last',
  '^&:not',
  '^&:hover',
  '^&:focus',
  '^&:active',
  '^&:[a-z]',
];
const pseudoElementsMixinsOrdering = [
  // before
  'before-clean',
  'before',
  'before-hover',
  'before-active',

  // after
  'after-clean',
  'after',
  'after-hover',
  'after-active',

  // before-after
  'before-after-clean',
  'before-after',
  'before-after-hover',
  'before-after-active',
];
const pseudoClassesMixinsOrdering = ['hover', 'active', 'focus'];

module.exports = {
  customProperties: 'custom-properties',
  dollarVariables: 'dollar-variables',
  declarations: 'declarations',
  resetMixins: {
    'type': 'at-rule',
    'name': 'include',
    'parameter': '^reset',
  },
  extendRules: {
    'type': 'at-rule',
    'name': 'extend',
  },
  includeRules: {
    'type': 'at-rule',
    'name': 'include',
  },
  pseudoClassesMixins: mixins(pseudoClassesMixinsOrdering),
  pseudoElementsMixins: mixins(pseudoElementsMixinsOrdering),
  pseudoClasses: selectors(pseudoClassesOrdering),
  pseudoElements: selectors(pseudoElementsOrdering),
  selectors: selectors(selectorsOrdering),
  mediaBreakpointsMixins: breakpoints(breakpointsOrdering),
  mediaQueries: {
    'type': 'at-rule',
    'name': 'media',
  },
};
