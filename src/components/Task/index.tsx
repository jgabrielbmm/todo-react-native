import {Text, TouchableOpacity, View} from "react-native";
import { AntDesign, Feather } from '@expo/vector-icons';
import {styles} from "./styles";
import {useState} from "react";
import {ITask} from "../../screens/Home";

interface TaskProps {
  task: ITask
  onTaskRemove: (id: string) => void;
  onCompletedTask: (id: string) => void;
}
export function Task({task, onTaskRemove, onCompletedTask}: TaskProps){

  return (
    <View style={styles.taskContainer}>
      <View style={styles.checkboxContainer}>
      <TouchableOpacity style={styles.checkboxBtn} onPress={() => onCompletedTask(task.id)}>
        {task.isChecked && (
          <AntDesign name="check" size={12} color="#fff" />
        )}
      </TouchableOpacity>

      <Text style={styles.taskText}>
        {task.task}
      </Text>
      </View>

      <TouchableOpacity onPress={() => onTaskRemove(task.id)}>
        <Feather name="trash-2" size={20} color="#808080" />
      </TouchableOpacity>
    </View>
  )
}