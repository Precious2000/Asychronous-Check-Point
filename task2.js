// Task 02: Awaiting a Call: Create an async function awaitCall that simulates fetching data from an API. Use await to wait for the API response and then log the data.

async function fetchData() {
    // Simulate fetching data from an API
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Fetched data from API");
        }, 2000);
    });
}

async function awaitCall() {
    const data = await fetchData();
    console.log(data);
}

// Example usage
awaitCall();