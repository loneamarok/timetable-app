import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const GoalItem = props => {
    return(
    <TouchableOpacity activeOpacity={0.6} onPress={props.deleteGoalHandler.bind(this, props.goal.key)}>
        <View style={styles.goalListItem}>
            <Text>{props.goal.value}</Text>
        </View>
    </TouchableOpacity>
)};

const styles = StyleSheet.create({
    goalListItem: {
        padding:10,
        backgroundColor: "#ccc",
        borderColor: 'black',
        borderWidth: 1,
        marginVertical: 10,
      },
})
export default GoalItem;