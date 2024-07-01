import React,{useState} from 'react';
import { View, Text , TextInput, Button, AsyncStorage} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from './components/description';
import Dogs from './components/dog';
import CalorieCount from './components/CalorieCount';
import CalorieProvider from './components/CalorieContext';
import RecipesScreen from './components/FoodRecipes';



function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Please first create dog drofile before using this app</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Go to Calorie Calculator"
        onPress={() => navigation.navigate('Calories')}
      />
      <Button
        title="Go to Dog Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button
        title="Go to Recipes"
        onPress={() => navigation.navigate('Recipes')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <CalorieProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
          <Stack.Screen name="Calories" component={CalorieCount} options={{title: 'Calories'}} />
          <Stack.Screen name="Details" component={DetailsScreen} options={{title: 'Details'}} />
          <Stack.Screen name="Profile" component={Dogs} options={{title: 'Profile'}} />
          <Stack.Screen name="Recipes" component={RecipesScreen} options={{title: 'Recipes'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </CalorieProvider>
  );
}

export default App;
