class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let prefix = strs[0];
        let temp;
        for (let i = 1; i < strs.length; i++){
            temp=strs[i];
            while (!prefix.startsWith(temp)){
                temp = temp.slice(0, -1)
            }
            prefix = temp;
        }
        return prefix;
    }
}
