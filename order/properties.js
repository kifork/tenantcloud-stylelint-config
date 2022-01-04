const { position, blockModel, typography, decor, animation, miscellanea } = require('./properties-ordering');

module.exports = [...position, ...blockModel, ...typography, ...decor, ...animation, ...miscellanea];
