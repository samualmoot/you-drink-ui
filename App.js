import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React  from "react";


// POST request to core/api/v1/card/ CREATE card
// GET request all cards
// POST request to core/api/v1/deck/ CREATE deck

// Create a form for POST requests via UI


export default function App() {
	let card_message = "Test";

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{card_message}</Text>
			<Text style={styles.title}>{card_message}</Text>
			<Text style={styles.title}>{card_message}</Text>
			<Text style={styles.title}>{card_message}</Text>
			<Text style={styles.title}>{card_message}</Text>
			<Text style={styles.title}>{card_message}</Text>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#EC9D00",
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 50,
		fontWeight: "bold",
		margin: 16,
		color: "white",
	},
	iconStyle: {
		fontSize: 40,
		marginTop: 30,
		color: "black",
	}
});