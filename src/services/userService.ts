import { host } from "../http";
// import queryString from 'query-string';
import { UserData } from "../pages/Users";


// const parsed = queryString.parse(location.search);

class UserDataService {
  getUsers(userName: string = '') {
    return host.get<UserData[]>(
      "/", userName.length > 0 ? 
        {params: {term: userName}} :  
          {params: null}
    );
  }

}

export default new UserDataService();