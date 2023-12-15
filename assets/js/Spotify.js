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
}
class Spotify {
  constructor() {
    this.controller = new AbortController();
  }

  async get(url, body = false, headers = false, controller = false) {
    let settings = {
      signal: controller.signal,
    };
    if (body) settings.body = JSON.stringify(body);
    if (headers) settings.headers = headers;
    let result = await fetch(url, settings);
    let json = await result.json();
    return json;
  }

  async getSong(track, artist) {
    return await this.get(
      `https://api.spotify.com/v1/search?q=track:${track}, artist:${artist}&type=track`
    );
  }
}
