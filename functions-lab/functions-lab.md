# Lab Assignment: Functions in JavaScript

## Scenario
In this lab, you will be simulating a real-world scenario where you need to manage a list of books in a library. 
The library has a collection of books, and you need to write functions to add new books, remove existing ones, 
find books by author or title, display the collection of books, etc.

## Learning Objectives
- Understand the concept of functions in JavaScript
- Understad arrays and array methods
- Understand strings and string methods
- Understand conditional statements

### Task 1: Define a Book
* Create an object for a book with properties for `title`, `author`, `bookId`, and `availability` (true or false).

### Task 2: Create a Collection of Books
* Create an array of books which will act as the library's collection.
* Populate the array with 3-5 book objects as defined in Task 1.

### Task 3: Add a Book to the Collection
* Write a function `addBook` which takes a book object as a parameter and adds it to the collection of books.

### Task 4: Remove a Book from the Collection
* Write a function `removeBook` which takes a Book ID number as a parameter and removes the corresponding book from the collection.

### Task 5: Find a Book
* Write a function `findBook` which takes a string as a parameter and searches the collection for a book with a matching title or author. The function should return an array of all books that match the search query.

### Task 6: Display the Collection
* Write a function `displayBooks` which displays the entire collection of books.

### Task 7: Test Your Functions
* Use the functions you have written to add, remove, find, and display books in the collection.

### Tips and Best Practices
- Use modern JavaScript conventions, such as `let` and `const` for variable declarations.
- Utilize array methods like `filter` and `forEach` instead of traditional `for` loops where possible.
- Remember to test your functions with various inputs to ensure they work as expected.

### Submission
Submit your code in a single JavaScript file. Be sure to comment your code and include a brief explanation of each function.
Also, provide examples of how to use each function.

---

## Extended Lab Assignment: Advanced Functions in JavaScript

### Task 8: Book Availability
* Write a function called `toggleAvailability` which takes a Book ID number as an argument and changes the `availability` status 
   of the corresponding book in the collection.

### Task 9: Multiple Copies
* Modify your book object structure to include a `copies` property that indicates the number of available copies.
* Update your `addBook` function to increment the `copies` property if the book already exists in the collection, 
   instead of adding a duplicate entry.

### Task 10: Advanced Search
* Extend the `findBook` function to also search by the number of copies available, so it can find all books that have at least a certain number of copies.
* Also, allow it to accept an array of queries for more complex search scenarios.

### Task 11: Book Ratings
* Add a property called `rating` to your book object. It should hold a number between 0 and 5.
* Write a function called `setRating` that takes a Book ID and a rating as arguments and sets the rating of the corresponding book.

### Task 12: Summary Function
Write a function called `librarySummary` that provides a summary of the library. 
   It should display the total number of books, the total number of available books, and the average rating of all books.

### Submission for Extended Tasks
Just like before, submit your extended code in a single JavaScript file. Include comments and brief explanations for each new function 
and example usage.

By completing these additional tasks, you'll gain deeper insights into JavaScript's capabilities and best practices. Happy coding!