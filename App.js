import React, { Component, } from 'react';
import { View, Text, StyleSheet,SafeAreaView,SectionList,Image,FlatList,ImageBackground } from 'react-native';
import Data from './src/data'
const img = require('./src/assets/images/img.jpeg')


const ListItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <View style>
        <ImageBackground
          source={item.uri}
          style={styles.itemImage}
          resizeMode="cover">
                  <Text style={{
                    color:"#ffffff",
                    marginLeft:5
                  }}>{item.texth}</Text>
          </ImageBackground>
      </View>
      
      <Text style={styles.itemtexth}>{item.texth}</Text>

      <Text style={styles.itemtexth}>{item.textb}</Text>
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
      <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={Data}
          renderSectionHeader={({ section }) => (
            <>
              <Text style={styles.sectionHeader}>{section.title}</Text>
              <FlatList
                horizontal
                data={section.data}
                renderItem={({ item }) => <ListItem item={item} />}
                showsHorizontalScrollIndicator={false}
              />
            </>
          )}
          renderItem={({ item, section }) => {
            return null;
          }}
        />

      </SafeAreaView>
    </View>
  );
};


//make this component available to the app
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 28,
    color: '#000000',
    marginTop: 10,
    marginBottom: 5,
  },
  item: {
    margin: 10,
    backgroundColor:'#ffffff',
    // borderColor:"#ffffff",
    borderRadius:10,
    // borderWidth:5
    
    
  },
  itemImage: {
    width: 200,
    height: 200,
    justifyContent: 'flex-end',
    overflow:"hidden",
    borderRadius:5
    
  },
  itemtexth: {
    color: '#000000',
    marginTop: 5,
    marginLeft:5
  },
});