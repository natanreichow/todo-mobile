import { useState } from "react";
import { View, Text, FlatList, Alert } from "react-native";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Task } from "../../components/Task";
import { styles } from "./styles";
import Ionicicons from "@expo/vector-icons/Ionicons"

type Task = {
  isComplete: boolean
  description: string
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [taskText, setTaskText] = useState('')

  function handleAddTaks() {
    // if (tasks.includes(taskText)) {
    //   return Alert.alert('Error', 'This task was already added')
    // }
    const newTask = {
      description: taskText,
      isComplete: false
    }

    setTasks(prevState => [...prevState, newTask])
    setTaskText('')
  }

  function handleRemoveTask(description: string) {
    setTasks(prevState => prevState.filter(task => task.description !== description))
  }

  function handleChangeToggle(description: string) {
    const changeToggle = tasks.map(task => {
      if (task.description === description) {
        return {
          ...task,
          isComplete: !task.isComplete
        }
      }
      return task
    })

    setTasks(changeToggle)
  }

  function countCompletedTasks() {
    let count = 0

    tasks.forEach(task => {
      if (task.isComplete === true) {
        count = count + 1
      }
    })
    return count
  }

  const createdTasksCounter = tasks.length
  const completedTasksCounter = countCompletedTasks()

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <Input 
          taskText={taskText}
          setTaskText={setTaskText}
          onHandleAddTask={handleAddTaks}
        />

        <View style={styles.tasksTrack}>
          <View style={styles.createdTasks}>
            <Text style={styles.createdTasksText}>
              Created
            </Text>
            <View style={styles.createdTasksCounter}>
              <Text style={styles.createdTasksNumber}>
                {createdTasksCounter}
              </Text>
            </View>
          </View>

          <View style={styles.completedTasks}>
            <Text style={styles.completedTasksText}>
              Completed
            </Text>
            <View style={styles.completedTasksCounter}>
              <Text style={styles.completedTasksNumber}>
                {completedTasksCounter}
              </Text>
            </View>
          </View>
        </View>

        {createdTasksCounter === 0
        ? (
          <View style={styles.emptySection}>
            <Ionicicons name="document-text-outline" size={96} color="#333333" />
            <Text style={styles.emptyTextBold}>
              You don't have any task listed yet.
            </Text>
            <Text style={styles.emptyText}>
              Add tasks above and organize your todo items
            </Text>
          </View>
        )
        : (
          tasks.map(task => (
            <Task
              key={task.description}
              description={task.description}
              isComplete={task.isComplete}
              onRemove={() => handleRemoveTask(task.description)}
              onToggle={() => handleChangeToggle(task.description)}
            />
          ))
        )
        } 
      </View>
    </View>
  )
}