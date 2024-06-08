// Task 01: Iterating with Async/Await: Write an async function iterateWithAsyncAwait that takes an array of values and logs each value with a delay of 1 second between logs

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Async function to iterate through the array with a delay
async function iterateWithAsyncAwait(arr) {
  for (const value of arr) {
    console.log(value); // Log the current value
    await delay(1000); // Wait for 1 second
  }
}

// Example usage
const values = [10, 20, 30, 40, 50];
iterateWithAsyncAwait(values);