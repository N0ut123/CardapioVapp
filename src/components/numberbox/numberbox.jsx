import { Text, TextInput } from "react-native";
import { styles } from "./numberbox.style.js";


function NumberBox(props) {
    return <>
      <Text style={styles.label}>{props.label}</Text>
        <TextInput style={styles.input}
            placeholder={props.placeholder}
            onChangeText={(texto) => props.onChangeText(texto)}
            value={props.value}
            keyboardType="numeric"
            />
    </>
}

export default NumberBox;