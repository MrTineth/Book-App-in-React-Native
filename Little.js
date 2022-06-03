import React from 'react';
import { ScrollView, StyleSheet,Image,View ,Text} from 'react-native';
import { Button, Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';


function Little ({ navigation }) {
    return (
      


      
        <ScrollView style={styles.scrollView}>
          <Card style={styles.card}>
          
            
            <View style={styles.container}>
            <View style={styles.image}>
        <Image source={{
           width: 250,
           height: 370,
           
          padding: 50,
          alignItems: 'center',
          uri: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572292680-51xJASXQJwL.jpg?crop=1.00xw:0.978xh;0,0.0120xh&resize=640:*'
          }}
        />
        </View>
        <Text style={styles.title}>
        Book Name :- Little Women (150th Anniversary Edition) 
        {'\n'}{'\n'}Author :- Louisa May Alcott
        {'\n'}{'\n'}Description :- The beautiful 150th anniversary edition of Louisa May Alcott's classic tale of the four March sisters, featuring new illustrations and an introduction by New York Times bestselling author J. Courtney Sullivan
        {'\n'}{'\n'}Price :- Rs.3500.00
        <Text style={styles.Discount}>
        {'\n'}{'\n'}Discount :- 30%
        </Text>
        {'\n'}{'\n'}13,000 Ratings 
        
      </Text>
        </View>
        
            <Card.Content>
              <Button mode="contained" onPress={() => navigation.navigate('Cart')}>
              Add to Cart
              </Button>
              
            
            </Card.Content>
            
          </Card>

          
        </ScrollView>
        
      )
}



const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: DefaultTheme.colors.background,
    paddingTop: 10
  },
  image:{
   
    alignItems: 'center',
    marginBottom:10,
    marginTop:5
    
 

  },
  card: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor:'black'
    
    
  },
  title:{
    fontSize:16,
    textAlign:'left',
    marginTop:10,
    color:'white',
    fontWeight:'bold',
    marginBottom:15
    
 
   },
   Discount:{
    color:"red"
  }
  
});

export default Little;