import EventHandler from "./EventHandler.js";

export default class ListSwitcher extends EventHandler {
  constructor(element) {
    super();
    this.year = element.querySelector("[data-year]");
    this.previous = element.querySelector("[data-previous]");
    [this.year, this.previous].forEach((e) => this.addListeners(e));
  }

  addListeners(element) {
    element.addEventListener("change", (e) => this.switch(e));
  }

  switch() {
    let year = this.year.value;
    let previous = this.previous.value;
    this.emit("switch", [year, previous]);
  }
}
