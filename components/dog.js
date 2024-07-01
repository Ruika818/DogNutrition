import React, { useState, useEffect } from 'react';
import { Text, TextInput, View, Button, Image, Alert } from 'react-native';
import { useCalories } from './CalorieContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';

function Dogs() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);
  const { calorieNeeded, setCalorieNeeded } = useCalories();
  const [profile, setProfile] = useState("");
  const [profilePic, setProfilePic] = useState(null);

  useEffect(() => {
    loadProfile();
  }, []);

  const saveProfile = async () => {
    const profile = { name, age, weight, calorieNeeded, profilePic };
    const jsonValue = JSON.stringify(profile);
    await AsyncStorage.setItem('dogProfile', jsonValue);
    Alert.alert("Profile Saved", "Your dog's profile has been saved.");
  }

  const loadProfile = async () => {
    const jsonValue = await AsyncStorage.getItem('dogProfile');
    if (jsonValue != null) {
      const profile = JSON.parse(jsonValue);
      setName(profile.name);
      setAge(profile.age);
      setWeight(profile.weight);
      setCalorieNeeded(profile.calorieNeeded);
      setProfilePic(profile.profilePic);
    }
  }

  const selectProfilePic = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this app to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log("Image Picker Result: ", result); 

    if (!result.canceled) {
      console.log("Image URI: ", result.assets[0].uri); 
      setProfilePic(result.assets[0].uri);
    } else {
      console.log("Image selection canceled");
    }
  }

  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {profilePic && (
        <Image
          source={{ uri: profilePic }}
          style={{ width: 100, height: 100, borderRadius: 50 }}
          onError={(e) => {
            console.log("Image Load Error: ", e.nativeEvent.error);
            Alert.alert("Image Load Error", "There was an error loading the image.");
          }}
        />
      )}
      <Button
        title="Select Profile Picture"
        onPress={selectProfilePic}
      />
      <TextInput
        style={{ padding: 10, borderWidth: 1, height: 40, width: '80%', marginVertical: 5 }}
        placeholder="Enter its name:"
        onChangeText={setName}
        value={name}
      />
      <TextInput
        style={{ padding: 10, borderWidth: 1, height: 40, width: '80%', marginVertical: 5 }}
        placeholder="Enter its age:"
        onChangeText={text => setAge(parseInt(text))}
        value={age}
      />
      <TextInput
        style={{ padding: 10, borderWidth: 1, height: 40, width: '80%', marginVertical: 5 }}
        placeholder="Enter its weight:"
        onChangeText={text => setWeight(parseFloat(text))}
        value={weight}
      />
      <TextInput
        style={{ padding: 10, borderWidth: 1, height: 40, width: '80%', marginVertical: 5 }}
        placeholder="Enter its calorie needs:"
        onChangeText={text => setCalorieNeeded(parseFloat(text))}
        value={calorieNeeded}
      />
      <Button
        title='Save Profile'
        onPress={saveProfile}
      />
      <Button
        title='Display profile'
        onPress={() => setProfile(`${name} is ${age} years old, weighs ${weight} lbs, and needs ${calorieNeeded} calories per day!`)}
      />
      <Text> {profile} </Text>
    </View>
  );
}

export default Dogs;