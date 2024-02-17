function palindrome(string){
    if (string === string.split("").reverse().join(""))
    {
        return true
    } 
}

const text = palindrome("haruah")
console.log(text)