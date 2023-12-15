export default class SpotifyAuth {

  constructor() {
    this.authorizeURL = "https://www.jossafossa.nl/projects/spotidash-api/authorize.php";
    this.getTokenURL = "https://www.jossafossa.nl/projects/spotidash-api/getToken.php";
    this.refreshURL = "https://www.jossafossa.nl/projects/spotidash-api/refresh.php";
    this.events = {};
  }

  async handleLogin() {

    // get token from local storage
    let token = localStorage.getItem('token');
    let refreshToken = localStorage.getItem('refreshToken');
    let tokenExpire = localStorage.getItem('tokenExpire');
    let tokenValid = this.checkTokenValidity(tokenExpire);

    if (!(token && refreshToken && tokenExpire) || !tokenValid) {
      // no token in localstorage so check the url for tokens

      // get token from url
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      token = urlParams.get('token');
      refreshToken = urlParams.get('refresh_token');
      tokenExpire = urlParams.get('expires_in');

      
      // if the token is not in the url first get the token
      if (!token) {
        this.authorize();
        return;
      }

      
      // set tokens
      localStorage.setItem("token", token);
      this.setRefresh(refreshToken, tokenExpire);

    }



    // cleanup url
    let url = new URL(window.location.href);
    url.searchParams.delete('token');
    url.searchParams.delete('expires_in');
    url.searchParams.delete('refresh_token');
    window.history.replaceState(null, null, url);


    this.trigger("login", token);
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

  checkTokenValidity(tokenValid) {
    let now = new Date(Date.now()).getTime();
    return now < parseInt(tokenValid);
  }

  setRefresh(refreshToken, tokenExpire) {
    let expireTime = new Date(Date.now() + tokenExpire * 1000).getTime();

    this.refreshToken = refreshToken;
    this.tokenExpire = expireTime;
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("tokenExpire", expireTime);
    
  }

  async refresh(token) {
    let url = new URL(this.refreshURL);
    url.searchParams.append('refresh_token', token);
    const response = await fetch(url);
    let json = await response.json();
    return json;
  }

  authorize() {
    window.location.assign(this.authorizeURL);
  }
}