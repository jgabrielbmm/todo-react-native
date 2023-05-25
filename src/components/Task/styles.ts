import {StyleSheet} from "react-native"

export const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: "#262626",
    borderRadius: 8,
    marginBottom: 15
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12
  },
  checkboxBtn: {
    alignItems:"center",
    justifyContent: "center",
    width: 18,
    height: 18,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#4EA8DE",
    padding: 2
  },
  taskText: {
    color: "#F2F2F2",
    width: 300,
    fontSize: 16,
  },
  trashBtn: {

  }
})