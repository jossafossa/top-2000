export default class Sanitizer {
  downSizeImage(url) {
    let newSize = "w_100,h_100";
    let items = url.split("/");
    items = items.map((e) => {
      if (e.startsWith("w_")) {
        return newSize;
      }
      return e;
    });
    let newUrl = items.join("/");
    return newUrl;
  }

  sanitizeItem(year, item) {
    let { position, track } = item;
    let previous = position.previous > 0 ? position.previous : 2000;
    let change = previous - position.current;
    let changeLabel = change > 0 ? `+${change}` : change;
    changeLabel = change === 0 ? `—` : changeLabel;
    let isNew = position.previous === 0;

    return {
      id: item.id,
      time: item.broadcastUnixTime,
      position: position.current,
      previousPosition: previous,
      new: isNew,
      year,
      change: change,
      changeLabel: changeLabel,
      artist: track.artist,
      title: track.title,
      image: this.downSizeImage(
        track.coverUrl ?? "https://www.nporadio2.nl/images/unknown_track_m.webp"
      ),
    };
  }

  sanitizeList(year, list) {
    return list.map((e) => this.sanitizeItem(year, e));
  }

  sanitize(lists) {
    return Object.fromEntries(
      Object.entries(lists).map(([key, value]) => {
        key = parseInt(key);
        return [key, this.sanitizeList(key, value)];
      })
    );
  }

  /**
   * Takes the list and compares the current position of each enty with the previous position.
   * @param {*} list
   * @param {*} olderList
   */
  compare(list = [], olderList = []) {
    let newList = list.map((item) => {
      let olderItem = olderList.find((e) => e.id === item.id);
      if (olderItem) {
        item.previousPosition = olderItem.position;
        item.change = olderItem.position - item.position;
        item.changeLabel = item.change > 0 ? `+${item.change}` : item.change;
        item.changeLabel = item.change === 0 ? `—` : item.changeLabel;
        item.new = olderItem.position === 0;
      }
      return item;
    });
    return newList;
  }
}
