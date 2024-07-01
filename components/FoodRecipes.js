import React, {useState} from 'react';
import {Text, TextInput, View, Button, ScrollView, StyleSheet} from 'react-native';
import {useCalories} from './CalorieContext';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function LowFat01(){
  return(
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Text> Chicken Breast: 100g </Text>
      <Text> Lean Beef: 100g </Text>
      <Text> Rabbit Heart: 3 </Text> 
      <Text> Calories: 438 </Text>
    </View>
  );
}

function Bone01(){
  return(
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Text> Chicken Breast: 100g </Text>
      <Text> Chicken Feet: 2</Text>
      <Text> Lean Beef: 100g </Text> 
      <Text> Duck Neck: 1 </Text> 
      <Text> Calories: 552</Text>
    </View>
  );
}


function Recipes({navigation}){
  return (
    <ScrollView>
      <Text style={{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
      }}> Below are some recommended dog recipes </Text>
      <Button
        title = "Low fat dog recipe 01"
        onPress={() => navigation.navigate('LowFat01')}
      /> 
      <Button
        title = "Bone dog recipe 01"
        onPress={() => navigation.navigate('Bone01')}
      /> 
        
    </ScrollView>
  );
}

const Stack = createNativeStackNavigator();

function RecipesScreen(){
  return(
    <NavigationContainer independent = {true}>
      <Stack.Navigator>
        <Stack.Screen name = "Recipes" component={Recipes}/>
        <Stack.Screen name = "LowFat01" component={LowFat01} options={{title: 'Low Fat01'}}/>
        <Stack.Screen name = "Bone01" component={Bone01} options={{title: 'Bone 01'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RecipesScreen;