const html = require("./html");

/**
 * Returns empty string if parameters are undefined.
 * @param {string[]} s
 * @param  {...any} p
 * @returns {string|''}
 */
module.exports = (s, ...p) => p.every(s => s == null) ? '' : html(s, ...p);