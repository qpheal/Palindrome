function palindrome(string){
    if (string === string.split("").reverse().join(""))
    {
        return true
    } else return false
}

const text = palindrome("haruah")
console.log(text) // false