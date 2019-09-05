const axios = require('axios');

const api = {
    fetchUser: () => 
    {
        console.log("fetching from api... ");
       return  axios.get('https://jsonplaceholder.typicode.com/users/1')
            .then(res => res.data)
            .catch(err=>'error')
    },

    transformUser : (user) => {
        return user.username + " - " + user.name;
    },

    fetchAndTransformUser: () => {
        console.log("fetching from api... ");
        return  this.fetchUser()
             .then(data => this.transformUser(data))
             .catch(err=>'error')
    }
}
module.exports = api;