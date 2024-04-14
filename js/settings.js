/** settings.js **
 *
 *
 */

"use strict";

class Settings {
  constructor(layoutsPromise) {
    this.initialize();
  }

  initialize() {
    this.physical = document.querySelector("[name|=physical]");
    this.functional = document.querySelector("[name|=functional]");
    this.custom = document.querySelector("[name|=custom]");

    this.link = document.querySelector("link#physical");
    this.sections = [].slice.call(document.querySelectorAll("section"));

    this.setPhysical = this.setPhysical.bind(this);
    this.setFunctional = this.setFunctional.bind(this);
    this.setCustom = this.setCustom.bind(this);
    this.physical.addEventListener("change", this.setPhysical, false);
    this.functional.addEventListener("change", this.setFunctional, false);
    this.custom.addEventListener("change", this.setCustom, false);

    this.settings = {
      physical: this.physical.value,
      functional: this.functional.value,
      custom: this.custom.value
    };

    this.showLayout(this.settings);
  }

  keyPress(event) {
    console.log("keyCode:", event.code, "key:", event.key);
  }

  setPhysical(event) {
    const physical = (this.settings.physical = event.target.value);
    const functional = this.settings.functional;
    this.showLayout({ physical, functional });
  }

  setFunctional(event) {
    const functional = (this.settings.functional = event.target.value);
    const physical = this.settings.physical;
    this.showLayout({ physical, functional });
  }

  showLayout({ physical, functional }) {
    this.sections.forEach((section) => {
      if (section.id === physical) {
        section.classList.add("active");
        this.link.href = this.getLinkURL(physical);
      } else {
        section.classList.remove("active");
      }
    });

    this.showKeyMapping(physical, functional);
  }

  getLinkURL(layout) {
    return "css/style_" + layout + ".css";
  }

  showKeyMapping(physical, functional) {
    const mappings = this.getMappings(physical, functional);
    const section = document.querySelector("section#" + physical);
    const selector = ".row div";
    const keyDivs = section.querySelectorAll(selector);
    const keys = this.getKeysByClass(keyDivs);

    // console.log("keys:", keys);
    // console.log(`mappings`, mappings);

    for (let keyCode in mappings) {
      if (mappings.hasOwnProperty(keyCode)) {
        const div = keys[keyCode];
        if (div) {
          const mapping = mappings[keyCode];
          const HTML = this.getKeyDisplay(mapping);
          div.innerHTML = HTML;
        }
      }
    }
  }

  getKeysByClass(keyDivs) {
    const keys = {};
    keyDivs = Array.prototype.slice.call(keyDivs);
    keyDivs.forEach((div) => {
      const className = div.classList[0];
      keys[className] = div;
    });

    return keys;
  }

  getMappings(physical, functional) {
    const mappingName = physical + "_" + functional;
    return window.jazyx[mappingName];
  }

  getKeyDisplay(charArray) {
    return charArray[0];
  }

  setCustom(event) {}
}

new Settings();
