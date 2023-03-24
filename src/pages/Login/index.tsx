import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Keyboard, Alert } from 'react-native'
import React, { useState } from 'react'
import { Logo } from '../../assets'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios';
import { loginFailure, loginSuccess } from '../../components/Redux/Redux';
import { useDispatch, useSelector } from 'react-redux';


interface LoginCredentials {
  txtUsername: string;
  txtPassword: string;
}


interface Props {
    navigation: any;
  }

const Login: React.FC<Props> = ({ navigation }) => {
  
    const [txtUsername, setTxtUsername] = useState('');
    const [txtPassword, setTxtPassword] = useState('');
    
    const dispatch = useDispatch();

    async function loginUser(loginInput: LoginCredentials): Promise<void> {
      const apiUrl = 'https://ellafroze.com/api/external/doLogin';
    
      try {
         const response = await axios.post(apiUrl, loginInput);
         //alert(JSON.stringify(response.data.status))
         if (!response.data.status){
          alert(response.data.message);
         } else {
          //navigation.navigate("Login")
          alert(response.data.message)
         }   
      } catch (error) {
        console.error(error);
        throw error;
      }
    }

    const handleLoginUser = async () => {
      try {
        await loginUser({  txtUsername, txtPassword });
      } catch (error) {
        console.error(error);
      }
    };

  
    
    
    // const handleLogin = async () => {
    //   try {
    //     const userData = await login(txtUsername, txtPassword);
    //     // do something with userData, e.g. store it in AsyncStorage
    //     if (userData.success) {
    //       navigation.navigate('MainApp');
    //     } else {
    //       // handle invalid username or password
    //       alert("Account not Found")
    //     }
    //   } catch (error) {
    //     // handle login error
    //   }
    // };

    // async function login(loginCredentials: LoginCredentials): Promise<void> {
    //   const apiUrl = 'https://ellafroze.com/api/external/doLogin';
    
    //   try {
    //     const response = await axios.post(apiUrl, loginCredentials);
    //     alert('Login successful!');
    //     navigation.navigate('MainApp')
    //     console.log('User data:', response.data);
    //   } catch (error) {
    //     console.error(error);
    //     throw error;
    //   }
    // }
    


      // const handleLogin = async () => {
      //   try {
      //     await login({ txtUsername, txtPassword });
      //   } catch (error) {
      //     console.error(error);
      //   }
      // };

      
  return (
    <View style={{flex: 1, backgroundColor:"#FA0000", margin: 0, justifyContent:'center'}}>
       <View style={{alignSelf:'center'}}><Image source={Logo} style={styles.logo}/></View>
      <View style={{width:'80%', justifyContent:'center', marginLeft:40}}>
        <View style={{marginHorizontal:10}}>
            <Text style={{color:'white', fontSize:20, fontWeight:'bold'}}>Masuk</Text>
        </View>
      <View style={{ marginHorizontal: 10, marginTop: 10}}>
      <Text style={{fontWeight:"500", color:'white'}}>Email</Text>
      <TextInput
      value={txtUsername}
      onChangeText={setTxtUsername}
      autoCapitalize="none"  
      style={{borderColor:"white", fontWeight:'bold', borderWidth:1, alignItems: "center", justifyContent:"center", padding:10,backgroundColor:'white', marginVertical:5, borderRadius:6}}
      />
    
    </View>
    <View style={{ marginHorizontal: 10, marginTop: 10}}>
      <Text style={{fontWeight:"500", color:'white'}}>Password</Text>
      <TextInput
      value={txtPassword}
      onChangeText={setTxtPassword} 
      autoCapitalize="none" 
      secureTextEntry={true} 
      style={{borderColor:"white", fontWeight:'bold', borderWidth:1, alignItems: "center", justifyContent:"center", padding:10, backgroundColor:'white', marginVertical:5, borderRadius:6}}
      />
    </View>
    <View style={{ marginHorizontal: 10, marginTop: 40}}>
      <TouchableOpacity onPress={handleLoginUser} style={{backgroundColor:"#FFCB00", borderRadius:15, alignItems:"center", paddingVertical:10}}>
        <Text style={{color:"black", fontWeight:"bold"}}>MASUK</Text>
      </TouchableOpacity>
      <View style={{flexDirection:"row", justifyContent:"space-between", marginTop:8}}> 
      <TouchableOpacity onPress={()=>navigation.navigate("ForgetPassword")}>
        <Text style={{color:"white", marginTop:8, marginLeft:5}}>Lupa Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("SignUp")}>
        <Text style={{color:"white", marginTop:8, marginLeft:5}}>Daftar disini</Text>
      </TouchableOpacity>
      </View>
      
    </View>
    </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({ 
    logo: {
    width: 254,
    height: 254,
  },})