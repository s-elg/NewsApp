import { StyleSheet, Text, View, FlatList } from 'react-native';
//FlatList: herhangi bir şekilde veri görüntülenmesi yapacaksak bu componenti kullanırız
//çalışma mantığı: uygulamaya 2000 tane veri akıyor ancak bizim ekranda göstereceğimiz 5 tane veri, bunu uygulamayı çok yormadan sağlayan bir component,
//yani şu an ekranda 5 tane veri var, ekranı kaydırdığında da 5 tane veriyi hazırda tutuyo
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import news_data from './news_data.json'



export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text>News App</Text>
          <FlatList 
            data = {news_data} //kullanılacak verileri içerir
            renderItem={({item}) => <Text>{item.title}</Text>} //bu verilerin nasıl görüntüleneceğini tanımlar
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

