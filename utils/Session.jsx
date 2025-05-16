import Cookies from "js-cookie";
const SESSION_TOKEN = "session_token";
const USER_DATA = "userData";

class SessionManager {
    static session = new SessionManager();

    logout(){
        Cookies.remove(SESSION_TOKEN)
        Cookies.remove(USER_DATA)
    }
}
export default SessionManager;

