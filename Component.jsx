import react from "react";
import { View ,StyleSheet,StatusBar,Text,FlatList,Image,TextInput,Button} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
// import sri_img from "./assets/sri_img.jpeg";
// import uma_img from "./assets/uma_img.webp";
// import hasee_img from "./assets/hasee_img.jpg";
// import dharani_img from "./assets/dharani_img.jpg";
// import nikhila_img from "./assets/nikhila_img.webp";
// import neha_img from "./assets/neha_img.webp";
// import pooja_img from "./assets/pooja_img.jpg";
const Component = () =>{
    const Results = useSafeAreaInsets();
    // const MyData=[
    //     {
    //         id:1,
    //         name:"Sri❤️",
    //         img:sri_img,
    //         msg:"Good Morning raa☺️"
    //     },
    //      {
    //         id:2,
    //         name:"Uma💜",
    //         img:uma_img,
    //         msg:"Em chepthunnaru class lo?"
    //     },
    //      {
    //         id:3,
    //         name:"Hasee💜",
    //         img:hasee_img,
    //         msg:"MongoDB chesesava"
    //     },
    //      {
    //         id:4,
    //         name:"Dharani✨",
    //         img:dharani_img,
    //         msg:"Wiser raddham afternoon okna?"
    //     },
    //      {
    //         id:5,
    //         name:"Nikhila✨",
    //         img:nikhila_img,
    //         msg:"Class ki ravatle"
    //     },
    //      {
    //         id:6,
    //         name:"Neha💫",
    //         img:neha_img,
    //         msg:"Quantum cheyyatle Sai inka"
    //     },
    //      {
    //         id:7,
    //         name:"Pooja💫",
    //         img:pooja_img,
    //         msg:"Class ki vasthunnava?"
    //     }
    // ]
    // console.log(Results)
    const Fun=(event)=>{
        console.log(event.nativeEvent.text);
    }
    const Fun1=(event)=>{
        console.log('Pressed',new Date());
    }
    return(
        <>
            <StatusBar barStyle="light-content" hidden />
            <View style={[Mystyles.MystatusBar,{paddingTop:Results.top}]}>
            </View>
            {/* <Text>Aditya university</Text> */}
            {/* <FlatList
            data={MyData}
            renderItem={({item})=>(
                <View style={Mystyles.parent}>
                    <View style={Mystyles.imageview}>
                        <Image  style={Mystyles.imagetag} source={item.img}/>
                    </View>
                    <View style={Mystyles.infoparent}>
                        <Text style={Mystyles.sendname}>{item.name}</Text>
                        <Text style={Mystyles.lastmsg}>{item.msg}</Text>
                    </View>
                </View>
            )}
             keyExtractor={(item)=>item.id}
             /> */}
             <TextInput
                placeholder="Enter your name"
                // keyboardType="numeric"
                onChange={(event)=>Fun(event)}
             />
             <Button title="Click me" onPress={Fun1}/>
        </>
    )
}
export default Component;

const Mystyles = StyleSheet.create({
    MystatusBar:{
        backgroundColor:"green"
    }
    // parent:{
    //     width:"100%",
    //     flexDirection:"row",
    //     marginVertical:10,
    //     backgroundColor:"lightgray"
    // },
    // imageview:{
    //     width:100,
    //     height:100
    // },
    // imagetag:{
    //     width:"100%",
    //     height:"100%",
    //     borderRadius:50
    // },
    // infoparent:{
    //    justifyContent:"space-evenly",
    //    marginLeft:10
    // },
    // sendname:{
    //     fontSize:20
    // },
    // lastmsg:{
    //     fontSize:16
    // }
})