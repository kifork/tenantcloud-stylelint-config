'use strict';

const orderOfProperties = require('./order/properties.js');
const orderOfContent = require('./order/content');

module.exports = {
  customSyntax: 'postcss-scss',
  plugins: [
    'stylelint-order',
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-declaration-use-variable',
    'stylelint-scss',
    'media-query-nesting',
    'disallow-media-duplicate',
  ],
  rules: {
    'order/properties-order': [
      {
        properties: orderOfProperties /* Specify the dist of properties within declaration blocks */,
      },
    ],
    'order/order': orderOfContent /* Specify the dist of content within declaration blocks */,
    'font-family-no-missing-generic-family-keyword': true,
    'no-descending-specificity': null,
    'color-hex-case': 'lower',
    'kiforks/media-query-nesting': true,
    'kiforks/disallow-media-duplicate': true,
    'color-hex-length': 'long',
    'font-family-name-quotes': 'always-unless-keyword',
    'function-comma-newline-after': 'always-multi-line',
    'function-comma-newline-before': 'never-multi-line',
    'function-comma-space-after': null,
    'function-comma-space-before': 'never',
    'function-max-empty-lines': 0,
    'function-name-case': 'lower',
    'function-parentheses-space-inside': 'never-single-line',
    'function-url-quotes': 'always',
    'function-whitespace-after': 'always',
    'number-leading-zero': 'always',
    'number-no-trailing-zeros': true,
    'length-zero-no-unit': [
      true,
      {
        'ignore': ['custom-properties'],
      },
    ],
    'string-quotes': 'single',
    'unit-case': 'lower',
    'value-keyword-case': 'lower',
    'value-list-comma-newline-after': 'always-multi-line',
    'value-list-comma-newline-before': 'never-multi-line',
    'value-list-comma-space-after': 'always-single-line',
    'value-list-comma-space-before': 'never',
    'value-list-max-empty-lines': 0,
    'value-no-vendor-prefix': [
      true,
      {
        'ignoreValues': ['box'],
      },
    ],
    'property-case': 'lower',
    'property-no-vendor-prefix': [
      true,
      {
        'ignoreProperties': ['box-orient'],
      },
    ],
    'keyframe-declaration-no-important': true,
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    'declaration-block-semicolon-space-after': 'always-single-line',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-trailing-semicolon': 'always',
    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always',
    'block-closing-brace-space-after': 'always-single-line',
    'block-closing-brace-space-before': 'always-single-line',
    'block-opening-brace-newline-after': 'always',
    'block-opening-brace-space-after': 'always-single-line',
    'block-opening-brace-space-before': 'always',
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-quotes': 'always',
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-descendant-combinator-no-non-space': true,
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-type-case': 'lower',
    'selector-type-no-unknown': [
      true,
      {
        'ignoreTypes': ['^.'],
      },
    ],
    'selector-max-empty-lines': 0,
    'selector-list-comma-newline-after': 'always',
    'selector-list-comma-newline-before': 'never-multi-line',
    'selector-list-comma-space-after': 'always-single-line',
    'selector-list-comma-space-before': 'never',
    'rule-empty-line-before': [
      'always',
      {
        'except': ['first-nested'],
        'ignore': ['after-comment'],
      },
    ],
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-case': 'lower',
    'media-feature-name-no-vendor-prefix': true,
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',
    'media-query-list-comma-newline-after': 'always-multi-line',
    'media-query-list-comma-newline-before': 'never-multi-line',
    'media-query-list-comma-space-after': 'always-single-line',
    'media-query-list-comma-space-before': 'never-single-line',
    'at-rule-empty-line-before': [
      'always',
      {
        'except': ['first-nested', 'blockless-after-blockless'],
        'ignore': ['after-comment'],
      },
    ],
    'at-rule-name-case': 'lower',
    'at-rule-name-space-after': 'always',
    'media-feature-name-no-unknown': [
      true,
      {
        'ignoreMediaFeatureNames': ['minpixel-ratio', 'min-device-pixel-ratio'],
      },
    ],
    'at-rule-no-vendor-prefix': true,
    'at-rule-semicolon-newline-after': 'always',
    'indentation': 'tab',
    'max-nesting-depth': [3, {
      'ignore': ['blockless-at-rules', 'pseudo-classes'],
      'ignoreAtRules': ['include']
    }],
    'max-empty-lines': 1,
    'selector-max-id': 3,
    'no-eol-whitespace': true,
    'no-missing-end-of-source-newline': true,
    'no-duplicate-at-import-rules': true,
    'no-invalid-position-at-import-rule': true,
    'color-no-invalid-hex': true,
    'color-no-hex': true,
    'color-named': 'never',
    'alpha-value-notation': 'number',
    'comment-empty-line-before': [
      'always',
      {
        'except': ['first-nested'],
        'ignore': ['stylelint-commands', 'after-comment'],
      },
    ],
    'comment-whitespace-inside': 'always',
    'comment-no-empty': true,
    'custom-property-empty-line-before': 'never',
    'declaration-colon-newline-after': 'always-multi-line',
    'declaration-property-unit-disallowed-list': {
      'line-height': ['px'],
      'transition': ['ms', 's'],
      'transition-duration': ['ms', 's'],
      'animation': ['ms', 's'],
      'animation-duration': ['ms', 's'],
    },
    'declaration-property-value-disallowed-list': {
      'border': ['none'],
      'line-height': ['normal'],
    },
    'font-weight-notation': [
      'numeric',
      {
        'ignore': ['relative'],
      },
    ],
    'function-disallowed-list': ['rgb'],
    'function-calc-no-unspaced-operator': true,
    'function-parentheses-newline-inside': null,
    'media-feature-name-disallowed-list': ['max-width', 'min-width'],
    'no-empty-source': null,
    'plugin/declaration-block-no-ignored-properties': true,
    'scss/dollar-variable-colon-newline-after': null,
    'scss/dollar-variable-colon-space-after': 'always',
    'scss/dollar-variable-pattern': '^[a-z0-9-]+$',
    'scss/at-mixin-parentheses-space-before': 'never',
    'scss/selector-nest-combinators': 'always',
    'scss/selector-no-redundant-nesting-selector': true,
    'scss/selector-no-union-class-name': true,
    'scss/operator-no-unspaced': true,
    'scss/no-duplicate-mixins': true,
    'scss/no-duplicate-dollar-variables': true,
    'scss/map-keys-quotes': 'always',
    'scss/function-unquote-no-unquoted-strings-inside': true,
    'scss/comment-no-empty': true,
    'scss/at-rule-conditional-no-parentheses': true,
    'scss/at-mixin-argumentless-call-parentheses': 'never',
    'scss/at-import-partial-extension-whitelist': ['scss'],
    'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-if-closing-brace-space-after': 'always-intermediate',
    'scss/at-if-no-null': true,
    'sh-waqar/declaration-use-variable': [
      [
        '/color/',
        'background-color',
        'font-family',
        'font-size',
        'size',
        'line-height',
        'stroke',
        'fill',
        {
          'ignoreValues': [
            '/^rgba/',
            'inherit',
            'initial',
            'none',
            'transparent',
            '/^rem/',
            '/em$/',
            '0',
            '1',
            '/^url/',
          ],
        },
      ],
    ],
    'unit-no-unknown': true,
    'block-no-empty': true,
    'declaration-block-no-duplicate-custom-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'font-family-no-duplicate-names': true,
    'function-linear-gradient-no-nonstandard-direction': true,
    'named-grid-areas-no-invalid': true,
    'no-duplicate-selectors': true,
    'no-extra-semicolons': true,
    'no-irregular-whitespace': true,
    'property-no-unknown': true,
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-no-unknown': {
      'ignorePseudoElements': ['ng-deep'],
    },
    'selector-class-pattern': [
      '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        'message': 'Please write the name of the selectors in the kebab case format'
      }
    ]
  },
};
