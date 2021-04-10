/**
 * The header.
 */
const html = require('./html');
const { Icon } = require('./Icon');

const header = html`
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

const about = html`
<div class="popover bottom">
  <div class="arrow"></div>
  <!--
  <h3 class="popover-title">Sobre mí</h3>
  -->
  <div class="popover-content">
    <p>
      Desarrollador multiplataforma con tecnologías modernas como React.
      Desarrollo con NodeJS, addons nativos y estándares modernos como C++14.
      Siempre con ganas de aprender, racional y curioso.
    </p>
    <p>
      Me gusta hacer las cosas bien y pongo el esfuerzo necesario para
      conseguirlo.
      Me relaciono bien con personas muy diferentes y me adapto fácilmente
      a los cambios y situaciones. Capaz de organizar y liderar proyectos.
    </p>
    ${Label(html`${Icon`car`} Coche propio`)}
    ${Label(html`${Icon`volume-up`} Inglés fluido`)}
    ${Label(html`${Icon`list`} Responsable`, 'success')}
    ${Label(html`${Icon`bolt`} Emprendedor`, 'success')}
    ${Label(html`${Icon`fist-raised`} Entusiasta`, 'success')}
    ${Label(html`${Icon`plus`} Positivo`, 'success')}
    ${Label(html`${Icon`wrench`} Trabajo en equipo`, 'info')}
  </div>
</div>
<div class="user-data">
  ${UData({ icon: 'home', title: 'Domicilio' })`C/ Dotze de febrer, 29 Vilanova del Vallès (Barcelona)`}
  ${UData({ icon: 'phone', title: 'Teléfono' })`693210403`}
  ${UData({ icon: 'envelope', title: 'Correo' })`pablobc.1995@gmail.com`}
  ${UData({ icon: 'github', base: 'fab', title: 'Github' })`https://github.com/sigmasoldi3r`}
</div>
`;

module.exports = {
  header,
  about,
  UData
};