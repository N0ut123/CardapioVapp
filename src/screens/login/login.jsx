import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./login.style.js";
import Header from "../../components/header/header.jsx";
import NumberBox from "../../components/numberbox/numberbox.jsx";
import Button from "../../components/button/button.jsx";
import { useState } from "react";



function Login(props) {

    const [mesa,setMesa] = useState("");

    return <View style={styles.container}>
        <Header texto="Informe sua mesa." />

        <View style={styles.formGroup}>
            <View style={styles.form}>
                <NumberBox label="Mesa" 
                onChangeText={(texto) => setMesa(texto)}
                value = {mesa}
                />
            </View>

            <View style={styles.form}>
                <Button texto="Pedir"
                onPress={() => props.navigation.navigate("home")} 
                />
            </View>
        </View>

    </View>
}

export default Login;