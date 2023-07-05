const postCardToApi = async (data: object) => {
	// data = {message: "", drink_amount: "", deck: "", type: ""}

	try {
		const response = await fetch("https://mywebsite.com/endpoint/", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		const json = await response.json();
		return json;
	} catch (error) {
		console.error(error);
	}
};
  
const getCardFromApi = async () => {
	try {
		const response = await fetch("https://reactnative.dev/movies.json");
		const json = await response.json();
		return json;
	} catch (error) {
		console.error(error);
	}
};

export default { postCardToApi, getCardFromApi };