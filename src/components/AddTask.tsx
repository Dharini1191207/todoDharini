import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

interface Props {
  addItem: (item: string, description: string) => Promise<void>;
}

const AddTask: React.FC<Props> = ({ addItem }) => {
  const [item, setItem] = useState("");
  const [description, setDescription] = useState("Due");

  const handleAddItem = async () => {
    if (!item) {
      Alert.alert("No Item!", "Please enter an item");
      return;
    }

    await addItem(item, description);
    setItem("");
    setDescription("Due");
  };

  return (
    <View>
      <Text style={styles.heading}>Add Task to the list</Text>
      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Task"
          value={item}
          onChangeText={(text) => setItem(text)}
        />
        <TouchableOpacity
          style={[styles.addItemButton, { opacity: item ? 1 : 0.5 }]}
          onPress={handleAddItem}
          disabled={!item}
        >
          <Text style={styles.buttonText}>Add Item</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    color: "blue",
    marginTop: 10,
    textAlign: "center",
  },
  textInput: {
    padding: 10,
    borderColor: "orange",
    backgroundColor: "#FCAE1E",
    borderWidth: 2,
    borderRadius: 5,
    marginTop: 10,
    fontSize: 18,
  },
  addItemButton: {
    backgroundColor: "orange",
    marginTop: 10,
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 2,
    marginBottom: 40,
  },
  buttonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default AddTask;
