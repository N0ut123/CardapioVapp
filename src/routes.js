import Login from "./screens/login/login.jsx";
import Home from "./screens/home/home.jsx";
import DetalheProduto from "./screens/detalhes-produto/detalhe-produto.jsx";
import Checkout from "./screens/checkout/checkout.jsx";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from "react-native";
import { COLORS } from "./constants/theme.js";
import { Text } from "react-native";

const Stack = createNativeStackNavigator();

function Routes(){
return <NavigationContainer>
    <Stack.Navigator>

       <Stack.Screen name ="login" component={Login} options={{
        headerShown: false 
    }}/>
    <Stack.Screen name ="home" component={Home} options={{
        headerShown: false 
    }}/> 

     <Stack.Screen name ="detalhe-produto" component={DetalheProduto} options={{
        headerShown: false 
    }}/>  

<Stack.Screen name ="checkout" component={Checkout} options={{
       headerShadowVisible: false,
       title: "Pedido",
       headerTitleAlign: "center",
       headerRight: () => {
           return <TouchableOpacity onPress={() => alert("OK")}>
               <Text style={{ color: COLORS.red }}>Limpar</Text>
           </TouchableOpacity>
       },
    }}/>

    
    </Stack.Navigator>
</NavigationContainer>

}
export default Routes;