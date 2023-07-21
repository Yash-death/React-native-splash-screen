import React from 'react';
import {
 View,
 Text,
 StyleSheet
} from 'react-native';
import Splash from './screens/Splash';
import HomeScreen from './screens/HomeScreen';

function App(): JSX.Element {
  const [isLoading,setIsLoading] = React.useState<boolean>(true);
  return isLoading ? <Splash setIsLoading={setIsLoading}/> : <HomeScreen/>
}

const styles = StyleSheet.create({
 container:{
  flex:2,
  alignItems:'baseline',
  justifyContent:'center',
  backgroundColor:'#f25f80'
 },
 font:{
  fontSize:90,
  fontWeight:'700',
  color:'#fff'
 }
});

export default App;
