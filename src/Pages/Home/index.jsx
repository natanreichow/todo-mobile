import { View, StyleSheet, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { Input } from '../../components/Input';
import { useNavigation } from '@react-navigation/core';
import { useState } from 'react';

export function Home() {
  const [userName, setUserName] = useState('')
  const {navigate} = useNavigation()

  const handle = () => {
    setUserName('')
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.text}>What's your name?</Text>
            <Input
              placeholder='Your name'
              returnKeyType='send'
              value={userName}
              onChangeText={(value) => setUserName(value)}
              onSubmitEditing={() => navigate('TodoList')}
            />
            {/* asyncStorage */}
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#517BF9',
    justifyContent: 'center',
    alignItems: 'center',
  },

  content: {
    width: '85%',
    alignItems: 'center'
  },

  text: {
    color: '#fff',
    fontFamily: 'Poppins_400Regular',
    fontSize: 32,
    marginBottom: 32,
  },  
})

