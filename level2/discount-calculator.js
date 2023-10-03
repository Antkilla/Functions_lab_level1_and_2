/*
You're creating a discount calculator for a store. 
Given an array of item prices, calculate and print the discounted price for each item. 
Apply a 10% discount to items priced at or above $50 and a 5% discount to all other items.

Print out a message indicating the original price and the new price of the item.

Example input: [70, 25, 50, 10]

Example output:
Original price: $70, Discount price: $63
Original price: $25, Discount price: $23.75
Original price: $50, Discount price: $45
Original price: $10, Discount price: $9.50
 */

const itemPrices = [25, 60, 30, 75, 15];

//add your code below this line, include comments describing your code
function calculateDiscountedPrice(price) {
    if (price >= 50) {
      // Apply a 10% discount to items priced at or above $50
      return price - (price * 0.1);
    } else {
      // Apply a 5% discount to all other items
      return price - (price * 0.05);
    }
  }
  
  // Iterate through the item prices array
  for (let i = 0; i < itemPrices.length; i++) {
    const originalPrice = itemPrices[i];
    const discountedPrice = calculateDiscountedPrice(originalPrice);
  
    // Print out the original and discounted prices
    console.log(`Original price: $${originalPrice.toFixed(2)}, Discount price: $${discountedPrice.toFixed(2)}`);
  }