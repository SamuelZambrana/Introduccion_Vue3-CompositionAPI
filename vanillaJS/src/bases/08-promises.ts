
new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve("Operation was successful");
    } else {
        reject("Operation failed");
    }
}).then(result => {
    console.log(result);
}).catch(error => {
    console.error(error);
}).finally(() => {
    console.log("Promise has been settled (either resolved or rejected)");
});

const fetchData = (url: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url === "https://api.example.com/data") {
                resolve("Fetched data successfully");
            } else {
                reject("Invalid URL");
            }
        }, 2000);
    }   );
};

fetchData("https://api.example.com/data")
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });

export default {
    fetchData
}; // To ensure this file is treated as a module