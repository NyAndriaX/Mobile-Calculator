import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function OperatorButton({ operator, onPress }) {
	return (
		<TouchableOpacity style={styles.button} onPress={() => onPress(operator)}>
			<Text style={styles.buttonText}>{operator}</Text>
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
