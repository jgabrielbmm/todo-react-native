import {Text, View} from "react-native";
import TaskIcon from "../../assets/task-icon.svg"
import {styles} from "./styles";
export function EmptyTasks(){
  return (
    <View style={styles.noTaskContainer}>
      <TaskIcon />
      <Text style={styles.noticeText}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.spanText}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  )
}