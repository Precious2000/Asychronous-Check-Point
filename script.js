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