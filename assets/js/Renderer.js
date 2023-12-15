import EventHandler from "./EventHandler.js";

export default class Renderer extends EventHandler {
  getElement(htmlString) {
    var div = document.createElement("div");
    div.innerHTML = htmlString.trim();

    return div.children.length > 1 ? div.children : div.firstChild;
  }

  getItem(item) {
    let {
      position,
      title,
      artist,
      change,
      changeLabel,
      image,
      new: isNew,
    } = item;
    let changeClass = change < 0 ? "is-negative" : "is-positive";
    changeClass = change === 0 ? "is-neutral" : changeClass;
    const newLabel = isNew ? '<span class="label">Nieuw</span>' : "";

    let html = `
		<li data-id="${position}">
			
			<article class='list-entry'>
			
				<span>
					<strong>
						${position}
					</strong>
				</span>
				
				<header>
					
					<picture data-play>
						<img src='${image}' loading="lazy">
					</picture>
					
				</header>
				
				<section>
				
					<h2>
						${title}
					</h2>
					
					<h3>
						${artist}
					</h3>
					
				</section>
				
				<footer>
					${newLabel}
				
					<span class="label ${changeClass}" data-change="${change}" >
						${changeLabel}
					</span>
				</footer>
				
			</article>
		</li>
		`;
    let element = this.getElement(html);
    this.setupItemEvents(element);
    return element;
  }

  setupItemEvents() {}

  getItems(list) {
    let elements = list.map((item) => {
      return this.getItem(item);
    });
    console.log(elements);

    return elements;
  }

  getList(list) {
    return this.getItems(list);
  }

  getSorter(sorter) {
    let { name, label } = sorter;
    return `
			<button class='sorter' data-sort='${name}'>
				${label}
				<i class='asc fa fa-caret-up'></i>
				<i class='desc fa fa-caret-down'></i>
				<i class='icon fa fa-sort'></i>
			</button>
		`;
  }

  getSorters(sorters) {
    return sorters.map((sorter) => this.getSorter(sorter));
  }

  getFilters(filters) {
    return this.getElement(`
			<div class='sorters'>
				<span>Sorteer: </span>
				${this.getSorters(filters.sort).join("")}
			</div>
		`);
  }

  getYearSelector(lists, year) {
    let years = Object.keys(lists);
    years = years.map((name) => {
      let selected = year == name ? "selected" : "";
      return `<option value='${name}' ${selected}>${name}</option> `;
    });
    return this.getElement(`
			<select data-year>
				${years.join("")}
			</select>
		`);
  }
}
