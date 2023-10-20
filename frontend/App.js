import React, { useEffect, useState } from 'react';
import { View, Button, Text, SafeAreaView } from 'react-native';

// In a React Native application
import Parse from 'parse/react-native.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Initializing the SDK
Parse.setAsyncStorage(AsyncStorage);
//Paste below the Back4App Application ID AND the JavaScript KEY
Parse.initialize('86LoMs38gTacRyWXbQGGixJoxtFIr4EOfAb6Ploq', '4EFDQLclVUaWyETFmHBGxaAD0F019m3FGOrJO8l7');
//Point to Back4App Parse API address 
Parse.serverURL = 'https://parseapi.back4app.com/';

const App = () => {

  return (
    <SafeAreaView>
      <View>
      <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold', marginTop:400, }}>Hello World</Text>
      </View>
    </SafeAreaView>
  )

}

export default App;