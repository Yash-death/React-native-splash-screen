import { Text, View } from 'react-native'
import React, { Component } from 'react'

export class HomeScreen extends Component {
  render() {
    return (
      <View style={{flex:1,alignItems:'center',justifyContent:'center'
      ,backgroundColor:'#f25600'}}>
        <Text style={{fontSize:60,color:'#fff',fontWeight:'800'}}>Rocket world</Text>
      </View>
    )
  }
}

export default HomeScreen