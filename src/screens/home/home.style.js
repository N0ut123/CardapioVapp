import { Colors } from "react-native/Libraries/NewAppScreen"
import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    container: {
        flex: 1,
        padding: 10,
        backgroundColor : COLORS.white
    },
    headerBar:{
      height: 45,
      flexDirection: "row",
      justifyContent: "space-between"
    },
    logo:{
      width: 140,
      height: 30
    },
    cart:{
      width: 30,
      height: 30
    },
    busca:{
     margemBottom : 10
     
    },
    containerProduto:{
     padding: 10
      
     },
     categoria:{
      fonteSize:FONT_SIZE.md,
      fontWeight: "bold",
      color: COLORS.dark_gray,
      padding: 2
       
      },
    
  }