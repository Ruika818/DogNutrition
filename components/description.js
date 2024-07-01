import React from 'react';
import {Text, View} from 'react-native';

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Dear Users:</Text>
      <Text>This is an app that will monitor your beloved canine's health and daily intake of nutrition</Text>
    </View>
  );
}

export default DetailsScreen;