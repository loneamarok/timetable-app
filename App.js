import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, Alert } from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const showAlert = () => {
    Alert.alert(
      "Entry error",
      "No Course entered",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
      ],
      {
        cancelable: true,
      }
    );
  }
  const addGoalHandler = (goal) => {
    if(goal.length===0) {
      showAlert();
      return;
    }
    setCourseGoals(currentGoals => [...currentGoals, {key:Math.random().toString(), value: goal}]);
    setIsAddMode(false);
  }
  const deleteGoalHandler = (goalId) => {
    setCourseGoals(currentGoals => {
      return(currentGoals.filter((goal) => goal.key !== goalId))
    });
    console.log("Delete TBD");
  }
  const cancelGoalModal = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.container}>
      <Button title="Add new goal" onPress={() => setIsAddMode(true)} style={styles.addGoalButton}/>
      <GoalInput visible={isAddMode} addGoalHandler={addGoalHandler} cancelGoalModal={cancelGoalModal}/>
      <FlatList data={courseGoals} renderItem={itemData => {
          return(
          <GoalItem deleteGoalHandler={deleteGoalHandler} goal={itemData.item}/>
          )}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 30,
    marginTop: '10%'
  },
  addGoalButton: {
    
  }
});
