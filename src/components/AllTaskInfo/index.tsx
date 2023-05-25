import {styles} from "./styles";
import {Text, View} from "react-native";

interface AllTaskInfoProps{
  createdTaskNumber: number,
  completedTaskNumber: number
}
export function AllTaskInfo({createdTaskNumber, completedTaskNumber}:AllTaskInfoProps){
  return (
    <View style={styles.taskInfoContainer}>
      <View style={styles.taskInfoCounter}>
        <Text style={styles.createdTask}>Críadas</Text>
        <View style={styles.counterContainer}>
          <Text style={styles.counter}>{createdTaskNumber}</Text>
        </View>
      </View>
      <View style={styles.taskInfoCounter}>
        <Text style={styles.concludedTask}>Concluídas</Text>
        <View style={styles.counterContainer}>
          <Text style={styles.counter}>{completedTaskNumber}</Text>
        </View>
      </View>
    </View>
  )
}