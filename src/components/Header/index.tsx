import TodoLogo from "../../assets/todo-logo.svg";
import {View} from "react-native";
import {styles} from "./styles";

export function Header() {
  return(
    <View style={styles.headerContainer}>
      <TodoLogo />
    </View>
  )
}