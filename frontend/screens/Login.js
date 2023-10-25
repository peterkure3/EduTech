import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleRegisterNavigation=()=>{
    navigation.navigate('Signup')
  }
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
    <LinearGradient
      colors={['blue', 'purple']}
      start={{
        x: 0,
        y: 0
      }}
      end={{
        x: 1,
        y: 1
      }}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <View style={{ alignItems: 'center', marginBottom: 20 }}>
        <Image source={require('../assets/edutech_logo-removebg-preview.png')} style={styles.logo} />
        <Text style={{ color: 'white', fontSize: 24 }}>Edutech</Text>
        <Text style={{ color: 'white', fontSize: 18 }}>Login</Text>

        <TextInput
          style={{
            width: '100%', // Take up 100% of the parent's width
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 10,
            paddingLeft: 10,
            color: 'gray', // Make the text color gray
            backgroundColor: 'white', // Added white background color
            borderRadius: 24, // Added border radius
          }}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={{
            width: '100%',
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 20,
            paddingLeft: 10,
            color: 'gray', // Make the text color gray
            backgroundColor: 'white', // Added white background color
            borderRadius: 24, // Added border radius
          }}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity
          style={{
            width:'100%',
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
        <TouchableOpacity onPress={handleRegisterNavigation}>
          <Text style={{ color: 'white', marginBottom: 10 }}>
            Don't have an account? Register here
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width:'100%',
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
    </LinearGradient>
  );
};

const styles = {
  logo: {
    width: 100, // Set the width of the logo
    height: 100, // Set the height of the logo
    marginBottom: 20,
  },
};

export default LoginPage;
