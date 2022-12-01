// Given a word, return true if that word contains only unique characters. Return false otherwise.

// For example:

// hasUniqueChars("Monday")
// // returns true
// hasUniqueChars("Moonday")
// // returns false
// Uppercase and lowercase letters should be considered separately:

// hasUniqueChars("Bob")
// // returns true

// Write your code below

function hasUniqueChars(word) {

    let wordSet = new Set()
    let wordArray = []

    for (index in word) {
        wordSet.add(word[index])
        wordArray.push(word[index]) 
    }
    
    if (wordSet.size === wordArray.length) {
        return true
    } else {
        return false
    }

}

// Tests

console.log(hasUniqueChars("Monday"))
console.log(hasUniqueChars("Moonday"))
console.log(hasUniqueChars("Bob"))


