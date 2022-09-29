import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Ionicicons from "@expo/vector-icons/Ionicons"

type Props = {
  description: string
  isComplete: boolean
  onRemove: () => void
  onToggle: () => void
}

export function Task({ description, onRemove, isComplete, onToggle }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onToggle}>
        {isComplete
          ? <Ionicicons name="checkmark-circle-outline" size={24} color='#8284FA'/>
          : <Ionicicons name="ellipse-outline" size={24} color='#4EA8DE'/>
        }
      </TouchableOpacity>
      {isComplete
        ? <Text style={styles.taskTextCompleted}>
          {description}
        </Text>
        : <Text style={styles.taskText}>
          {description}
        </Text>
      }
      
      <TouchableOpacity onPress={onRemove}>
        <Ionicicons name="trash-outline" size={24} color='#808080'/>
      </TouchableOpacity>
    </View>
  )
}