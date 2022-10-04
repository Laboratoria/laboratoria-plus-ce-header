import style from './style.css';

class LaboratoriaHeader extends HTMLElement {
  constructor() {
    super();

    const styleElement = document.createElement("style");
    styleElement.textContent = style;


    const headerElement = document.createElement("header");
    headerElement.className = "closed";

    const logoHref = this.hasAttribute('logolink') ? this.getAttribute('logolink') : '/#';
    const logoLink = document.createElement("a");
    logoLink.id = "logo";
    logoLink.href = logoHref;
    const logoElement = document.createElement("img");
    // logoElement.src = logo;

    logoLink.appendChild(logoElement);
    headerElement.appendChild(logoLink);

    const aElements = this.querySelectorAll("a");
    const navElement = document.createElement("nav");
    aElements.forEach(a => navElement.appendChild(a));

    window.addEventListener('hashchange', () => {
      aElements.forEach(a => {
      // add bold class if current url includes a.href
      if (window.location.href.includes(a.href)) {
        a.className = "bold";
      } else {
        a.className = "";
      }
    });
    })

    headerElement.appendChild(navElement);

    const buttonName = this.hasAttribute('buttonname') ? this.getAttribute('buttonname') : '/#';
    const buttonLink = this.hasAttribute('link') ? this.getAttribute('link') : '/#';
    const buttonElement = document.createElement("button");
    buttonElement.textContent = buttonName;
    buttonElement.onclick = () => window.location.href = buttonLink;

    const availableLanguages = []

    if (this.hasAttribute('eslink')) {
      availableLanguages.push({
        lang: 'ES',
        link: this.getAttribute('eslink')
      })
    }

    if (this.hasAttribute('enlink')) {
      availableLanguages.push({
        lang: 'EN',
        link: this.getAttribute('enlink')
      })
    }

    if (this.hasAttribute('ptlink')) {
      availableLanguages.push({
        lang: 'PT',
        link: this.getAttribute('ptlink')
      })
    }


    headerElement.appendChild(buttonElement);


    const buttonClone = buttonElement.cloneNode(true);
    navElement.appendChild(buttonClone);


    if (availableLanguages.length > 0) {

      const selectLang = document.createElement("select");
      selectLang.innerHTML = availableLanguages.map(
        lang =>
          window.location.href.includes(lang.link) ?
            `<option value="${lang.link}" selected>${lang.lang}</option>` :
            `<option value="${lang.link}">${lang.lang}</option>`
      )
        .join('');

      navElement.appendChild(selectLang);

      selectLang.onchange = () => window.location.href = selectLang.value;
    }

    const burgerFunction = () => {
      const x = headerElement;
      if (x.className === "closed") {
        x.className = "opened responsive";
        burgerElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>`
      } else {
        x.className = "closed";
        burgerElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"/></svg>`;
      }
    }

    const burgerElement = document.createElement("a");
    burgerElement.id = "burger";
    burgerElement.classList.add("icon");
    burgerElement.onclick = burgerFunction;
    burgerElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"/></svg>`;

    headerElement.appendChild(burgerElement);

    const shadow = this.attachShadow({ mode: "open" });

    const headElement = document.createElement("head");
    headElement.appendChild(styleElement);

    shadow.appendChild(headElement);
    shadow.appendChild(headerElement);
  }
}

customElements.define("laboratoria-header", LaboratoriaHeader);
