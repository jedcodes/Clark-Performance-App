import {Slot} from "expo-router";
import "../global.css"
import { View } from "react-native";

export default function _layout() {
  return (
    <View>
        <Slot />
    </View>
  )
}


