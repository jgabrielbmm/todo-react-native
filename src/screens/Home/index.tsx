import {FlatList, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import {styles} from "./styles";
import AddTaskIcon from '../../assets/add-task-icon.svg'
import {Header} from "../../components/Header";
import {AllTaskInfo} from "../../components/AllTaskInfo";
import {EmptyTasks} from "../../components/EmptyTasks";
import {Task} from "../../components/Task";
import {useState , useEffect} from "react";
import 'react-native-get-random-values'
import {v4 as uuidv4} from 'uuid'

export type ITask = {
  id: string,
  task: string,
  isChecked: boolean
}
export function Home(){
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [task, setTask] = useState('')
  const [completedTaskNumber, setCompletedTaskNumber] = useState(0)
  function handleTaskAdd(taskName: string){
    let task = {
      id: uuidv4(),
      task: taskName,
      isChecked: false
    }
    setTaskList(prevState => [...prevState, task])
    setTask('')
  }

  function handleTaskRemove(id: string){
    setTaskList(taskList.filter(task => task.id !== id))
  }

  function handleCompletedTask (id: string) {
    setTaskList(taskList.map(task => {
      if(task.id === id){
        if (task.isChecked){
         return {...task, isChecked: false}
        }

        return {...task, isChecked: true}
      }
      return task;
    }))
  }

  useEffect(() => {
    setCompletedTaskNumber(taskList.filter(task => task.isChecked).length)
  }, [taskList]);



  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.mainContainer}>
        <View style={styles.addTaskContainer}>
          <TextInput
            style={styles.inputText}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            onChangeText={setTask}
            value={task}
          />
          <TouchableOpacity onPress={() => handleTaskAdd(task)} style={styles.btnAdd}>
            <AddTaskIcon style={styles.iconAddTask} />
          </TouchableOpacity>
        </View>

        <AllTaskInfo createdTaskNumber={taskList.length}  completedTaskNumber={completedTaskNumber} />


        <FlatList
          data={taskList}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Task task={item} onTaskRemove={handleTaskRemove} onCompletedTask={handleCompletedTask} />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <EmptyTasks />
          )}
        />

      </View>
    </View>
  )
}