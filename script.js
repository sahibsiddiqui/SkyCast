const url = 'https://meteostat.p.rapidapi.com/point/monthly?lat=19.0760&lon=72.8777&alt=43&start=2020-01-01&end=2020-12-31';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'f89caeb111msh40b3388bad033d2p14ae83jsn9ddca00a51a9',
		'x-rapidapi-host': 'meteostat.p.rapidapi.com'
	}
};

async function getWeatherData() {
	try {
		// Fetch the response
		const response = await fetch(url, options);
		
		// Check if the response is OK (status 200)
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		// Parse the response as JSON
		const result = await response.json();
		
		// Check if result is empty or doesn't contain expected data
		if (!result || Object.keys(result).length === 0) {
			console.error("No data returned from the API.");
			return;
		}

		// Add city name to the result
		const city = "Mumbai";
		result.city = city;

		console.log(result);  // This will log the weather data with the city name
	} catch (error) {
		console.error("Error fetching weather data:", error);
	}
}

getWeatherData();
