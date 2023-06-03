import React from "react";
import NumberButton from "./NumberButton";
import ButtonRow from "./ButtonRow";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import OperatorButton from "./OperatorButton";
import ActionButton from "./ActionButton";

export default function Buttons({
	handleNumberPress,
	handleOperatorPress,
	handleDeleteAll,
	handleDelete,
}) {
	return (
		<View style={styles.buttonsContainer}>
			<ButtonRow>
				<NumberButton number={1} onPress={handleNumberPress} />
				<NumberButton number={2} onPress={handleNumberPress} />
				<NumberButton number={3} onPress={handleNumberPress} />
			</ButtonRow>
			<ButtonRow>
				<NumberButton number={4} onPress={handleNumberPress} />
				<NumberButton number={5} onPress={handleNumberPress} />
				<NumberButton number={6} onPress={handleNumberPress} />
			</ButtonRow>
			<ButtonRow>
				<NumberButton number={7} onPress={handleNumberPress} />
				<NumberButton number={8} onPress={handleNumberPress} />
				<NumberButton number={9} onPress={handleNumberPress} />
				<NumberButton number={"."} onPress={handleNumberPress} />
			</ButtonRow>
			<ButtonRow>
				<NumberButton number={0} onPress={handleNumberPress} />
				<OperatorButton operator="+" onPress={handleOperatorPress} />
				<OperatorButton operator="-" onPress={handleOperatorPress} />
			</ButtonRow>
			<ButtonRow>
				<OperatorButton operator="*" onPress={handleOperatorPress} />
				<OperatorButton operator="/" onPress={handleOperatorPress} />
				<OperatorButton operator="=" onPress={handleOperatorPress} />
			</ButtonRow>
			<ButtonRow>
				<ActionButton label="Delete All" onPress={handleDeleteAll} />
				<ActionButton label="Delete" onPress={handleDelete} />
			</ButtonRow>
		</View>
	);
}

const styles = StyleSheet.create({
	buttonsContainer: {
		flex: 2,
		backgroundColor: "#fff",
	},
});
