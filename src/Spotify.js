import SpotifyWebApi from "spotify-web-api-js";
import SpotifyAuth from "./auth-api.js";

export default class API {
  constructor() {
    this.spotify = new SpotifyWebApi();
    this.auth = new SpotifyAuth();
    this.events = {};
    this.timeout = null;
    this.playing = false;
    this.currentSong = null;
    this.currentPlaylist = null;
    this.currentAlbum = null;
    this.first = true;
    this.track = "";

    // handle login
    this.auth.on("login", (token) => {
      this.spotify.setAccessToken(token);
      this.onLoad();
    });
    this.auth.on("refresh", (token) => this.spotify.setAccessToken(token));
    this.auth.handleLogin();

    this.timeout = setInterval((e) => this.update(), 1000);
    this.update();
  }

  onLoad() {
    // test
    this.spotify.getMyCurrentPlaybackState((err, data) => {
      if (err) {
        console.error(err);
      } else {
        // console.log('Artist albums', data);
      }
    });
  }

  async getPlaylistTracks(id) {
    let offset = 0;
    let foundAll = false;
    let items = [];
    let limit = 100;
    let amount = 0;

    // timeout
    setTimeout((e) => {
      foundAll = true;
    }, 10000);

    while (!foundAll) {
      let response = await this.spotify.getPlaylistTracks(id, {
        offset,
        limit,
      });
      let tracks = response.items.map((e) => (e = e.track));
      items.push(...tracks);
      if (!response.next) {
        foundAll = true;
        amount = response.total;
        break;
      }
      offset += limit;
    }

    return items;
  }

  async update() {
    let states = await this.spotify.getMyCurrentPlaybackState();

    // start stop event
    if (typeof states === "object" && "context" in states) {
      // play event
      if (!this.playing || this.first) this.trigger("load", states);
      this.playing = true;

      // trigger update loop
      this.trigger("update", states);

      // playlist change
      if ("context" in states && states?.context) {
        let context = states.context;
        // console.log(context.type, ' == "playlist" &&  ', context.uri, ' !== ', this.playlist);
        if (context?.type === "playlist" && context?.uri !== this.playlist) {
          console.log("change");
          this.playlist = context.uri;
          this.trigger("playlistChange", states);
        }
      }

      // album change
      if (
        states.item &&
        states.item.album &&
        states.item.album.id !== this.album
      ) {
        this.album = states.item.album.id;
        this.trigger("albumChange", states);
      }

      // song change
      if (
        "item" in states &&
        "id" in states.item &&
        states.item.id !== this.track
      ) {
        this.track = states.item.id;
        this.trigger("trackChange", states);
      }
    } else {
      // stop event
      if (this.playing || this.first) this.trigger("unload", states);
      this.playing = false;
    }
    this.first = false;

    // if (states !== "") {
    //   if (!this.playing) this.trigger("play");
    //   this.playing = true;

    //   this.trigger("update", states);

    // } else {
    //   if (this.playing) {
    //     this.playing = false
    //     this.trigger("stop");
    //   }
    // }
  }

  trigger(event, data) {
    if (event in this.events) {
      for (let callback of this.events[event]) {
        callback(data);
      }
    }
  }

  on(event, callback) {
    if (!(event in this.events)) this.events[event] = [];
    this.events[event].push(callback);
  }
}
