async function fetchDataWithError() {
    // Simulate an API call that may fail
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve("Fetched data from API");
            } else {
                reject("API call failed");
            }
        }, 2000);
    });
}

async function awaitCallWithErrorHandling() {
    try {
        const data = await fetchDataWithError();
        console.log(data);
    } catch (error) {
        console.error("An error occurred