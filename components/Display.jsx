import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Display({ value }) {
	return (
		<View style={styles.displayContainer}>
			<Text style={styles.displayText}>{value}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	displayContainer: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "flex-end",
		paddingHorizontal: 20,
		paddingBottom: 20,
	},
	displayText: {
		fontSize: 48,
		fontWeight: "bold",
	},
});
