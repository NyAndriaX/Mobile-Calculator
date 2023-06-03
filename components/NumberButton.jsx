import React from "react";
import { Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";

export default function NumberButton({ number, onPress }) {
	return (
		<TouchableOpacity style={styles.button} onPress={() => onPress(number)}>
			<Text style={styles.buttonText}>{number}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		borderColor: "#ccc",
		borderWidth: 1,
	},
	buttonText: {
		fontSize: 24,
		fontWeight: "bold",
	},
});
