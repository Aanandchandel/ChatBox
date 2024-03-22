async function getData(url, data) {
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Re-throw the error to be handled by the caller
    }
}

async function postData(url, data) {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Re-throw the error to be handled by the caller
    }
}



const apiMethods = { getData,postData };

export default apiMethods;
