import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';

interface Props {
  item: string;
  description: string;
  onToggleStatus: () => void;
  onDelete: () => void;
}

const TaskItem: React.FC<Props> = ({ item, description, onToggleStatus, onDelete }) => {
  const descriptionStyle = description === 'Due' ? styles.due : styles.done;
  const itemStyle = description === 'Due' ? styles.dueItem : styles.doneItem;

  return (
    <View style={styles.item}>
      <View style={styles.itemInfo}>
        <Text style={[styles.itemName, itemStyle]}>{item}</Text>
        <Text style={[styles.quantityText, descriptionStyle]}>{description}</Text>
      </View>
      <Switch value={description === 'Done'} onValueChange={onToggleStatus} />
      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    width: '100%',
    backgroundColor: '#e5e5e5',
  },
  itemInfo: {
    flex: 1,
    flexDirection: 'column',
  },
  itemName: {
    fontSize: 20,
    marginRight: 20,
    fontWeight: 'bold',
  },
  dueItem: {
    color: 'red',
  },
  doneItem: {
    color: 'green',
  },
  quantityText: {
    padding: 5,
    width: 50,
    textAlign: 'center',
    borderWidth: 2,
    borderRadius: 10,
  },
  due: {
    borderColor: 'red',
    backgroundColor: 'lightcoral',
    color: 'white',
  },
  done: {
    borderColor: 'green',
    backgroundColor: 'lightgreen',
    color: 'green',
  },
  deleteText: {
    color: 'white',
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
    marginLeft: 10,
    backgroundColor: 'red',
  },
});

export default TaskItem;
