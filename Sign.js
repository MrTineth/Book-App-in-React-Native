import React from 'react';
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet,View,Image,Text,TextInput,TouchableOpacity} from 'react-native';
import { Button, Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';



function Sign ({ navigation }) {
 
    return (

      <View style={styles.container}>

      <Text style={styles.title}>
        Bookly
      </Text>

      <View style={styles.image}>
        <Image source={{
          width: 200,
          height: 200,
          
          padding: 50,
          alignItems: 'center',
          uri: 'https://icon-library.com/images/book-png-icon/book-png-icon-16.jpg'
          }}
        />
         <StatusBar style="auto" />
        </View>
        <View style={styles.container1}>
        <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          
        />
        
        </View>
        <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
        </View>
      
      
      
        
   
      
 <ScrollView style={styles.scrollView}>
          
 

            <Card.Content>
             
            
              <Button mode="contained" onPress={() => navigation.navigate('DashBoard')}>
                Go To DashBoard
              </Button>
            
            </Card.Content>
           
         

          
        </ScrollView>

        </View>
        
        
        
      )
      
}



const styles = StyleSheet.create({
    container1: {
        flex: 1,
        marginTop:-50,
        marginBottom:170,
        alignItems: "center",
        justifyContent: "center",
      },

  scrollView: {
    backgroundColor: DefaultTheme.colors.background,
    paddingTop: 10
  },
  card: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop:'50%'
  },
  image:{
   
    alignItems: 'center',
    marginBottom:200,
    marginTop:30
    
 

  },
  title:{
    fontSize:35,
    textAlign:'center',
    marginTop:10,
    color:'#000080',
    fontWeight:'bold'
    
 
   },
   inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "80%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    
  },
  
  
});

export default Sign;