import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';

import styles from './style';

const App = () => {

  const data = [
    {
      'titulo': 'Teste',
      'conteudo': 'Estou começando a ficar bom...'
    },
    {
      'titulo': 'Teste 2',
      'conteudo': 'Blablabla...'
    },
    {
      'titulo': 'Teste 2',
      'conteudo': 'Blablabla...'
    },
    {
      'titulo': 'Teste 2',
      'conteudo': 'Blablabla...'
    },
    {
      'titulo': 'Teste 2',
      'conteudo': 'Blablabla...'
    },
    {
      'titulo': 'Teste 2',
      'conteudo': 'Blablabla...'
    },
    
  ]

  renderPost = ({ item }) => {
    return (
      <View style={styles.post}>
        <Text style={styles.titlepost}>
          {item.titulo}
        </Text>
        <Text style={styles.comentario}>
          {item.conteudo}
        </Text>
      </View>
    );
  }

  renderPosts = () => {
    return (
      <FlatList
        data={data}
        renderItem={renderPost}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }

  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
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
            {renderPosts()}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
