import react from "react";
import {View,Text,Button,TouchableOpacity,Image,StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MyImage from "./assets/favicon.png"
function App(){
    return(
        <SafeAreaView>
        {/* <View> */}
             <Text style={{"color":"violet"}}>Hello</Text>
              <Text>All</Text>
               <Text>Good Morning</Text>
               <TouchableOpacity>
                <Text style={MyStyles.mytext}>I'm Sai Durga</Text>
                </TouchableOpacity>
                <Button title="Click Me"/>
                <Image source={MyImage}/>
        {/* </View> */}
        </SafeAreaView>
    )
}
export default App;
const MyStyles=StyleSheet.create({
  mytext:{
    color:"green",
    fontSize:24,
    fontWeight:900
  }
})