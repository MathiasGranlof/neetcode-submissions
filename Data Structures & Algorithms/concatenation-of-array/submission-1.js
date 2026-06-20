class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let ans = nums;
        nums.forEach(n => ans.push(n))
        return ans;
    }
}
