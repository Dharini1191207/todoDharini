import React, { useState, useEffect } from "react";
import { Alert, FlatList, StyleSheet, View } from "react-native";
import Header from "./src/components/Header";
import AddTask from "./src/components/AddTask";
import TaskItem from "./src/components/TaskItem";
import { FIRESTORE_DB } from "./firebaseConfig";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";

export interface MyItem {
  id: string;
  item: string;
  description: string;
}

const App = () => {
  const [taskList, setTaskList] = useState<MyItem[]>([]);

  useEffect(() => {
    const taskListRef = collection(FIRESTORE_DB, "todoDharini");

    const unsubscribe = onSnapshot(taskListRef, (snapshot) => {
      const tasks: MyItem[] = [];
      snapshot.forEach((doc) => {
        tasks.push({
          id: doc.id,
          item: doc.data().item,
          description: doc.data().description,
        });
      });
      setTaskList(tasks);
    });

    return () => unsubscribe();
  }, []);

  const toggleTaskStatus = async (id: string) => {
    const task = taskList.find((task) => task.id === id);
    if (task) {
      const updatedDescription = task.description === "Due" ? "Done" : "Due";
      const taskDocRef = doc(FIRESTORE_DB, "todoDharini", task.id);
      await updateDoc(taskDocRef, { description: updatedDescription });
    }
  };

  const deleteTask = async (id: string) => {
    const taskDocRef = doc(FIRESTORE_DB, "todoDharini", id);
    await deleteDoc(taskDocRef);
  };

  const addItem = async (item: string, description: string) => {
    if (!item) {
      Alert.alert("No Item!", "Please enter an item");
      return;
    }

    const newTask = { item, description };
    try {
      const docRef = await addDoc(collection(FIRESTORE_DB, "todoDharini"), newTask);
      setTaskList([...taskList, { id: docRef.id, ...newTask }]);
    } catch (error) {
      Alert.alert("Error", "Failed to add task. Please try again.");
      console.error("Error adding document: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <Header title="To Do List" />
      <AddTask addItem={addItem} />
      <FlatList
        data={taskList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem
            id={item.id}
            item={item.item}
            description={item.description}
            onToggleStatus={() => toggleTaskStatus(item.id)}
            onDelete={() => deleteTask(item.id)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 50,
  },
});

export default App;
