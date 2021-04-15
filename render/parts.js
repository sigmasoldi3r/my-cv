/**
 * The header.
 */
const html = require('./html');
const { Icon } = require('./Icon');
const { t } = require('./loc');

const header = () => html`
<nav>
  <div class="container-fluid">
    <div class="navbar-header avatar-container">
      <div class="avatar-image"></div>
      <a class="navbar-brand name-holder" href="#">
        Pablo Blanco Celdrán
      </a>
    </div>
  </div>
</nav>`;

/**
 * @param {{icon: string}} param0
 */
const UData = ({ icon, base, title = '' }) => (..._) => html`
<div class="input-group">
  <span class="input-group-addon addon-fixture">
    ${Icon([icon], base)} ${title}
  </span>
  <input class="form-control" type="text" value="${html(..._)}">
</div>
`;

/**
 * @param {string} text
 * @param {string|undefined} alt
 */
const Label = (text, alt) => html`<span class="label label-${alt ? alt : 'primary'}">${text}</span>`;

const about = () => html`
<div class="popover bottom">
  <div class="arrow"></div>
  <!--
  <h3 class="popover-title">Sobre mí</h3>
  -->
  <div class="popover-content">
    <p>
      ${t`author.what`}
    </p>
    <p>
      ${t`author.how`}
    </p>
    ${(t`author.tags`)
    .map(({ icon, label, style }) => Label(html`${Icon([icon])} ${label}`, style))
    .join('')}
  </div>
</div>
<div class="user-data">
  ${(t`author.data`).map(o => UData(o)`${o.text}`).join('')}
</div>
`;

module.exports = {
  header,
  about,
  UData
};