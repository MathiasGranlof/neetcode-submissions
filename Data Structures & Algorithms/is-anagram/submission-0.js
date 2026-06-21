class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if (s.length !== t.length) {
            return false;
        }
        
        let smap = new Map()
        let tmap = new Map()

        for (let i = 0; i < s.length; i++) {
            smap.set(s[i], (smap.get(s[i]) || 0) +1)
            tmap.set(t[i], (tmap.get(t[i]) || 0) +1)
        }

        for (const [char, count] of smap){
            if (count !== tmap.get(char)){
                return false;
            }
            
        }
        return true;
        

    }
}
