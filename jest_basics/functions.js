
const functions = {
    add : ( num1, num2 ) => num1 + num2,
    isNull : () => null,
    checkValue: (x) => x,
    createUser: () => {
        const user = { firstName : 'Tom'};
        user['lastName'] = 'Hank';
        return user;
    },
    multiply : (num1, num2 ) => num1 * num2,
    minus : ( num1, num2 ) => num1 - num2
}

module.exports = functions;