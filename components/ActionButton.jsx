import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ActionButton({ label, onPress }) {
	return (
		<TouchableOpacity style={styles.button} onPress={onPress}>
			<Text style={styles.buttonText}>{label}</Text>
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
