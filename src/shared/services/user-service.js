import axios from 'axios';

 class UserService {

  getUser() {
    // Axios call to get data from API
   const userPromise = axios.get('http://localhost:3000/api/bills')
    .then(res => res.data)
    .catch(err => console.log("Error:", err.res))
    return userPromise;
    
 
  }

}

export default UserService