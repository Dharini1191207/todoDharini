import { FlatList, StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import AddTask, { MyItem } from './src/components/AddTask';
import TaskItem from './src/components/TaskItem';
import React, { useState } from 'react';

const App = () => {
  const [taskList, setTaskList] = useState<MyItem[]>([]);

  const toggleTaskStatus = (index: number) => {
    const newTaskList = taskList.map((task, idx) => {
      if (idx === index) {
        return { ...task, description: task.description === 'Due' ? 'Done' : 'Due' };
      }
      return task;
    });
    setTaskList(newTaskList);
  };

  const deleteTask = (index: number) => {
    const newTaskList = taskList.filter((_, idx) => idx !== index);
    setTaskList(newTaskList);
  };

  return (
    <View style={styles.container}>
      <Header title='To Do List' />
      <AddTask setTaskList={setTaskList} taskList={taskList} />
      <FlatList
        data={taskList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TaskItem
            item={item.item}
            description={item.description}
            onToggleStatus={() => toggleTaskStatus(index)}
            onDelete={() => deleteTask(index)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 50,
  },
});

export default App;