import { Text, Image, View, ScrollView, TouchableOpacity } from "react-native";
import{ styles } from "./home.style.js";
import icons from "../../constants/icons.js";
import TextBox from "../../components/textbox/textbox.jsx";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from 'react';
import { lanchonete } from "../../constants/dados.js";
import Produto from "../../components/produto/produto.jsx";



function Home(props){
    const [busca, setBusca] = useState("");

 return <SafeAreaView style={styles.container}>
   <View style={styles.headerBar}>
         <Image source={icons.logo1} style = {styles.logo}/>
         <TouchableOpacity onPress={() => props.navigation.navigate("checkout")}>
         <Image source={icons.cart} style = {styles.cart}/>
         </TouchableOpacity>
   </View>

   <View style={styles.busca}>
       <TextBox  placeholder ="Pesquise seu pedido aqui!"
       onChangeText={(texto) => setBusca(texto)}
       value={busca}
       />
   </View>
       <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
      {
         lanchonete.cardapio.map((item)=> {

           function DetalheProduto(){
           props.navigation.navigate("detalhe-produto");
           }

             return<View key={item.idCategoria} style={styles.containerProduto}>
                <Text style={styles.categoria}>{item.categoria}</Text>
               
              {
                  item.itens.map((prod) => {
                    return <Produto  key={prod.idProduto}
                    foto={prod.foto}
                    idProduto={prod.idProduto}
                    nome={prod.nome}
                    descricao={prod.descricao}
                    valor={prod.valor}
                    onClickProduto={DetalheProduto}
                     />                
                  })
               }
                </View>

         })


      }
      </ScrollView>

   </SafeAreaView>
}

export default Home;

