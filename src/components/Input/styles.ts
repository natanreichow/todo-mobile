import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -25
  },

  input: {
    flex: 1,
    height: 54,
    backgroundColor: '#262626',
    borderRadius: 6,
    padding: 16,
    fontSize: 16,
    borderColor: '#0D0D0D',
    borderWidth: 1,
    color: '#FFF'
  },

  button: {
    backgroundColor: '#1E6F9F',
    marginLeft: 6,
    height: 52,
    width: 52,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFF'
  }
})