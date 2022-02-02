import { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback, Keyboard, Alert, Image } from 'react-native';
import { Input } from '../../components/Input';
import * as Location from 'expo-location';
import axios from 'axios';

export function TodoList() {
  const [item, setItem] = useState('')
  const [items, setItems] = useState([])
  const [location, setLocation] = useState(null);
  const [weatherApiResponse, setWeatherApiResponse] = useState(null);

  // Date.now() para ver se é de manha tarde ou noite (pesquisar no google)


  const handleSubmit = () => {
    setItems([...items, item])
    setItem('');
  }


  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert("You need to allow access to location")
        return;
      }
      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
    })();
  }, []);

  useEffect(() => {
    if (location) {
      axios.get(`http://api.weatherapi.com/v1/current.json?key=e06ba1e3a8034523804184700220202&q=${location.coords.latitude},${location.coords.longitude}&aqi=no`).then((response) => {

        //weatherApiResponse.data.current.condition.text
        //weatherApiResponse.data.current.condition.icon
        //weatherApiResponse.data.current.temp_c;
        console.log(response.data.current.condition.icon.split('//')[1]);
        setWeatherApiResponse(response);
      })
    }
  }, [location])

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.textsBox}>
          <Text style={styles.title}>
            Good morning, 
          </Text>
          {
            weatherApiResponse?.data && (
              <View style={styles.weatherData}>
                <Text style={styles.weatherText}>
                  {weatherApiResponse.data.current.condition.text}
                </Text>
                <Text style={styles.weatherText}>
                  , {Math.floor(weatherApiResponse.data.current.temp_c)} °C
                </Text>
                <Image style={{ height: 50, width: 50 }} source={{uri: `https:${weatherApiResponse.data.current.condition.icon}` }} />
              </View>
            )
          }
        </View>

        <View style={styles.bottomBox}>
          <View style={styles.bottomBoxContent}>
            <Input
              placeholder='Add item...'
              returnKeyType='send'
              value={item}
              onChangeText={(value) => setItem(value)}
              onSubmitEditing={handleSubmit}
            />
          </View>
          <View>
            <Text>{items}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#517BF9',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  textsBox: {
    height: '40%',
    justifyContent: 'center',
    paddingLeft: 32,
    width: '100%'
  },

  title: {
    color: '#fff',
    fontFamily: 'Poppins_400Regular',
    fontSize: 28,
  },

  weatherData: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  weatherText: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 18,
  },

  wetter: {
    fontFamily: 'Poppins_700Bold',
    color: '#fff',
    fontSize: 20
  },

  bottomBox: {
    width: '100%',
    height: '60%',
    backgroundColor: '#fff',
    borderRadius: 32,
  },

  bottomBoxContent: {
    padding: 32,
  }

})