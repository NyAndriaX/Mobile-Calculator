import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Display from "../components/Display";
import Buttons from "../components/Buttons";

// Composant principal de la calculatrice
export default function CalculatorScreen() {
	const [displayValue, setDisplayValue] = useState("0");
	const [result, setResult] = useState(0);
	const [operator, setOperator] = useState(null);

	const handleNumberPress = (number) => {
		setDisplayValue((prevValue) =>
			prevValue === "0" ? String(number) : prevValue + number
		);
	};

	const handleOperatorPress = (operator) => {
		if (operator === "=") {
			calculateResult();
		} else {
			setOperator(operator);
			setResult(parseFloat(displayValue));
			setDisplayValue("0");
		}
	};

	const calculateResult = () => {
		const currentValue = parseFloat(displayValue);
		let newResult = result;

		switch (operator) {
			case "+":
				newResult += currentValue;
				break;
			case "-":
				newResult -= currentValue;
				break;
			case "*":
				newResult *= currentValue;
				break;
			case "/":
				newResult /= currentValue;
				break;
			default:
				return;
		}

		setDisplayValue(String(newResult));
		setResult(newResult);
		setOperator(null);
	};

	const handleDeleteAll = () => {
		setDisplayValue("0");
		setResult(0);
		setOperator(null);
	};

	const handleDelete = () => {
		if (displayValue.length === 1) {
			setDisplayValue("0");
		} else {
			setDisplayValue((prevValue) => prevValue.slice(0, -1));
		}
	};

	return (
		<View style={styles.container}>
			<Display value={displayValue} />
			<Buttons
				handleNumberPress={handleNumberPress}
				handleOperatorPress={handleOperatorPress}
				handleDeleteAll={handleDeleteAll}
				handleDelete={handleDelete}
			/>
		</View>
	);
}

// Composant d'affichage

// Composant des boutons

// Composant d'une rangée de boutons

// Composant d'un bouton numérique

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
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
	buttonsContainer: {
		flex: 2,
		backgroundColor: "#fff",
	},
	row: {
		flex: 1,
		flexDirection: "row",
	},
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
