import React, { Component } from 'react';
import { Text, View, StyleSheet,SafeAreaView,TouchableOpacity,Platform,StatusBar} from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
     <View style={StyleSheet.container}>
         <SafeAreaView style={Styles.droidSafeArea}/>    
            <View style={styles.titleBar}>
              <Text style={styles.titleText}>Stellar </Text>
           ,  <Text style={styles.titleText}>App</Text>
            </View>
            <TouchableOpacity style={styles.routeCard}>
                <Text style={styles.routeText}>Star Map</Text>
            </TouchableOpacity>
            <Touchable style={styles.routeCard}>
                 <Text style={styles.routText}>SpaceCraft</Text>
            </Touchable>
            <Touchable style={styles.routeCard}>
              <Text style={styles.routeText}>Daily Pictures</Text>
            </Touchable>
     </View>
    
        )
    }
}
const styles= StyleSheet.create({
    container:{
        flex:0.12
},
droidSafeArea:{
    marginTop: Platform.OS ==="android" ? StatusBar.currentheight :0
},
routeCard: {
    flex:0.12,
    justifyContent:"center",
    alignItems:"center",
    margin:10,
    marginLeft:30,
    marginRight:30,
    borderRadius:100,
    backgroundColor:"white"
},
titleBar:{
    flex:0.5,
    justifyContent:"center",
    alignItems:"center"
},
titleText:{
    fontSize:40,
    fntWeight:"bold",
    color:"white"
},
routeText:{
    fontSize:25,
    fontWeight:"bold",
    color:"#D11583",
    justidyContent:"center",
    alignItems:"center"
  }
});