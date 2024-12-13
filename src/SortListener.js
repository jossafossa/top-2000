import EventHandler from "./EventHandler.js";

export default class SortListener extends EventHandler {
  constructor(element) {
    super();
    this.sorters = element.querySelectorAll("[data-sort]");
    for (let sorter of this.sorters) {
      sorter.addEventListener("click", (e) => this.sort(sorter));
    }
  }

  resetSort() {
    for (let sorter of this.sorters) {
      sorter.sorted = false;
      sorter.classList.remove("is-sorted");
      sorter.classList.remove("is-asc");
    }
  }

  sort(element) {
    let { sort } = element.dataset;
    if (this.lastSort !== sort) this.resetSort();
    element.classList.add("is-sorted");
    let asc = element.sorted ?? false;
    element.sorted = !asc;
    element.classList[asc ? "add" : "remove"]("is-asc");
    this.emit("sort", { sort, asc });
    this.lastSort = sort;
  }
}
