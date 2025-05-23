// import Cookies from "js-cookie";
// const SESSION_TOKEN = "session_token";
// const USER_DATA = "userData";

// class SessionManager {
//     static session = new SessionManager();

//     logout(){
//         Cookies.remove(SESSION_TOKEN)
//         Cookies.remove(USER_DATA)
//     }
// }
// export default SessionManager;

import Cookies from "js-cookie";

const SESSION_TOKEN = "session_token";
const USER_DATA = "userData";

class SessionManager {
  static session = new SessionManager();

  setToken(token) {
    Cookies.set(SESSION_TOKEN, token, { expires: 1 });  // expires in 1 day
  }

  getToken() {
    return Cookies.get(SESSION_TOKEN);
  }

  setUserData(data) {
    Cookies.set(USER_DATA, JSON.stringify(data), { expires: 1 });
  }

  getUserData() {
    const data = Cookies.get(USER_DATA);
    return data ? JSON.parse(data) : null;
  }

  logout() {
    Cookies.remove(SESSION_TOKEN);
    Cookies.remove(USER_DATA);
  }
}

export default SessionManager;
