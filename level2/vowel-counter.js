/*
You're going to build a vowel counter. 
Given a string, count and print out the number of vowels in the string. 
For the purpose of this assignment, we will not consider y to be a vowel.
 
Example input: "Do you know where the mall is, Ellie?"

Example output:
Number of vowels: 12

*/

//HINT: The string 'aeiou' has been provided for you if you 
//think it might be helpful. You might want to look into what
//the 'includes' method does and how it might be useful here.

const text = "Hello, how are you today? Enjoy your stay!";
const vowels = "aeiou";

//add your code below

// Convert the text to lowercase to make the comparison case-insensitive
const lowercaseText = text.toLowerCase();

// Initialize a counter for vowels
let vowelCount = 0;

// Iterate through each character in the text
for (let char of lowercaseText) {
  // Check if the character is a vowel
  if (vowels.includes(char)) {
    vowelCount++;
  }
}

// Print the number of vowels
console.log(`Number of vowels: ${vowelCount}`);