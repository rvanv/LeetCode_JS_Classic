// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.

function rob(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[ 0 ];
    if (nums.length === 2) return Math.max(nums[ 0 ], nums[ 1 ]);

    let maxLootAtNth = [ nums[ 0 ], Math.max(nums[ 0 ], nums[ 1 ]) ];

    for (let i = 2; i < nums.length; i++) {
        maxLootAtNth.push(
            Math.max(nums[ i ] + maxLootAtNth[ i - 2 ], maxLootAtNth[ i - 1 ])
        );
    }

    return maxLootAtNth.pop();
}

module.exports = rob;
