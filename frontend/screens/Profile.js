import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ProfilePage = ({ navigation }) => {
  const goToFeed = () => {
    navigation.navigate('Feed'); // 'Feed' should be the name of your feed screen
  };

  const handleLogout = () =>{
    navigation.navigate('Login');
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>User's Profile</Text>
      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          padding: 16,
          borderRadius: 8,
          marginBottom: 20,
        }}
        onPress={goToFeed}
      >
        <Text style={{ color: 'white', fontSize: 18 }}>Go to Feed</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          padding: 16,
          borderRadius: 8,
        }}
        onPress={handleLogout}
      >
        <Text style={{ color: 'white', fontSize: 18 }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfilePage;