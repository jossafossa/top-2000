export default class Statistics {
  sortBy(list, keys, asc = true) {
    return list.sort((a, b) => {
      for (const key of keys) {
        const aValue = Array.isArray(a[key]) ? a[key].length : a[key];
        const bValue = Array.isArray(b[key]) ? b[key].length : b[key];

        if (aValue < bValue) return -1;
        if (aValue > bValue) return 1;
      }
      return 0;
    });
  }

  groupBy(list, keys, keyFn = (e) => e) {
    keys = keys?.length ? keys : [keys];
    let newList = [];
    for (let item of list) {
      let newKeys = [];
      for (let key of keys) {
        newKeys.push(item[key] || "other");
      }

      let newKey = keyFn(newKeys.join(" - "));
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

  sanitizeSongKey(key) {
    // remov everything between ()
    key = key.replace(/\(.*\)/g, "");

    // replace & with en
    key = key.replace(/&/g, "en");

    // remove punctuation
    key = key.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\?]/g, "");

    // lowercase
    key = key.toLowerCase().trim();

    return key;
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
      averagePosition,
    };
  }

  getSongs(list) {
    let songs = this.groupBy(list, ["artist", "title"], (e) =>
      this.sanitizeSongKey(e)
    );
    // songs = this.sortBy(songs, ["entries", "key"]);
    for (let song of songs) {
      let songStats = this.getSong(song.entries);
      for (let [key, stat] of Object.entries(songStats)) {
        song[key] = stat;
      }
    }

    songs = this.sortBy(songs, ["averagePosition", "count"]);

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
    let allList = songs.map((e, index) => {
      let firstEntry = e.entries[0];
      let position = index + 1;
      return {
        ...firstEntry,
        averagePosition: e.averagePosition,
        position,
        change: 0,
        previousPosition: position,
        changeLabel: Math.floor(e.averagePosition),
        new: false,
        entries: e.entries,
      };
    });

    return {
      years,
      songs,
      all: allList,
    };
  }
}
