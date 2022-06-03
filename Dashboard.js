import React from 'react';
import { ScrollView, StyleSheet,Image,View ,TextInput} from 'react-native';
import { Button, Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';




function DashBoard ({ navigation }) {

    return (
    
     
  
      <ScrollView style={styles.scrollView}>
         
          <Card style={styles.card}>
          
            <Card.Title title="Book Categories" />
            <View style={styles.container}>
            <View style={styles.image}>
        <Image source={{
          width: 320,
          height: 230,
          
          padding: 50,
          alignItems: 'center',
          uri: 'https://hips.hearstapps.com/hmg-prod/images/old-books-arranged-on-shelf-royalty-free-image-1572384534.jpg?crop=0.668xw:1.00xh;0,0&resize=2048:*'
          }}
        />
        </View>
        </View>
            <Card.Content>
              <Button style={styles.Btn}mode="contained" onPress={() => navigation.navigate('Advencture')}>
              Action and Adventure
              </Button>
              
              <Button style={styles.Btn}mode="contained" onPress={() => navigation.navigate('Classics')}>
              Classics
              </Button>
			       
              <Button style={styles.Btn}mode="contained" onPress={() => navigation.navigate('Comic')}>
              Comic Book

              </Button>
			  
              <Button style={styles.Btn}mode="contained" onPress={() => navigation.navigate('Mystery')}>
              Mystery

              </Button>
              
              <Button style={styles.Btn}mode="contained" onPress={() => navigation.navigate('Fantasy')}>
              Fantasy

              </Button>
             
              
              <Button style={styles.Btn}mode="contained" onPress={() => navigation.navigate('Romance')}>
              Romance

              </Button>
              
              <Button style={styles.Btn}mode="contained" onPress={() => navigation.navigate('Short_Stories')}>
              Short Stories

              </Button>
              
              <Button style={styles.Btn}mode="contained" onPress={() => navigation.navigate('Profile')}>
              Profile

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
    
  },
  Btn:{
    marginBottom:10
  }
  
});

export default DashBoard;