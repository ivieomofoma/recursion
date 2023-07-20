function isPalindrome(word) {
  // Base case: an empty word or a word containing a single character is a palindrome
  if (word.length <= 1) {
    return true;
  }

  // Compare the characters at the ends of the word
  if (word[0] === word[word.length - 1]) {
    // Recursively test the rest of the word (excluding the first and last characters)
    return isPalindrome(word.slice(1, word.length - 1));
  } else {
    // If the characters at the ends are different, it's not a palindrome
    return false;
  }
}

// Test the function
console.log(isPalindrome("gag")); // Output: true
console.log(isPalindrome("kayak")); // Output: true
console.log(isPalindrome("php")); // Output: true
console.log(isPalindrome("radar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
