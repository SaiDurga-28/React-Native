// import react from "react";
// import {View,Text,Button,TouchableOpacity,Image,StyleSheet} from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import MyImage from "./assets/favicon.png"
// function App(){
//     return(
//         // <SafeAreaView>
//         // {/* <View> */}
//         //      <Text style={{"color":"violet"}}>Hello</Text>
//         //       <Text>All</Text>
//         //        <Text>Good Morning</Text>
//         //        <TouchableOpacity>
//         //         <Text style={MyStyles.mytext}>I'm Sai Durga</Text>
//         //         </TouchableOpacity>
//         //         <Button title="Click Me"/>
//         //         <Image source={MyImage}/>
//         // {/* </View> */}
//         // </SafeAreaView>
//         // <View style={MyStyles.parent}>
//         //    <View style={MyStyles.child1}></View>
//         //    <View style={MyStyles.child2}></View>
//         // </View> 
//       )
// }
// export default App;
import react from "react";
import { View, Text, Button, TouchableOpacity, Image, StyleSheet } from "react-native";
import MyImage from "./assets/favicon.png"
import { StatusBar } from "react-native";
import Component from "./Component";
import { SafeAreaProvider } from "react-native-safe-area-context";
const App = () => {
  return (
    <>
      <SafeAreaProvider>
        <Component />
      </SafeAreaProvider>
    </>
  )
}

export default App;
// const MyStyles=StyleSheet.create({
//   // mytext:{
//   //   color:"green",
//   //   fontSize:24,
//   //   fontWeight:900
//   // }
//   // parent:{
//   //   width:"100%",
//   //   height:500,
//   //   backgroundColor:"blue",
//   //   // flexDirection:"row",
//   //   // justifyContent:"space-around",
//   //   // alignItems:"center",
//   //   // position:"relative"
//   //   // borderWidth:10,
//   //   // borderColor:"red"
//   // },
//   //  child1:{
//   //   width:150,
//   //   height:150,
//   //   backgroundColor:"green"
//   //   // position:"relative",
//   //   // top:50,
//   //   // left:-75
//   //   // position:"absolute",
//   //   // bottom:0
//   //   // borderWidth:10,
//   //   // borderColor:"red"
//   // },
//   // child2:{
//   //   width:150,
//   //   height:150,
//   //   backgroundColor:"green",
//   //   // marginLeft:30,
//   //   // marginTop:20
//   // }
// })