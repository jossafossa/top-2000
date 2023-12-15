import Renderer from "./Renderer.js";
import Sorter from "./Sorter.js";
import Sanitizer from "./Sanitizer.js";
import Statistics from "./Statistics.js";
import Spotify from "./Spotify.js";
import SortListener from "./SortListener.js";
import ListSwitcher from "./ListSwitcher.js";

class Top2000Filter {
  constructor(root, years) {
    this.root = root;
    this.renderer = new Renderer();
    this.sorter = new Sorter();
    this.sanitizer = new Sanitizer();
    this.statistics = new Statistics();
    this.spotify = new Spotify();

    this.filters = {
      sort: [
        {
          name: "title",
          label: "title",
        },

        {
          name: "position",
          label: "position",
        },
        {
          name: "artist",
          label: "artist",
        },
        {
          name: "change",
          label: "change",
        },
      ],
    };
    this.lists = this.sanitizer.sanitize(years);
    this.sortType = false;
    this.sortOrder = false;
    this.activeList = Object.keys(this.lists).sort().at(-1);
    let stats = this.statistics.getAll(this.lists);
    console.log(this.activeList);

    // render
    this.renderBase(root);
    let listRoot = this.renderList(this.activeList, this.getList());
    let yearSelectorRoot = this.renderYearSelection(
      this.lists,
      this.activeList
    );
    let filterRoot = this.renderFilters(this.filters);

    this.sortListener = new SortListener(filterRoot);
    this.sortListener.on("sort", ({ sort, asc }) => {
      this.sortType = sort;
      this.sortOrder = asc;
      this.renderList(this.activeList);
    });

    this.listSwitcher = new ListSwitcher(yearSelectorRoot);
    this.listSwitcher.on("switch", (year) => {
      this.activeList = year;
      this.renderList(this.activeList, this.getList());
    });

    this.renderer.on("song-click", (item) => {
      let { artist, track } = item;
      this.Spotify.getSong(artist, track);
    });
  }

  getList(year = false) {
    year = year || this.activeList;
    return this.lists[year];
  }

  renderBase(root) {
    this.filterRoot = document.createElement("header");
    this.listWrapper = document.createElement("section");
    this.listRoot = document.createElement("ul");
    this.listRoot.classList.add("list");
    this.listWrapper.append(this.listRoot);
    root.append(this.filterRoot, this.listWrapper);
  }

  renderList(year, list = false) {
    if (list === false) list = this.getList();

    if (this.sortType) {
      list = this.sorter.sortBy(list, [this.sortType], this.sortOrder);
    }
    if (year === this.renderedList) {
      let ids = list.map((e) => e.position);
      this.reorderListCSS(this.listRoot, ids);
      // this.reorderListHTML(this.listRoot, ids);
      return this.listRoot;
    }

    let items = this.renderer.getList(list);
    this.setupEvents(items, list);
    this.listRoot.append(...items);
    this.renderedList = year;
    return this.listRoot;
  }

  async play(item) {
    let song = await this.spotify.getSong(item.artist, item.track);
    console.log(song);
  }

  setupEvents(elements, list) {
    for (let i in elements) {
      let item = list[i];
      let element = elements[i];
      let play = element.querySelector("[data-play]");
      play.addEventListener("click", (e) => this.play(item));
    }
  }

  reorderListCSS(root, list) {
    let children = [...root.children];

    for (let child of children) {
      let id = parseInt(child.dataset.id);
      let order = list.indexOf(id);
      child.style.order = order;
    }
  }

  reorderListHTML(root, list) {
    let children = [...root.children];

    children.sort((a, b) => {
      const idA = parseInt(a.dataset.id);
      const idB = parseInt(b.dataset.id);
      return list.indexOf(idA) - list.indexOf(idB);
    });

    children.forEach((child) => {
      root.appendChild(child);
    });
  }

  renderFilters(filters) {
    let html = this.renderer.getFilters(filters);
    this.filterRoot.append(html);
    return this.filterRoot;
  }

  renderYearSelection(lists, year) {
    let html = this.renderer.getYearSelector(lists, year);
    this.filterRoot.append(html);
    return this.filterRoot;
  }
}

// -------------------------------------
// BOOSTRAP
// -------------------------------------
let years = {
  2023: "https://www.nporadio2.nl/api/charts/top-2000-van-2023-12-25",
  2022: "https://www.nporadio2.nl/api/charts/top-2000-van-2022-12-25",
  2021: "https://www.nporadio2.nl/api/charts/top-2000-van-2021-12-25",
  // 2020: "https://www.nporadio2.nl/api/charts/top-2000-van-2020-12-25",
  // 2019: "https://www.nporadio2.nl/api/charts/top-2000-van-2019-12-25",
  // 2018: "https://www.nporadio2.nl/api/charts/top-2000-van-2018-12-25",
  // 2017: "https://www.nporadio2.nl/api/charts/top-2000-van-2017-12-25",
  // 2016: "https://www.nporadio2.nl/api/charts/top-2000-van-2016-12-25",
  // 2015: "https://www.nporadio2.nl/api/charts/top-2000-van-2015-12-25",
  // 2014: "https://www.nporadio2.nl/api/charts/top-2000-van-2014-12-25",
  // 2013: "https://www.nporadio2.nl/api/charts/top-2000-van-2013-12-25",
  // 2012: "https://www.nporadio2.nl/api/charts/top-2000-van-2012-12-25",
  // 2011: "https://www.nporadio2.nl/api/charts/top-2000-van-2011-12-25",
  // 2010: "https://www.nporadio2.nl/api/charts/top-2000-van-2010-12-25",
  // 2009: "https://www.nporadio2.nl/api/charts/top-2000-van-2009-12-25",
  // 2008: "https://www.nporadio2.nl/api/charts/top-2000-van-2008-12-25",
  // 2007: "https://www.nporadio2.nl/api/charts/top-2000-van-2007-12-25",
  // 2006: "https://www.nporadio2.nl/api/charts/top-2000-van-2006-12-25",
  // 2005: "https://www.nporadio2.nl/api/charts/top-2000-van-2005-12-25",
  // 2004: "https://www.nporadio2.nl/api/charts/top-2000-van-2004-12-25",
  // 2003: "https://www.nporadio2.nl/api/charts/top-2000-van-2003-12-25",
  // 2002: "https://www.nporadio2.nl/api/charts/top-2000-van-2002-12-25",
  // 2001: "https://www.nporadio2.nl/api/charts/top-2000-van-2001-12-25",
  // 2000: "https://www.nporadio2.nl/api/charts/top-2000-van-2000-12-25",
};

// fetch a year
const fetchYear = async (url) => {
  // fetch
  let data = await fetch(url);
  let json;

  // get the json; fallback to false
  try {
    json = data.json();
  } catch (e) {
    json = false;
  }
  return json;
};

// fetch a list of years
const fetchYears = async (years) => {
  let yearsData = await Promise.all(
    Object.entries(years).map(async ([year, url]) => {
      // fetch from url
      let data = await fetchYear(url);

      // bail early with a falsy when no positions are found
      if (data?.positions === undefined) return false;

      // return the yeardata as an entry
      return [year, data.positions];
    })
  );

  // filter out falsy values
  yearsData = yearsData.filter((e) => e !== false);

  // convert entries to an object
  yearsData = Object.fromEntries(yearsData);

  // initialize
  return yearsData;
};

// bootstrap the app
(async () => {
  // fetch the years
  let data = await fetchYears(years);

  // initialize the app
  let root = document.querySelector(".root");
  new Top2000Filter(root, data);

  // hide the loader
  document.body.classList.add("loaded");
})();
