import axios from "axios";

class HttpService {
    private static URL = 'http://localhost:3000';
    private static TEAMS_PATH = '/teams';
    private static STAFF_PATH = '/staff';

    static async fetchTeamsData() {
        return await axios.get(`${this.URL}${this.TEAMS_PATH}`);
    }

    static async fetchStaffData() {
        return await axios.get(`${this.URL}${this.STAFF_PATH}`);
    }
}

export default HttpService;