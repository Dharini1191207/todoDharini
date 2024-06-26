import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export interface MyItem {
  item: string;
  description: string;
}

interface Props {
  setTaskList: React.Dispatch<React.SetStateAction<MyItem[]>>;
  taskList: MyItem[];
}

const AddTask: React.FC<Props> = ({ taskList, setTaskList }) => {
  const [item, setItem] = useState('');
  const [description, setDescription] = useState('Due');

  const addItem = () => {
    if (!item) {
      Alert.alert('No Item!', 'Please enter an item');
    } else {
      setTaskList([
        ...taskList,
        {
          item,
          description: description || 'Due',
        },
      ]);
      setItem('');
      setDescription('Due');
    }
  };

  return (
    <View>
      <Text style={styles.heading}>Add Task to the list</Text>
      <View>
        <TextInput
          style={styles.textInput}
          placeholder='Enter Task'
          value={item}
          onChangeText={text => setItem(text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder='Enter Description'
          value={description}
          onChangeText={text => setDescription(text)}
        />
        <TouchableOpacity style={[styles.addItemButton, { opacity: item ? 1 : 0.5 }]} onPress={addItem} disabled={!item}>
          <Text style={styles.buttonText}>Add Item</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    color: 'blue',
    marginTop: 10,
    textAlign: 'center',
  },
  textInput: {
    padding: 10,
    borderColor: 'orange',
    backgroundColor: '#FCAE1E',
    borderWidth: 2,
    borderRadius: 5,
    marginTop: 10,
    fontSize: 18,
  },
  addItemButton: {
    backgroundColor: 'orange',
    marginTop: 10,
    borderRadius: 5,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 2,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddTask;