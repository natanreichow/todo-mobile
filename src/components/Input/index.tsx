import { TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Ionicicons from '@expo/vector-icons/Ionicons'

type Props = {
  taskText: string
  setTaskText: React.Dispatch<React.SetStateAction<string>>
  onHandleAddTask: () => void
}

export function Input({ taskText, setTaskText, onHandleAddTask}: Props) {
  const inputEmpty = taskText.length === 0

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} 
        placeholder="Add a new task"
        placeholderTextColor="#808080"

        // Remove text from Input when onPress
        onChangeText={setTaskText}
        value={taskText}
      />
      <TouchableOpacity 
        style={styles.button}
        onPress={onHandleAddTask}
        disabled={inputEmpty}
      >
        <Ionicicons name="add-circle-outline" size={24} color="white" />
      </TouchableOpacity>
    </View>
  )
}