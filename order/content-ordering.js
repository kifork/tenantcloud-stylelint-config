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

const breakpoints = breakpoints => {
  const devices = [
    {
      type: 'at-rule',
      name: 'include',
      parameter: `^media-mobile`,
    },
    {
      type: 'at-rule',
      name: 'include',
      parameter: `^media-desktop`,
    },
  ];

  const mediaValues = breakpoints.map(breakpoint => {
    return {
      type: 'at-rule',
      name: 'include',
      parameter: `^media-${ breakpoint }`,
    };
  });

  return [...devices, ...mediaValues];
}

const breakpointValues = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
const breakpointBetweenValues = [];

const breakpointsOrder = name => breakpointValues.map(breakpoint => `${name}\\(${breakpoint}\\)`);
const breakpointsOrderBetween = name =>
  breakpointValues.map(breakpoint =>
    breakpointValues.map(item => breakpointBetweenValues.push(`${name}\\(${breakpoint}, ${item}\\)`))
  );

breakpointsOrderBetween('between');

const breakpointsOrdering = [
  ...breakpointsOrder('mobile'),
  ...breakpointsOrder('desktop'),
  ...breakpointsOrder('min'),
  ...breakpointsOrder('max'),
  ...breakpointsOrder('only'),
  ...breakpointBetweenValues,
];
const selectorsOrdering = ['^[a-z]', '^\\*', '^\\.\\w+', '^\\[\\w+', '^\\>', '^\\+', '^\\~', '^#', '^&\\.\\w+', '^&\\[\\w+', '^&', '^&:not'];
const pseudoElementsOrdering = ['^&::first-letter', '^&::before', '^&::after', '^&::placeholder', '^&::[a-z]'];
const pseudoClassesOrdering = [
  '^&:first',
  '^&:first-child',
  '^&:first-of-type',
  '^&:lang',
  '^&:last-child',
  '^&:last-of-type',
  '^&:nth-last-child',
  '^&:nth-last-of-type',
  '^&:nth-child',
  '^&:nth-of-type',
  '^&:only-child',
  '^&:only-of-type',
  '^&:hover',
  '^&:focus',
  '^&:active',
  '^&:visited',
  '^&:invalid',
  '^&:valid',
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
  mediaBreakpointsMixins: breakpoints(breakpointsOrdering),
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
  mediaQueries: {
    'type': 'at-rule',
    'name': 'media',
  },
};
