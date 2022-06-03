import React from 'react';
import { ScrollView, StyleSheet,Image,View ,Text} from 'react-native';
import { Button, Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';


function Mockingbird ({ navigation }) {
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
          uri: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572292658-51IXWZzlgSL.jpg?crop=1xw:0.996xh;center,top&resize=640:*'
          }}
        />
        </View>
        <Text style={styles.title}>
        Book Name :- To Kill a Mockingbird 
        {'\n'}{'\n'}Author :- Harper Lee
        {'\n'}{'\n'}Description :- Voted America's Best-Loved Novel in PBS's The Great American Read

Harper Lee's Pulitzer Prize-winning masterwork of honor and injustice in the deep South—and the heroism of one man in the face of blind and violent hatred
        {'\n'}{'\n'}Price :- Rs.4999.00
        <Text style={styles.Discount}>
        {'\n'}{'\n'}Discount :- 60%
        </Text>
        {'\n'}{'\n'}15,381 Ratings 
        
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

export default Mockingbird;