const userStore = {
    getUser: (id) => 
    {
        console.log(id);
        return new Promise((res,rej)=> res({username:'A'+id}));
    },
}
module.exports = userStore;