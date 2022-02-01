import {View, TextInput, StyleSheet} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export function Input({
  iconName,
  iconColor,
}) {
  return (
    <View style={styles.box}>
      <MaterialIcons name={iconName} color={iconColor} size={24} />
      <TextInput style={styles.input} />
    </View>
  )
}