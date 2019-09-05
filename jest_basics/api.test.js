// jest.mock('./api');

const api = require('./api');



describe("Test fetchUser ", () => {
    
    it('should return user', async () => {
        const data = await api.fetchUser();
        expect(data.name).toEqual('Leanne Graham');
    });
});