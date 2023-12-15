export default class Statistics {
  sortBy(list, allItems = []) {
    list.sort((a, b) => {
      for (let items of allItems) {
        let order;
        if (!Array.isArray(items)) items = [items];

        let hasArray = items.map((e) => Array.isArray(e));
        hasArray = hasArray.includes(true);

        if (hasArray) {
          for (let item of items) {
            order = b[item].length - a[item].length;
          }
        } else {
          let composedA = [];
          let composedB = [];
          for (let item of items) {
            composedA.push(a[item]);
            composedB.push(b[item]);
          }
          composedA = composedA.join(" - ");
          composedB = composedB.join(" - ");
          order = composedA > composedB ? -1 : 1;
        }
        if (order !== 0) return order;
      }
    });
    return list;
  }

  groupBy(list, keys) {
    keys = keys?.length ? keys : [keys];
    let newList = [];
    for (let item of list) {
      let newKeys = [];
      for (let key of keys) {
        newKeys.push(item[key] || "other");
      }

      let newKey = newKeys.join(" - ");
      newList[newKey] = newList?.[newKey] || [];
      newList[newKey].push(item);
    }
    newList = Object.entries(newList).map(([key, entries]) => {
      return {
        key,
        entries,
        count: entries.length,
      };
    });

    return newList;
  }

  getAveragePosition(list) {
    let total = list.reduce((a, i) => (a += i.position), 0);
    return total / list.length;
  }

  getList(list) {
    let groupedByArtist = this.groupBy(list, "artist");

    for (let artist of groupedByArtist) {
      artist.averagePosition = this.getAveragePosition(artist.entries);
    }

    this.sortBy(groupedByArtist, ["entries", "key"]);

    let all = {
      groupedByArtist,
    };

    return all;
  }

  getSong(list) {
    let averagePosition =
      list.reduce((a, e) => (a += e.position), 0) / list.length;

    return {
      test: "asdasd",
      averagePosition,
    };
  }

  getSongs(list) {
    let songs = this.groupBy(list, ["artist", "title"]);
    songs = this.sortBy(songs, ["entries", "key"]);
    for (let song of songs) {
      let songStats = this.getSong(song.entries);
      for (let [key, stat] of Object.entries(songStats)) {
        song[key] = stat;
      }
    }
    return songs;
  }

  getAll(lists) {
    console.log(lists);
    let all = [...Object.values(lists).flat()];

    let years = {};
    for (let [key, value] of Object.entries(lists)) {
      years[key] = this.getList(value);
    }

    let songs = this.getSongs(all);

    return {
      years,
      songs,
    };
  }
}
