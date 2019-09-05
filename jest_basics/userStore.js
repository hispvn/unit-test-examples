const axios = require('axios');

const userStore = {
    getUser: (id) => 
    {
        console.log("fetching from api... ");
        return  axios.get('https://jsonplaceholder.typicode.com/users/' + id)
            .then(res => res.data)
            .catch(err=>'Could not find user')
    },
}
module.exports = userStore;