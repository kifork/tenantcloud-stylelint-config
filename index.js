'use strict';

const orderOfProperties = require('./order/properties.js');
const orderOfContent = require('./order/content');

module.exports = {
  extends: 'stylelint-config-standard-scss',
  plugins: [`stylelint-order`],
  rules: {
    'order/properties-order': [{
      properties: orderOfProperties /* Specify the order of properties within declaration blocks */
    }],
    'order/order': orderOfContent, /* Specify the order of content within declaration blocks */
  }
}
