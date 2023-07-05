

const postCardToApi = async () => {
    try {
        const response = await fetch('https://mywebsite.com/endpoint/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstParam: 'yourValue',
                secondParam: 'yourOtherValue',
            }),
        });
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
  }
  
  const getCardsFromApi = async () => {
    try {
          const response = await fetch('https://reactnative.dev/movies.json');
          const json = await response.json();
          return json.movies;
      } catch (error) {
          console.error(error);
      }
  };