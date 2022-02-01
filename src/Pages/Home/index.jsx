import {View, StyleSheet, Text, TextInput} from 'react-native';

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.contet}>
        <Text style={styles.text}>
          Hello, what's your name?
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#517BF9',
    justifyContent: 'center',
    alignItems: 'center',
  },

  contet: {
    width: '85%',
    alignItems: 'center',
  },

  text: {
    color: '#fff',
    fontFamily: 'Poppins_700Bold',
    fontSize: 32,
  }
})

