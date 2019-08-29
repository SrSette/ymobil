import React, {Fragment} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Button
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
              <Button title="Home" color="#841584" /*onPress={}*//>   
              
              <Button title="Casas" color="#841584"/>   
              
              <Button title="Apertamentos" color="#841584"/>   
              
              <Button title="Perfil" color="#841584"/>   
              
              <Button title="Sair" color="#841584"/>   

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
