import React from 'react';
import { ScrollView, StyleSheet,View,Image,Text} from 'react-native';
import { Button, Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';



function HomeScreen ({ navigation }) {
 
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
        </View>
        
        
      
      
 <ScrollView style={styles.scrollView}>
          
 

            <Card.Content>
              <Button style={styles.Btn}mode="contained" onPress={() => navigation.navigate('Register')}>
                Register
              </Button>
              
              <Button style={styles.Btn}mode="contained" onPress={() => navigation.navigate('Sign')}>
                Sign Up
              </Button>
            
            </Card.Content>
           
         

          
        </ScrollView>
        </View>
        
        
      )
      
}



const styles = StyleSheet.create({
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
    marginTop:50,
    color:'#000080',
    
    fontWeight:'bold'
    
 
   },
   Btn:{
    marginBottom:10
  }
  
  
});

export default HomeScreen;