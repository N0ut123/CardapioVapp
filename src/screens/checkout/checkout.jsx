import { TextInput, Image, TouchableOpacity, View, Text, FlatList } from "react-native";
import { styles } from "./checkout.style.js";
import icons from "../../constants/icons.js";
import { pedido } from "../../constants/dados.js";
import Produto from "../../components/produto/produto.jsx";
import Button from "../../components/button/button.jsx";


function Checkout(props) {

    function DetalheProduto(){
        props.navigation.navigate("detalhe-produto");
        }
        
     function ClickDelete(){
     alert("ok");
     }

    return <View style={styles.container}>
      
      <FlatList data={pedido.itens}
          keyExtractor={(item) =>item.idItem}
          showsVerticalScrollIndicator={false}
          renderItem={({item})  => {
            return <Produto key={item.idItem}
            foto={item.foto}
            nome={item.nome}
            descricao={item.descricao}
            valor={item.vlTotal}
              onClickDelete={ClickDelete}
              onClickProduto={DetalheProduto} />
          }}
          />

     <View style={styles.footer}>
        <View style={styles.valores}>
            <Text style={styles.total}>Resumo dos Valores</Text>
        </View>

        <View style={styles.valores}>
            <Text style={styles.valor}>Subtotal</Text>
            <Text style={styles.valor}>R$ 36,00</Text>
        </View>
        
        <View style={styles.valores}>
            <Text style={styles.total}>Total</Text>
            <Text style={styles.total}>R$ 36,00</Text>
        </View>
     </View>

     <View style={styles.conatinerBtn}>
            <Button texto="Finalizar Pedido" />
        </View>

    </View>
}
export default Checkout;