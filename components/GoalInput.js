import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (text) => {
    setEnteredGoal(text);
  };

  const addButtonHandler = () => {
    props.addHandler(enteredGoal);
    setEnteredGoal("");
  };

  const cancelButtonHandler = () => {
    props.cancelHandler();
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.isActive} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={cancelButtonHandler} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addButtonHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    margin: 10
  },
  buttonContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  button: {
    width: "32%"
  }
});

export default GoalInput;
