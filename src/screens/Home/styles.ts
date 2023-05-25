import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#1A1A1A",
  },
  mainContainer: {
    paddingHorizontal: 24,

  },
  addTaskContainer: {
    flexDirection: "row",
    gap: 4,
    marginTop: -30,
    marginBottom: 32,
  },
  inputText: {
    flex: 1,
    height: 60,
    padding: 16,
    fontSize: 16,
    backgroundColor: '#262626',
    borderRadius: 4,
    color: '#F2F2F2'
  },
  btnAdd: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#1E6F9F',
    padding: 16,
    borderRadius: 4,
    height: 60,
    width: 60,
  },
  iconAddTask:{
    width:50,
    height:50,
  },
})