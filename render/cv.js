const { document } = require("./components");
const html = require('./html');
const { header, about } = require("./parts");
const { Icon, fab } = require('./Icon');
const { t, translate } = require("./loc");

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

module.exports = () => document(html`
  <head>
    <title>${t`author.name`}</title>
    <link rel="stylesheet" href="css/boot.big.css">
    <link rel="stylesheet" href="css/site.big.css">
    <link rel="stylesheet" href="css/theme.css">
    <link rel="stylesheet" href="fa/css/all.css">
  </head>
  <body>
    <section class="headline">
      ${header()}
    </section>
    <section class="about">
      ${about()}
    </section>
    <section class="formation">
      <div class="panel panel-success">
        <div class="panel-heading">
          <h2 class="panel-title">${t`titles.formation`}</h2>
        </div>
        <ul class="list-group">
          ${[
    t`formation.tokio`,
    t`formation.granollers`,
    t`formation.vilanova`
  ].map(formation).join('\n')}
          <li class="list-group-item">
            <b>${t`titles.additional`}</b>
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
      <h4>${t`titles.experience`}</h4>
      <div class="timeline">
        <dl>
        <!--<dt>2020</dt>-->
        ${TimeL(t`work.kantar.info`, html`
          <p>${t`work.kantar.text`}</p>
        `)}
        ${TimeR(t`work.catalog_player.info`, html`
          <p>${t`work.catalog_player.text`}</p>
        `)}
        ${TimeL(t`work.mobivention.info`, html`
          <p>${t`work.mobivention.text`}</p>
        `)}
        ${TimeR(t`work.veronica.info`, html`
          <p>${t`work.veronica.text`}</p>
        `)}
        ${TimeL(t`work.linde_wiemann.info`, html`
          <p>${t`work.linde_wiemann.text`}</p>
        `)}
      </dl>
      </div>
    </section>
    <section class="page-margin">
      <h3>${t`about.title`}</h3>
      <h5>${t`about.hobbies.title`}</h5>
      <p>
        ${t`about.hobbies.p.first`}
      </p>
      <p>
        ${t`about.hobbies.p.second`}
      </p>
      <p>
        ${translate(`about.hobbies.p.third`, {
    charon_logo: IconImage`assets/charon.png`,
    antlr_url: 'https://github.com/antlr/antlr4/blob/478e46409e82997aa31fdce8c9ca5bbd5e887e17/contributors.txt#L271',
    charon_url: 'https://github.com/sigmasoldi3r/charon-lang'
  })}
      </p>
      <h5>${t`about.languages.title`}</h5>
      <p>
        ${t`about.languages.text`}
      </p>
      <h3>${t`about.other_tools.title`}</h3>
      <p>
        ${t`about.other_tools.engines`}
      </p>
      <p>
        ${t`about.other_tools.software`}
      </p>
    </section>
    <div id="github-ribbon">
      <span>
        <a href="https://github.com/sigmasoldi3r/my-cv">
          ${t`misc.source_notice`}
        </a>
      </span>
    </div>
  </body>
`);
