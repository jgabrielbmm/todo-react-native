import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  taskInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  taskInfoCounter: {
    flexDirection: "row",
  },
  createdTask:{
    color: "#4EA8DE",
    fontSize: 14,
    fontWeight: "bold"
  },
  concludedTask:{
    color: "#8284FA",
    fontSize: 14,
    fontWeight: "bold"
  },
  counterContainer: {
    paddingHorizontal: 8,
    backgroundColor: "#333333",
    marginLeft: 4,
    borderRadius: 50,
  },
  counter: {
    color: "#D9D9D9",
  }
})