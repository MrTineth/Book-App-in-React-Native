import React from 'react';
import { ScrollView, StyleSheet,Image,View ,Text} from 'react-native';
import { Button, Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';


function Vintage ({ navigation }) {
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
          uri: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572292709-41Rdzbiqh7L.jpg?crop=1.00xw:0.974xh;0,0.0160xh&resize=640:*'
          }}
        />
        </View>
        <Text style={styles.title}>
        Book Name :- Beloved 
        {'\n'}{'\n'}Author :- Toni Morrison
        {'\n'}{'\n'}Description :- PULITZER PRIZE WINNER •NEW YORK TIMES BESTSELLER • An unflinchingly look into the abyss of slavery, from the acclaimed Nobel Prize winner. This spellbinding novel transforms history into a story as powerful as Exodus and as intimate as a lullaby.
        {'\n'}{'\n'}Price :- Rs.2500.00
        <Text style={styles.Discount}>
        {'\n'}{'\n'}Discount :- 35%
        </Text>
        {'\n'}{'\n'}2,4341 Ratings 
        
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

export default Vintage;