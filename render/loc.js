const yaml = require('yamljs')

const providers = {};
let lang = '???';

/**
 * Shows the translation of the given key string.
 * @param {string} what What to translate.
 * @param {{}} params an optional parameter to inject HBS like variables.
 */
function translate(what, params = {}) {
  const paths = what.split(/\./g);
  const data = providers[lang];
  if (data == null) throw `Bad language: ${lang} is not loaded!`
  let str = data[paths.shift()];
  for (; paths.length; str = str[paths.shift()]);
  if (typeof (str) !== 'string') return str;
  return str
    .replace(/\{\{(.+?)\}\}/g, (_, c) => params[c])
    .replace(/\[\[(.+?)\]\]/g, (_, c) => translate(c, params));
}

/**
 * Sets the using language.
 * @param {string} langToSet The language to work with.
 */
function setLanguage(langToSet) {
  lang = langToSet;
  console.log(`Setting global language to ${lang}`);
}

/**
 * Loads an YML file as a language definition file.
 * @param {string} where 
 */
function load(where) {
  console.log(`Loading language ${where}...`);
  const data = yaml.load(where);
  providers[data.lang] = data.definition;
  console.log(`Loaded as ${data.lang}`);
}

/**
 * This is the string tag if you don't need to provide parameters to the
 * translation unit.
 */
function t(...args) {
  return translate(String.raw(...args));
}

module.exports = { translate, setLanguage, load, t }
