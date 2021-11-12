const containsDuplicate = nums => {
    const vistedNums = {}; // {7: true, 2: true} 

    for (let i = 0; i < nums.length; i++) {
        const num = nums[ i ];
        if (vistedNums[num]) {
            return true;
        } else {
            vistedNums[ num ] = true;
        }
    }
    return false;
};

module.exports = containsDuplicate;
