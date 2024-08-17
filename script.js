const string = "A man, a plan, a canal: Panama"

const isValidPalindrome = (s) => {
    // s = s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase()
    // let isValid = true
    // const strArr = s.split('')
    // strArr.forEach((e,i) => {
    //     console.log(e,strArr[strArr.length-1-i])
    //     if(e !== strArr[strArr.length-1-i]) {
    //         isValid = false
    //     } 
    // })
    // return isValid
    s = s.replace(/[^a-zA-Z0-9]/g,'')
    s = s.toLowerCase()
    for (let [i,j]=[0,s.length-1]; i<j;) {
        if (s[i]!=s[j]) {
            return false
        }
        i++
        j--
    }
    return true
}

console.log(isValidPalindrome(string))
