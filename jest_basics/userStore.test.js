const userStore = require('./userStore');

describe('Test UserStore',()=>{
    it('Should get user with id = 1', async() =>{
        const user = await userStore.getUser(1);
        expect(user.name).toEqual('Leanne Graham');
    });

    it('Should return error', async() => {
        const user = await userStore.getUser('ABCD');
        expect(user).toEqual('Could not find user');
    });
});

