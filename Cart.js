import React from 'react';
import { ScrollView, StyleSheet,Image,View,Text } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';


function Cart ({ navigation }) {
    return (


      
        <ScrollView style={styles.scrollView}>
        
          
          <View style={styles.container}>
        <View style={styles.image}>
        <Image source={{
          width: 250,
          height: 250,
          
          padding: 50,
          alignItems: 'center',
          uri: 'https://www.pngmart.com/files/7/Cart-PNG-Transparent.png'
          }}
        />
        </View>
        
            <Card.Content>
            <Text style={styles.title}>
            Book added to cart Successfully
      </Text>
			  
   
              <Button mode="contained" onPress={() => navigation.navigate('DashBoard')}>
              Home
              </Button>
              
            
            
            
            </Card.Content>
           </View>

          

          
        </ScrollView>
      )
}



const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: DefaultTheme.colors.background,
    paddingTop: 10,
    paddingBottom:10
  },
  Button: {
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    
  },
  image:{
   
    alignItems: 'center',
    marginBottom:10,
    marginTop:5
    
 

  },
  title:{
    fontSize:20,
    textAlign:'center',
    marginTop:10,
    color:'grey',
    fontWeight:'bold',
    marginBottom:15
    
 
   },
  
});

export default Cart;