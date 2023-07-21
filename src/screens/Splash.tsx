import React, { Dispatch, SetStateAction } from "react";
import { View } from "react-native";
import LottieView from 'lottie-react-native';

interface SplashProps {
    setIsLoading : Dispatch<SetStateAction<boolean>>;
}
export default function Splash({
    setIsLoading
} :SplashProps
):JSX.Element{
    return(
        <View style ={{flex:1,alignItems:'center',justifyContent:'center',margin:0,backgroundColor:"#fff"}}>
            <LottieView
            source = {require("../assets/launchrocket.json")}
            autoPlay
            loop={false}
            resizeMode="cover"
            onAnimationFinish={() =>setIsLoading(false)}
            />
        </View>
    )
}