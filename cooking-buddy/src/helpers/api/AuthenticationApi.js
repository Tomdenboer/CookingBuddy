import axios from 'axios';

export default {
    registerNewUser: async (username, password, email) => {
        var results = 0;
        const user = JSON.stringify({
            "username": username,
            "email": email,
            "password": password,
            "role": [
            "user"
            ]
        });
    
        const request = {
            method: 'post',
            url: 'https://frontend-educational-backend.herokuapp.com/api/auth/signup',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : user
        };

        try {
            var response = await axios(request);
            results = response.status;
        } catch(e) {
            results = e.response.status;
        }
        return results;
    },

    logIn: async (username, password) => {
        let results = [];
        const params = JSON.stringify({
            "username": username,
            "password": password
        });
          
        const request = {
            method: 'post',
            url: 'https://frontend-educational-backend.herokuapp.com/api/auth/signin',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : params
        };

        try {
            var response = await axios(request);
            results = {
                "status": response.status, "data": response.data};
        } catch(e) {
            results = {"status": e.response.status, "data": {}};
        }
        return results;
    }
}