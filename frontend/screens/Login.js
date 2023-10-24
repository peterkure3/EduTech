import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    console.log('Logging in with:', email, password);
    navigation.navigate('Profile');
  };

  const handleGoogleLogin = () => {
    // Implement Google login logic here
    console.log('Logging in with Google');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Edutech</Text>
      <Text>Login</Text>
      <TextInput
        style={{
          width: '80%',
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          paddingLeft: 10,
        }}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={{
          width: '80%',
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 20,
          paddingLeft: 10,
        }}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Text>Dont have an account? Register here</Text>
      <TouchableOpacity
        style={{
          backgroundColor: 'orange',
          padding: 16,
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 24,
          marginBottom: 10,
        }}
        onPress={handleLogin}
      >
        <Text style={{ color: 'white', fontSize: 18 }}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: 'red',
          padding: 16,
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 24,
        }}
        onPress={handleGoogleLogin}
      >
        <Text style={{ color: 'white', fontSize: 18 }}>Login with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginPage;
