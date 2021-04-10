/**
 * HTML template tag.
 * @param {string[]} s
 * @param  {...any} t
 * @returns {string}
 */
module.exports = (s, ...t) => s.map((u, i) => t.length > i ? u + t[i] : u).join('');