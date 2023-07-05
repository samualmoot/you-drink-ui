import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';




// POST request to core/api/v1/card/ CREATE card
// GET request all cards
// POST request to core/api/v1/deck/ CREATE deck


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>You drink</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EC9D00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    margin: 16,
    color: 'white',
  },
  iconStyle: {
    fontSize: 40,
    marginTop: 30,
    color: 'black',
  }
});

const postCardToApi = () => {
  return fetch('https://mywebsite.com/endpoint/', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstParam: 'yourValue',
    secondParam: 'yourOtherValue',
  }),
})
.then(response => response.json())
.then(json => {
  return json
})
.catch(
  error => {
    console.error(error)
  }
)
}

const getCardsFromApi = () => {
  return fetch('https://reactnative.dev/movies.json')
    .then(response => response.json())
    .then(json => {
      return json.movies;
    })
    .catch(error => {
      console.error(error);
    });
};