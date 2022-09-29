import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A1A1A',
    flex: 1,
  },

  content: {
    paddingLeft: 24,
    paddingRight: 24,
  },

  tasksTrack: {
    marginTop: 32,
    marginBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  createdTasks: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  createdTasksText: {
    color: '#4EA8DE',
    fontWeight: 'bold',
    marginRight: 8
  },

  createdTasksCounter: {
    backgroundColor: '#333333',
    width: 25,
    borderRadius: 10
  },

  createdTasksNumber: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center'
  },

  completedTasks: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  completedTasksText: {
    color: '#8284FA',
    fontWeight: 'bold',
    marginRight: 8
  },

  completedTasksCounter: {
    backgroundColor: '#333333',
    width: 25,
    borderRadius: 10
  },

  completedTasksNumber: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center'
  },

  emptySection: {
    paddingTop: 64,
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#333333'
  },

  emptyTextBold: {
    marginTop: 8,
    color: '#808080',
    fontWeight: 'bold',
    fontSize: 16
  },

  emptyText: {
    color: '#808080',
    fontSize: 16
  }
})