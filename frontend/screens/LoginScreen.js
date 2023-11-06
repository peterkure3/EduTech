import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View, ActivityIndicator, Alert } from 'react-native';
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { usernameValidator } from '../helpers/nameValidator'
import { passwordValidator } from '../helpers/passwordValidator'

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [loading, setLoading] = useState(false); // State to handle loading indicator
  const [loginError, setLoginError] = useState(''); // State to handle login error messages

  const onLoginPressed = async () => {
    setLoading(true); // Start loading
    setLoginError(''); // Clear any previous errors
    const usernameError = usernameValidator(username.value);
    const passwordError = passwordValidator(password.value);
    if (usernameError || passwordError) {
      setUsername({ ...username, error: usernameError });
      setPassword({ ...password, error: passwordError });
      setLoading(false); // Stop loading
      return;
    }

    //API results for logging in
    try {
      const response = await fetch('https://edutech-api-av5t.onrender.com/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: username.value, password: password.value }),
      });

      setLoading(false); // Stop loading

      if (response.ok) {
        // Login successful, navigates to the Dashboard screen
        console.log("Login successful");
        navigation.reset({
          index: 0,
          routes: [{ name: 'Dashboard' }],
        });
      } else if (response.status === 401) { // You can customize this status code based on your API
        // Incorrect password, update the error state
        setLoginError('The password you entered is incorrect.');
      } else {
        // Other errors
        setLoginError('An unexpected error occurred. Please try again.');
      }
    } catch (error) {
      setLoading(false); // Stop loading on network error
      setLoginError('Network error, please try again.');
      console.error('Network error:', error);
    }
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Welcome back.</Header>
      <TextInput
        label="User Name"
        returnKeyType="next"
        value={username.value}
        onChangeText={(text) => setUsername({ value: text, error: '' })}
        error={!!username.error}
        errorText={username.error}
        autoCapitalize="none"
        autoCompleteType="Username"
        textContentType="Username"
        keyboardType="Username"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error || !!loginError}
        errorText={password.error || loginError}
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}
        >
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={onLoginPressed} disabled={loading}>
        {loading ? <ActivityIndicator size="small" color="#FFFFFF" /> : "Login"}
      </Button>
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}


const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})