function isPalindrome(word) {
  let removed = /[\W_]/g
  let lowerCaseString = word.toLowerCase().replace(removed, '')
  let stringReversed = lowerCaseString.split('').reverse().join('')
  if (stringReversed === lowerCaseString) {
    return true
  } else {
    return false
  }
}

/* 
1. make sure everything in the string is a word.
2. convert everything in the string to lowercase.
3. split, reverse the string then put it back together
4. compare the new reversed string to the one that was not reversed.
*/

/*
Removed replaces any non-word character and underscores with an empty string. for example $50.44 would be 5044($ and .)
.toLowerCase converts everything in the string to lowercase.
.replace(array, '') removes all the spaces in the array provided.
.split('') converts the one string of words into individual strings of letters.
.reverse() reverses the order of the elements in the string.
.join() joins the elements into one string.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
