// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

const productExceptSelf = nums => {
    const output = nums.map(n => 1);
    let product = 1;

    //multiplyLeft
    for (let i = 0; i < nums.length; i++) {
        output[ i ] = output[i] * product;
        product = product * nums[ i ];
    };

    product = 1;
    //multiplyRight
    for (let j = nums.length - 1; j >= 0; j--) {

        output[ j ] = output[j] * product;
        product = product * nums[ j ];
    };

    return output;
};

module.exports = productExceptSelf;
