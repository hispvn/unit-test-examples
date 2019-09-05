const api = {
    fetchUser: () => { 
        // console.log("fetching from mock api... ");
        return  Promise.resolve(
        {
            id: 1,
            name: "Leanne Graham",
            username: "Bret"
        }
    ) },

    fetchAndTransformUser: () => {
        // console.log("fetching from mock api... ");
        return  Promise.resolve( { name : "Bret - Leanne Graham" })
    }
}
module.exports = api;