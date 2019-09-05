const functions = require('./functions');
// BDD : Behavior Driven Development
describe('Test functions', () => {

    test('Add 2 + 2 to equal 4', () => {
        expect(functions.add(2,2)).toBe(4);
    });

    test(' Add 2 + 2 to NOT equal 5', () => {
        expect(functions.add(2,2)).not.toBe(5);
    });

    test('Should be null', () => {
        expect(functions.isNull(2,2)).toBeNull();
    });

    test('Should be falsy', () => {
        expect(functions.checkValue(null)).toBeFalsy();
    });

    test('User should be Tom Hank object',()=>{
        expect(functions.createUser()).toEqual({
            firstName:'Tom',
            lastName:'Hank'
        });
    });

    test('There is no G in Vietnam', () => {
        expect('Vietnam').not.toMatch(/G/);
    });

    test('Admin should be in usernames', () => {
        usernames = ['john','laura', 'admin'];
        expect(usernames).toContain('admin');
    });

    test('should multiply 2 * 4 equal 8', () => {
       expect(functions.multiply(2,4)).toBe(8); 
    });

    test('should minus 4 -2 equal 2', () => {
       expect(functions.minus(4,2)).toBe(2) ;
    });

    // TDD test driven development




});