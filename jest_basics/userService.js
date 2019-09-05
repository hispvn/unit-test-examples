const userStore = require('./userStore');

const userService = {
    findUserNameByIds :  async (ids) => {
        let userNames = ids.map( async(id) => { 
            const user = await userStore.getUser(id);
            return user.username;
        });

        return Promise.all(userNames);
        
    }
}

module.exports = userService;