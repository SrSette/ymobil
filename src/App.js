import React, {Fragment} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

const App = () => {
  return (
    <Fragment>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
            <View style={styles.logo}>
             <Image source={require('./logo.png')} />
            </View>
            <View style={styles.header}>
              <TouchableOpacity style={styles.botao} onPress={() => {}}>
                <Text style={styles.textobotao}>Login</Text>
              </TouchableOpacity>               
              <TouchableOpacity style={styles.botao} onPress={() => {}}>
                <Text style={styles.textobotao}>Gerenciar</Text>
              </TouchableOpacity>   
              <TouchableOpacity style={styles.botao} onPress={() => {}}>
                <Text style={styles.textobotao}>Perfil</Text>
              </TouchableOpacity>  
              <TouchableOpacity style={styles.botao} onPress={() => {}}>
                <Text style={styles.textobotao}>Sair</Text>
              </TouchableOpacity>    
            </View>
            <View style={styles.body}>
            <View style={styles.post}>
              <Text style={styles.titlepost}>
                Titulo do Post
              </Text>
              <Text style={styles.comentario}>
              Estou começando a ficar bom ......
              </Text>
            </View>
            <View style={styles.post}>
            <Text style={styles.titlepost}>
                Titulo do Post
              </Text>
              <Text style={styles.comentario}>
              Estou começando a ficar bom ......
              </Text>
            </View>
            <View style={styles.post}>
            <Text style={styles.titlepost}>
                Titulo do Post
              </Text>
              <Text style={styles.comentario}>
              Estou começando a ficar bom ......
              </Text>
            </View>
            <View style={styles.post}>
            <Text style={styles.titlepost}>
                Titulo do Post
              </Text>
              <Text style={styles.comentario}>
              Estou começando a ficar bom ......
              </Text>
            </View>
            <View style={styles.post}>
            <Text style={styles.titlepost}>
                Titulo do Post
              </Text>
              <Text style={styles.comentario}>
              Estou começando a ficar bom ......
              </Text>
            </View>
            <View style={styles.post}>
            <Text style={styles.titlepost}>
                Titulo do Post
              </Text>
              <Text style={styles.comentario}>
              Estou começando a ficar bom ......
              </Text>
            </View>
            <View style={styles.post}>
            <Text style={styles.titlepost}>
                Titulo do Post
              </Text>
              <Text style={styles.comentario}>
              Estou começando a ficar bom ......
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};



const styles = StyleSheet.create({
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#20232a",
  },
  post: {
    fontSize: 5,
    marginHorizontal: 50,
    marginVertical: 20,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 0,
    borderWidth: 2,
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



export default App;
