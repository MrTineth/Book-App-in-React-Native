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
          uri: 'http://travelpoints.000webhostapp.com/images/tineth.jpeg'
          }}
        />
        </View>
        <Text style={styles.title}>
        User Name :- Tineth Vihanga
        {'\n'}{'\n'}Email :- tinethvihanga@gamil.com
        {'\n'}{'\n'}Tel :- 0763113219
        {'\n'}{'\n'}User ID :- P.T.V234455
        
        
        
      </Text>
      
              
        </View>
        
        <Card.Content>
              <Button mode="contained" onPress={() => navigation.navigate('Welcome')}>
              Log Out
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
    backgroundColor:'#2e4053'
    
    
  },
  title:{
    fontSize:16,
    textAlign:'center',
    marginTop:10,
    color:'white',
   
    fontWeight:'bold',
    marginBottom:15
    
 
   },
  
});

export default Little;