const { document } = require("./components");
const html = require('./html');
const { header, about } = require("./parts");
const { Icon, fab } = require('./Icon');

const TimeEntry = pos => (props, content) => html`
<dd class="pos-${pos} clearfix">
  <div class="circ"></div>
  <div class="time">${props.time}</div>
  <div class="events">
    <div class="events-body">
      <h4 class="events-heading">${props.title}</h4>
      ${content}
    </div>
  </div>
</dd>
`;

const TimeL = TimeEntry('left')
const TimeR = TimeEntry('right')

const formation = ({ date, mark, title, loc }, i) => html`
${i === 0 ? '<div class="panel-body">' : '<li class="list-group-item">'}
  <b>${date} ${title} (${mark})</b><br>
  <span>${Icon`map-marker-alt`} ${loc}</span>
${i === 0 ? '</div>' : '</li>'}
`;

const IconImage = url => html`<img class="image-icon" src="${url}" alt="${url}">`

module.exports = document(html`
  <div id="github-ribbon">
    <span>
      <a href="https://github.com/sigmasoldi3r/my-cv">
        ¡Puedes ver el código fuente <br> de este currículum en mi github!
      </a>
    </span>
  </div>
  <head>
    <title>Pablo Blanco Celdrán</title>
    <link rel="stylesheet" href="css/boot.big.css">
    <link rel="stylesheet" href="css/site.big.css">
    <link rel="stylesheet" href="css/theme.css">
    <link rel="stylesheet" href="fa/css/all.css">
  </head>
  <body>
    <section class="headline">
      ${header}
    </section>
    <section class="about">
      ${about}
    </section>
    <section class="formation">
      <div class="panel panel-success">
        <div class="panel-heading">
          <h2 class="panel-title">Formación</h2>
        </div>
        <ul class="list-group">
          ${[
    {
      title: `Curso de desarrollo de videojuegos`
      , date: ``
      , mark: `Cursando`
      , loc: `Tokio School`
    },
    {
      title: `Grado superior de desarrollo de aplicaciones multiplataforma`
      , date: `2015-2017`
      , mark: `Matrícula de honor`
      , loc: `Ins Carles Vallbona, Granollers`
    },
    {
      title: `Bachillerato tecnológico`
      , date: `2013-2015`
      , mark: `Notable`
      , loc: `Ins Carles Vallbona, Granollers`
    }
  ].map(formation).join('\n')}
          <li class="list-group-item">
            <b>Conocimientos adicionales</b>
            <br>
            <div class="additional-knowledge">
              <span>${IconImage`assets/nodejs-icon-logo-png-transparent.png`} Node</span>
              <span>${Icon`npm${fab}`} NPM</span>
              <span>${IconImage`assets/React_logo_logotype_emblem.png`} React</span>
              <span>${Icon`less${fab}`} Less</span>
              <span>${Icon`sass${fab}`} Sass</span>
              <span>${Icon`css3${fab}`} CSS3</span>
              <span>${IconImage`assets/scala-spiral.png`} Scala</span>
              <span>${IconImage`assets/Kotlin_Icon.svg.png`} Kotlin</span>
              <span>${IconImage`assets/clojure-logo-120b.png`} Clojure</span>
              <span>${IconImage`assets/200px-ISO_C++_Logo.svg.png`} C/C++14</span>
              <span>${IconImage`assets/800px-OpenGL_logo_(Nov14).svg.png`} OpenGL</span>
              <span>${IconImage`assets/1200px-Typescript_logo_2020.svg.png`} Typescript</span>
              <span>${IconImage`assets/lua-logo.gif`} Lua</span>
              <span>${IconImage`assets/wasm.jpg`} WASM</span>
              <span>${IconImage`assets/SQLite-Logo-500x313.png`} SQLite</span>
              <span>${IconImage`assets/blender-logo.jpg`} Blender</span>
              <span>${IconImage`assets/unity-logo.jpg`} Unity3D</span>
              <span>${IconImage`assets/150px-C_Sharp_wordmark.svg.png`} C#</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section>
      <h4>Experiencia laboral</h4>
      <div class="timeline">
        <dl>
        <!--<dt>2020</dt>-->
        ${TimeL({ time: "2020", title: "Kantar Worldpanel - St. Cugat" }, html`
          <p>
            Desarrollo full stack con ReactJS, .NET Core y MVC.
            Trabajo con Azure functions y Azure DevOps.
            Servidores de ejecución remota de scripts en R.
            Scripts de procesado de datos con ClojureScript.
          </p>
        `)}
        ${TimeR({ time: "2018", title: "Catalog Player - Granollers" }, html`
          <p>
            Desarrollador full stack con tecnologías híbridas, sistemas
            integrados, mantenimiento de servidores de bases de datos, dirección
            de equipo colaborando con Sage UK, desarrollo front end con ReactJS.
          </p>
        `)}
        ${TimeL({ time: "2016", title: "Mobivention - Köln (Erasmus)" }, html`
          <p>
            Desarrollo de aplicaciones híbridas para movil, con Cordova e Ionic.
            Desarrollo de servidores NodeJS para consultar APIs de puntuación de
            appstores móviles.
          </p>
        `)}
        ${TimeR({ time: "2015", title: "Verónica, gestión de suministros eléctricos" }, html`
          <p>
            Desarrollo e implantación de software de gestión empresarial (ERP).
          </p>
        `)}
        ${TimeL({ time: "2013", title: "Linde & Wiemann - La Garriga" }, html`
          <p>
            Ayudante de técnico de mantenimiento. Reparación de sensores,
            sistemas de control eléctricos & hidro-neumáticos.
          </p>
        `)}
      </dl>
      </div>
    </section>
    <section class="page-margin">
      <h3>Sobre mí</h3>
      <h5>Aficiones</h5>
      <p>
        Me gusta hacer senderismo, jugar a videojuegos con mis amigos, o
        disfrutar de una buena historia en un jugador. Me encanta ver
        <i>anime</i> y el dibujo creativo.
      </p>
      <p>
        Otra de mis aficiones es la impresión 3D y la
        electrónica, me divierto con pequeños proyectos, programando placas de
        la família Arduino o ESP.
      </p>
      <p>
        Disfruto mucho en el campo de diseño de lenguajes de programación.
        Siempre encuentro emocionante aprender uno nuevo, tal es así que una vez
        diseñé uno propio, llamado ${IconImage`assets/charon.png`} Charon (Lo
        podéis encontrar en <a href="https://github.com/sigmasoldi3r/charon-lang">
        mi GitHub</a>).
        He contribuido en algunos proyectos open-source como
        <a href="https://github.com/antlr/antlr4/blob/478e46409e82997aa31fdce8c9ca5bbd5e887e17/contributors.txt#L271">
          AntLR4.
        </a>
      </p>
      <h5>Idiomas</h5>
      <p>
        <b>Catalán</b> y <b>Castellano nativos</b>. <b>Inglés fluido</b>.
        ¡Ahora me estoy atreviendo con el Japonés y el Alemán!
      </p>
      <h3>Otras herramientas</h3>
      <p>
        Estoy familiarizado con motóres gráficos como Defold, Unreal Engine 4,
        Godot y Löve2D.
      </p>
      <p>
        También he utilizado programas de dibujo como Aseprite y Krita o
        programas tipo CAD como AutoCAD y SolidWorks.
      </p>
    </section>
  </body>
`);
