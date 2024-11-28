import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding:15,
        paddingTop: 2

    },
    container2: {
        width: "100%",
        height: 46,
        justifyContent: "center"
    },
    
    containerBack: {
        position: "absolute",
        top: 4,
        left: 0
    },
    back: {
        width: 40,
        height: 40
    },
    titulo: {
        fontSize: FONT_SIZE.lg,
        textAlign:"center",
        color: COLORS.dark_gray
    },
    valores: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    total: {
        fontSize: FONT_SIZE.md,
        fontWeight:"bold",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    valor: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.dark_gray,
        marginBottom:2,
        marginTop: 15
    },
    total: {
        fontSize: FONT_SIZE.sm,
        fontWeight:"bold",
        color: COLORS.dark_gray,
        marginBottom:2,
        marginTop: 15
    },
    conatinerBtn: {
        marginTop: 30
    }
    
}