import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';



const HomeCategory = () => {
    const navigation = useNavigation();
   const data = [{
        id: '1',
        categoryName: "Ikan Satu",
        uri: require("../../../../assets/images/fish-1.png")
    },
    {
        id: '2',
        categoryName: "Ikan Dua",
        uri: require("../../../../assets/images/fish-1.png")
    },
    {
        id: '3',
        categoryName: "Ikan Tiga",
        uri: require("../../../../assets/images/fish-1.png")
    },
    {
        id: '4',
        categoryName: "Ikan Empat",
        uri: require("../../../../assets/images/fish-1.png")
    },
    {
        id: '5',
        categoryName: "Ikan Lima",
        uri: require("../../../../assets/images/fish-1.png")
    },
    {
        id: '6',
        categoryName: "Ikan Enam",
        uri: require("../../../../assets/images/fish-1.png")
    },
    {
        id: '7',
        categoryName: "Ikan Tujuh",
        uri: require("../../../../assets/images/fish-1.png")
    },
    {
        id: '8',
        categoryName: "Ikan Delapan",
        uri: require("../../../../assets/images/fish-1.png")
    }];
    const numColumns = 4;

  return (
    
    <View style={{backgroundColor:"white", flexDirection:"row" }} >
         <FlatList
        data={data}
        renderItem={({item}) => 
       
        <TouchableOpacity style={{width:80, height:80, alignItems:"center",  margin:8}} onPress={()=>{navigation.navigate('Category')}}>
        <Image source={item.uri}/>
        <Text style={{fontSize:10, marginTop:4}}>{item.categoryName}</Text>
        </TouchableOpacity>}
        keyExtractor={item => item.id}
        numColumns={numColumns}
      />
        {/* {data.map((datum, index)=>(
            <TouchableOpacity key={index} style={{width:70, height:80, alignItems:"center",  marginHorizontal:8}}>
                <Image source={datum.uri}/>
                <Text style={{fontSize:10, marginTop:4}}>{datum.categoryName}</Text>
            </TouchableOpacity>
        ))} */}
      
    </View>
  )
}

export default HomeCategory