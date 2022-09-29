import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#262626',
    padding: 8,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5
  },

  taskText: {
    color: '#FFF',
    flex: 1,
    paddingLeft: 8,
    paddingRight: 8,
    fontSize: 16
  },

  taskTextCompleted: {
    color: '#808080',
    textDecorationLine: "line-through",
    flex: 1,
    paddingLeft: 8,
    paddingRight: 8,
    fontSize: 16
  }
})