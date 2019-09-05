jest.mock('./userStore');
const userService = require('./userService');

const userStore = require('./userStore');

describe('Test User Service',() => {
    
    beforeAll(() => {
       
    });

    afterAll( () => {
        
    })

    beforeEach (() => {
        
    })

    afterEach (() => {
        
    })

    it('should find user by ids',  async() =>
    {
        const userNames = await userService.findUserNameByIds([1,2,3]);
        expect(userNames.length).toEqual(3);
        expect(userNames[0]).toEqual('A1');
    });

    it('should find user by ids using mock store', async () => {
        const spy = jest.spyOn(userStore, 'getUser').mockImplementation((id) => new Promise((res,rej)=> res({username:'A'+id})));
        const userNames = await userService.findUserNameByIds([1,2,3]);
        expect(spy).toHaveBeenCalledTimes(3);
        expect(userNames.length).toEqual(3);
        expect(userNames[1]).toEqual('A2'); 
    });
});