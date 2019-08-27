import React, {Fragment} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
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
    backgroundColor: "#000",
  },
  engine: {
    position: 'absolute',
    right: 0,
    backgroundColor: "#fff"
  },
  body: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333",
  },
  post: {
    fontSize: 5,
    marginHorizontal: 50,
    marginVertical: 20,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 5
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
