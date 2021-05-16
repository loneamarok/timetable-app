import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, Button, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState("");
  
    const goalInputHandler = (enteredText) => {
      setEnteredGoal(enteredText);
    }
    
    return(
    <Modal visible={props.visible} animationType="slide">
        <View style={styles.newGoalInput}>
            <TextInput 
                placeholder="Course goal" 
                style={styles.goalTextInput} 
                onChangeText={goalInputHandler}
                value = {enteredGoal}
            />
            <View style={styles.goalButtonView}>
                <View style={styles.goalInputButton}>
                    <Button 
                        title=" Add " 
                        onPress = {() => {props.addGoalHandler(enteredGoal);
                        setEnteredGoal("");}}
                    />
                </View>
                <View style={styles.goalInputButton}>
                    <Button 
                        color = "red"
                        title=" Cancel " 
                        onPress = {props.cancelGoalModal}
                    />
                </View>
            </View>
        </View>
    </Modal>
)};

const styles = StyleSheet.create({
    newGoalInput: { 
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    goalTextInput: {
        borderColor: 'black',
        borderWidth: 1,
        width: '80%',
        margin: 10,
        padding: 10,
    },
    goalButtonView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
    },
    goalInputButton: {
        width: '40%',
    },
})

export default GoalInput;