import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { AppBar } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <AppBar.Header>
        <AppBar.Content title='My profile' subtitle='About Me' />
      </AppBar.Header>
      <StatusBar style="auto" />
      <View style={{margin: 10, alignItems: 'center'}} >
        <Image source={require('./assets/tony.jpg')} style={styles.MyImage} />
      </View>
      <View>
        <Text>
          Hello, My Name is Tony Regalado. 
        </Text>
      </View>
      <View>
        {/* section */}
      </View>
      <Button title='know more' onPress={() => ('#')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  MyImage: {
    
  }
});
