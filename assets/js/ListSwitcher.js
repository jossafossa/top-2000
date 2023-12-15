import EventHandler from "./EventHandler.js";

export default class ListSwitcher extends EventHandler {
  constructor(element) {
    super();
    this.switchers = element.querySelectorAll("[data-year]");
    for (let year of this.switchers) {
      year.addEventListener("change", (e) => this.switch(year));
    }
  }

  switch(year) {
    let value = year.value;
    this.emit("switch", value);
  }
}
