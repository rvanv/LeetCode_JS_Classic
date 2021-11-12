// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

function maxSubArray(nums) {
    //let dp = [ nums[ 0 ] ]; O(n)
    let max = nums[ 0 ];

    for (let i = 1; i < nums.length; i++) {
        const num = nums[ i ];
        nums[ i ] = Math.max(num, num + nums[ i - 1 ]);
        max = Math.max(max, nums[ i ]);
    }
    return max;
}

module.exports = maxSubArray;
