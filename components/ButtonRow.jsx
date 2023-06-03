import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";

export default function ButtonRow({ children }) {
	return <View style={styles.row}>{children}</View>;
}

const styles = StyleSheet.create({
	row: {
		flex: 1,
		flexDirection: "row",
	},
});
