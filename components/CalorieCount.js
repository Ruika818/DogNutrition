import React, {useState} from 'react';
import {Text, TextInput, View, Button} from 'react-native';
import {useCalories} from './CalorieContext';

function CalorieCount(){
  const [calorie, setCalorie] = useState(0);
  const [calorieInput, setCalorieInput] = useState(0);
  const{calorieNeeded, setCalorieNeeded} = useCalories();

  const calorieCalc = () => {
    const cal = parseFloat(calorieInput);
    setCalorie(calorie+cal);
  }

  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text> Please press one of the below buttons to calculate calorie intake or manually input </Text>
      <Button
        title="Chicken Breast 100g"
        onPress={()=> setCalorie(calorie+165)}
      />
      <Button
        title="Beef 100g"
        onPress={()=> setCalorie(calorie+250)}
      />
      <Button
        title="Pork 100g"
        onPress={()=> setCalorie(calorie+242)}
      />
      <TextInput
        style = {{ padding: 10, borderWidth: 1, height: 20}}
        onChangeText = {calories => setCalorieInput(calories)}
        placeholder= 'please enter calories: '
        onSubmitEditing = {calorieCalc}
      />
      <Text> Current Calorie Intake: {calorie} </Text>
      <Text> It needs {calorieNeeded} calories per day. </Text>
    </View>
  );
}

export default CalorieCount;