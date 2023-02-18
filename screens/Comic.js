import React from 'react';
import { ScrollView, StyleSheet,Image,View } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';


function Comic ({ navigation }) {
    return (


      
        <ScrollView style={styles.scrollView}>
        
          
          <View style={styles.container}>
        <View style={styles.image}>
        <Image source={{
          width: 250,
          height: 370,
          
          padding: 50,
          alignItems: 'center',
          uri: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572292885-41ZJD5Dw5KL.jpg?crop=1.00xw:0.962xh;0,0.0200xh&resize=640:*'
          }}
        />
        </View>
        
            <Card.Content>
              <Button style={styles.Btn}mode="contained" onPress={() => navigation.navigate('Fuel Details')}>
              DC Comics Watchmen

              </Button>
			
              
              <View style={styles.image}>
        <Image source={{
          width: 250,
          height: 370,
          
          padding: 50,
          alignItems: 'center',
          uri: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572292913-51S12ntkIbL.jpg?crop=1xw:0.975xh;center,top&resize=640:*'
          }}
        />
        </View>
              <Button style={styles.Btn}mode="contained" onPress={() => navigation.navigate('Diesel')}>
              The Walking Dead
              </Button>
			  
              <View style={styles.image}>
        <Image source={{
          width: 250,
          height: 370,
          
          padding: 50,
          alignItems: 'center',
          uri: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572292943-418D9yYGB3L.jpg?crop=0.900xw:1.00xh;0.0916xw,0&resize=640:*'
          }}
        />
        </View>
              <Button style={styles.Btn}mode="contained" onPress={() => navigation.navigate('')}>
              HarperOne The Boy

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
  Btn:{
    marginBottom:10
  }
  
});

export default  Comic;