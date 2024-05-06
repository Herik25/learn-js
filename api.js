async function fetchData() {
    // Simulate fetching data from a server (e.g., an API call)
    let response = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=5ea5adba');
    let data = await response.json();
    return data;
}

// Now you can call fetchData and use it like a synchronous function!
async function processData() {
    let data = await fetchData();
    // const variable = document.getElementById("mv")
    // variable.innerHTML = JSON.stringify(data)
    console.log(data); // Do something with the fetched data
}

processData();

