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


    const availablePrograms = [
      { name: "Liderazgo y Autoconocimiento", link: "/liderazgo" },
      { name: "Effective Management", link: "/effective-management" },
      { name: "Liderando Equipos", link: "/liderando-equipos" },
      // { name: "Toma de Decisiones Basadas en Datos", link: "" },
      // { name: "Productividad y desempeño", link: "" },
      // { name: "Comunicación Efectiva", link: "" },
    ]

    const dropdown = document.createElement("div");
    dropdown.className = "dropdown";
    dropdown.innerHTML = `
    <button class="dropbtn">
      Programas
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-chevron-down" viewBox="0 -1 14 14">
        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
      </svg>
    </button>
    `;

    const programs = document.createElement("div");
    programs.className = "dropdown-content";
    programs.innerHTML = availablePrograms.map(
      program =>
        `<a href="${program.link}">${program.name}</a>`
    )
      .join('');

    dropdown.appendChild(programs);
    navElement.appendChild(dropdown);

    programs.onchange = () => window.location.href = programs.value;

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
    buttonElement.id = "navButton";
    buttonElement.textContent = buttonName;
    buttonElement.onclick = () => window.location.href = buttonLink;

    headerElement.appendChild(buttonElement);

    const loginLink = this.hasAttribute('loginlink') ? this.getAttribute('loginlink') : '/#';

    const loginElement = document.createElement("button");
    loginElement.id = "login";
    loginElement.textContent = "Login";
    loginElement.onclick = () => window.location.href = loginLink;

    headerElement.appendChild(loginElement);

    const burgerFunction = () => {
      const x = headerElement;
      if (x.className === "closed") {
        x.className = "opened responsive";
        burgerElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>`
      } else {
        x.className = "closed";
        burgerElement.innerHTML = `<svg width="24" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 5H17M1 1H17M1 9H9" stroke="#131A29" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `;
      }
    }

    const buttonClone = buttonElement.cloneNode(true);
    const loginClone = loginElement.cloneNode(true);

    buttonClone.onclick = () => {
      window.location.href = buttonLink
      burgerFunction();
    };
    loginClone.onclick = () => {
      window.location.href = loginLink;
      burgerFunction();
    }

    navElement.appendChild(buttonClone);
    navElement.appendChild(loginClone);

    const burgerElement = document.createElement("a");
    burgerElement.id = "burger";
    burgerElement.classList.add("icon");
    burgerElement.onclick = burgerFunction;
    burgerElement.innerHTML = `<svg width="24" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 5H17M1 1H17M1 9H9" stroke="#131A29" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `;

    headerElement.appendChild(burgerElement);

    const shadow = this.attachShadow({ mode: "open" });

    const headElement = document.createElement("head");
    headElement.appendChild(styleElement);

    shadow.appendChild(headElement);
    shadow.appendChild(headerElement);
  }
}

customElements.define("laboratoria-plus-header", LaboratoriaHeader);
