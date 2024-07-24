import { StyleSheet, Text, View, FlatList,} from 'react-native';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import NewsCard from './components/NewsCard'
import Banner from './components/Banner'

import news_data from './news_data.json'



export default function App() {

  const renderNews = ({item}) => <NewsCard news = {item} />; //renderItem'i tekrar tekrar çağırmak yerine fonskiyonu dışarıya çıkardık
   
  return (
    <SafeAreaProvider style = {styles.container}>
      <SafeAreaView style = {styles.container}>
        <Text style = {styles.headerText}>News</Text>
        <View>
          <FlatList
            ListHeaderComponent={() => (<Banner />)}
            keyExtractor={(item) => item.u_id.toString()} //data takibi için, idleri veririz
            data = {news_data} //kullanılacak verileri içerir
            renderItem={renderNews} //bu verilerin nasıl görüntüleneceğini tanımlar
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },

  headerText: {
    fontWeight: 'bold',
    fontSize: 50,
  }
})

