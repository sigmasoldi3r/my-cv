/**
 * Maps object as properties.
 * @param {*} obj
 * @returns {string}
 */
const mapToProps = obj => Object.keys(obj).map(k => `${k}="${obj[k]}"`).join(' ');

/**
 * Creates a html component.
 * @param {string} name
 * @returns {(props: any) => (s: string) => string}
 */
const createComponent =
  name =>
    (props = {}) =>
      (str, ...p) =>
        `<${name} ${mapToProps(props)}>${str.map((s, i) => p.length < i ? s + p[i] : s)
        }</${name}>`;

/**
 * Simple HTML tag with doctype.
 * @param {string} content
 * @returns {string}
 */
const document = content => /*html*/`<!doctype html>
<html>
  ${content}
</html>
`;

module.exports = {
  createComponent,
  document,
  h1: createComponent('h1'),
  h2: createComponent('h2'),
  h3: createComponent('h3'),
  h4: createComponent('h4'),
  h5: createComponent('h5'),
  h6: createComponent('h6'),
  p: createComponent('p'),
  div: createComponent('div'),
  span: createComponent('span'),
  table: createComponent('table'),
  td: createComponent('td'),
  tr: createComponent('tr'),
  th: createComponent('th'),
  ul: createComponent('ul'),
  ol: createComponent('ol'),
  li: createComponent('li'),
  a: createComponent('a'),
  img: createComponent('img'),
  input: createComponent('input'),
  form: createComponent('form'),
  button: createComponent('button'),
};
