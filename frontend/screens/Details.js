import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const DetailsPage = ({ navigation }) => {
    const handleDetailsButtonPress = () => {
        navigation.navigate('HomePage'); 
      };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Details Page</Text>
      <Text>Details about something...</Text>
      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          padding: 16,
          borderRadius: 8,
        }}
        onPress={handleDetailsButtonPress}
      >
        <Text style={{ color: 'white', fontSize: 18 }}>Details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailsPage;
