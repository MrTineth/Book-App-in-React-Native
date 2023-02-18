import React from 'react';
import { ScrollView, StyleSheet,Image,View ,Text} from 'react-native';
import { Button, Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';


function TheCall ({ navigation }) {
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
          uri: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572292506-41A0yff934L.jpg?crop=1xw:0.999xh;center,top&resize=640:*'
          }}
        />
        </View>
        <Text style={styles.title}>
        Book Name :- The Call of the Wild  
        {'\n'}{'\n'}Author :-  Jack London 
        {'\n'}{'\n'}Description :- The Call of the Wild is a novel by Jack London published in 1903. The story is set in the Yukon during the 1890s Klondike Gold Rush—a period in which strong sled dogs were in high demand. The novel's central character is a dog named Buck, a domesticated dog living at a ranch in the Santa Clara Valley of California as the story opens. Stolen from his home and sold into service as sled dog in Alaska, he reverts to a wild state. Buck is forced to fight in order to dominate other dogs in a harsh climate. Eventually he sheds the veneer of civilization, relying on primordial instincts and learned experience to emerge as a leader in the wild.London lived for most of a year in the Yukon collecting material for the book. 
        {'\n'}{'\n'}Price :- Rs.1000.00
        <Text style={styles.Discount}>
        {'\n'}{'\n'}Discount :- 5%
        </Text>
        {'\n'}{'\n'}13,381 Ratings 
        
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

export default TheCall;