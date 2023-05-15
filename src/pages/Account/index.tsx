import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParams } from '../../../App';
import { AccountIcon, AddressIcon, ChatIcon, HistoryIcon } from '../../assets/icons';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';




interface User {
  Name: string;
  Email: string;
  Phone: string;
}

const API_BASE_URL = 'https://ellafroze.com/api/external/doLogout'; // replace with your API base URL

interface LogoutResponse {
  success: boolean;
}



export default function Account() {
  const navigation = useNavigation();
  // const navigationLogout = useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const [users, setUsers] = useState<User>();
  const [loading, setLoading] = useState(true);  
  

  const fetchData = async (tokenData: string) => {
    const url = `https://ellafroze.com/api/external/getUser?_cb=onCompleteFetchUserDetail&_p=&_s=${tokenData}`;
    const response = await axios.get(url);
    setUsers(response.data.data);
    setLoading(false)
  }

  

  const handleLogout= async () => {
    try {
      await AsyncStorage.removeItem('tokenID');
      //alert('loggedOut')
      navigation.navigate("Login");
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogoutPress = () => {
    Alert.alert(
      'Confirmation',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Confirm',
          onPress: handleLogout,
          style: 'destructive',
        },
      ],
      { cancelable: false }
    );
  };

  // const handleDeleteConfirm = async () => {
  //   try {
  //     await deleteAddress({ hdnFrmID, _s });
  //     navigation.goBack()
  //   } catch (error) {
  //     console.error(error);
  //   }
  //   console.log('Item deleted');
  // };

  const fetchToken = async () => {
    const tokenData = await AsyncStorage.getItem('tokenID')
    fetchData(tokenData == null ? "" : tokenData);
    
  };

  useEffect(() => {
    
    navigation.addListener(
      'focus',
      payload => {
        fetchToken()
      }
    )
    
  }, []);


  return (
      
    <View style={{marginHorizontal:10, marginVertical:15}}>
      <View style={{
          margin:7,
          alignItems:"center",
          borderRadius:9, 
          paddingVertical:15,
          backgroundColor: '#fff',
          elevation:3,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          }}>
            {loading ? (<View style={{backgroundColor:"#EAEAEA", width:70, height:20}}/>) : (
         <Text style={{fontWeight:"bold", fontSize:16}}>{users?.Name}</Text>
            )}
            {loading ? (<View style={{backgroundColor:"#EAEAEA", width:90, height:20, marginTop:5}}/>) : (
        <Text style={{fontSize:16}}>{users?.Phone}</Text>
        )}
         {loading ? (<View style={{backgroundColor:"#EAEAEA", width:120, height:20, marginTop:5}}/>) : (
        <Text style={{fontSize:16}}>{users?.Email}</Text>
        )}
      </View>
      <Text style={{marginBottom:10, fontWeight:"bold", fontSize:15}}>Pengaturan Akun</Text>
      <View style={{
          margin:7,
          borderRadius:9, 
          paddingVertical:3,
          backgroundColor: '#fff',
          elevation:3,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          }}>
        <TouchableOpacity style={{flexDirection:"row", gap:10, paddingVertical:15, marginLeft:30}}
       onPress={()=>{navigation.navigate('AccountDetail')}}
       >
          <AccountIcon/>
          <Text style={{fontWeight:"700"}}>Data Diri</Text>
        </TouchableOpacity>

      </View>
      <View style={{
          margin:7,
          borderRadius:9, 
          paddingVertical:3,
          backgroundColor: '#fff',
          elevation:3,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          }}>
        <TouchableOpacity style={{flexDirection:"row", gap:10, paddingVertical:15, marginLeft:30}}
       onPress={()=>{navigation.navigate('Transaction')}}
       >
          <HistoryIcon/>
          <Text style={{fontWeight:"700"}}>Riwayat Pesanan</Text>
        </TouchableOpacity>

      </View>
      <View style={{
          margin:7,
          borderRadius:9, 
          paddingVertical:3,
          backgroundColor: '#fff',
          elevation:3,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          }}>
        <TouchableOpacity style={{flexDirection:"row", gap:10, paddingVertical:15, marginLeft:30}}
       onPress={()=>{navigation.navigate('Contact')}}
       >
          <ChatIcon/>
          <Text style={{fontWeight:"700"}}>Hubungi Admin</Text>
        </TouchableOpacity>

      </View>
      <View style={{
          margin:7,
          borderRadius:9, 
          paddingVertical:3,
          backgroundColor: '#fff',
          elevation:3,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          }}>
        <TouchableOpacity style={{flexDirection:"row", gap:10, paddingVertical:15, marginLeft:30}}
       onPress={()=>{navigation.navigate('AccountAddress')}}
       >
          <AddressIcon/>
          <Text style={{fontWeight:"700"}}>Ubah Alamat</Text>
        </TouchableOpacity>

      </View>
      <View style={{
          margin:7,
          borderRadius:9, 
          paddingVertical:3,
          backgroundColor: '#fff',
          elevation:3,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          }}>
        <TouchableOpacity style={{flexDirection:"row", gap:10, paddingVertical:15, marginLeft:30}}
       onPress={handleLogoutPress}
       >
          <AccountIcon/>
          <Text style={{fontWeight:"700"}}>Logout</Text>
        </TouchableOpacity>
       

      </View>
      {/* <Button title='Account Detail' onPress={()=>{navigation.navigate('AccountDetail')}}/>
      <Button title='Account Address' onPress={()=>{navigation.navigate('AccountAddress')}}/> */}
      
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
