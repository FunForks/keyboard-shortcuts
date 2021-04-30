/** settings.js **
 *
 *
 */

"use strict";

class Settings {
  constructor() {
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
    console.log("this.settings:", this.settings);
  }

  keyPress(event) {
    console.log("keyCode:", event.code, "key:", event.key);
  }

  setPhysical(event) {
    const layout = event.target.value;
    this.sections.forEach((section) => {
      if (section.id === layout) {
        section.classList.add("active");
        this.link.href = this.getLinkURL(layout);
      } else {
        section.classList.remove("active");
      }
    });
  }

  getLinkURL(layout) {
    return "css/style_" + layout + ".css";
  }

  setFunctional(event) {
    const functional = event.target.value;
    const section = document.querySelector("section.active");
    const physical = section.id;
    const mappings = this.getMappings(physical, functional);
    const selector = ".row div";
    const keyDivs = section.querySelectorAll(selector);
    const keys = this.getKeysByClass(keyDivs);

    console.log("keys:", keys);
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
