import { StyleSheet } from 'react-native';


export default styles = StyleSheet.create({
    scrollView: {
      backgroundColor: "#20232a",
    },
    logo: {
      backgroundColor: "#20232a",
      alignItems: "center",
      marginTop: 2,
      marginBottom: 2,
      marginLeft: 2,
      marginRight: 2,
    },
    header:{
      backgroundColor: "#20232a",
      margin: 2,
      padding: 5,
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between"
  
    },
    botao:{
      backgroundColor: "#841584",
      height: 18,
      alignItems: "center",
      paddingHorizontal: 20,
      marginBottom: 10,
  
    },
    textobotao:{
      color: "#fff",
      fontWeight: "bold",
      fontSize: 11,
  
  
    },
    body: {
    //   justifyContent: "center",
    //   alignItems: "center",
      backgroundColor: "#20232a",
    },
    post: {
        flex:1,
        fontSize: 5,
        marginHorizontal: 20,
        marginBottom: 10,
        padding: 20,
        backgroundColor: "#fff",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#841584',
    },
    titlepost:{
      fontSize: 15,
      fontWeight: "bold",
    },
    comentario:{
      fontSize: 10,
      color: "#666",
    }
  });