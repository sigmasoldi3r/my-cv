const fas = 'fas';
const fab = 'fab';

/**
 * Renders the <i class="fab/fas fa-(icon name)"></i> element.
 * @param {[string]} param0
 */
const Icon = ([name], ...[base = 'fas']) => `<i class="${base} fa-${name}"></i>`

module.exports = { fab, fas, Icon };
