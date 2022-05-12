import React, {useState,useEffect,useRef} from 'react';
import { View, Text, StyleSheet,ImageBackground,SafeAreaView } from 'react-native';

const Home = () => {

    const index = useRef(0);
    const [text,setText] = useState('')
    const name = "Chance"

    useEffect(()=>{
        index.current=0;
        setText("");
    },[])

    useEffect(()=>{
        const id = setTimeout(()=>{
            setText((v)=> v+ name.charAt(index.current));
            index.current+=1;
            console.log(index.current,name.length)
            if(index.current-1==name.length){
                console.log("--------catch-------")
                setText('');
                index.current=0;    
            }
        },500);
        return ()=>{
            clearTimeout(id);
            // console.log("ok",index)
        }
    },[text])


    return (
        <SafeAreaView style={{
            flex:1,
            // backgroundColor: 'pink',
        }}>
            <View style={{
            flex:0.5,
            justifyContent:"center",
            alignItems:"center",
            backgroundColor: '#E1F5FE',
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            }}>
                <View>
                    <ImageBackground
                    source={require("./assets/images/img.jpeg")}
                    resizeMode={"cover"}
                    
                    style={{
                        width:200,
                        height:200,
                        justifyContent: 'flex-end',
                        alignItems:'center'

                    }}
                    >
                        <Text style={{
                            color:"white",
                            fontSize:40,
                            fontWeight:'bold'
                        }}>{text}</Text>
                    </ImageBackground>
                </View>
            </View>

            <View style={{
                flex:0.4,
                flexDirection:"column",
                // justifyContent:'center',
                //  alignItems: 'center',
                marginHorizontal:30,
                // backgroundColor:'green',    
                marginTop: 20,
            }}>
                <View>
                    <Text style={styles.textStyle}>The Personality</Text>
                    <Text style={styles.textStyle}>first connecting</Text>
                    <Text style={styles.textStyle}>app</Text>
                </View>
                <View style={{
                    flex:.6,    
                    // backgroundColor:'yellow',    
                    justifyContent:'space-around'
                }}>
                    <Text style={{
                        fontSize:16,
                        fontSize:16,
                    }}>if you were a fruit, then you'd be a fine-apple</Text>
                    <Text>Already a user? Try {" "} 
                        <Text style={{
                            fontWeight:"bold",
                            color:"#00838F"
                        }}>Signing In</Text>
                    </Text>
                </View>

            </View>

            <View style={{
                    flex:0.1,
                    // backgroundColor:'blue',
                    alignItems: 'center',
                    justifyContent:'center'
                }}>

                    <View style={{
                        backgroundColor:'white',
                        width:50,
                        height:50,
                        borderRadius:50/2,
                        justifyContent:'center',
                        alignItems: 'center',
                        backgroundColor:"#81D4FA"
                    }}>
                        <Text style={{
                            fontSize:40,
                            color:'white',
                            position: "absolute",
                        }}>{">"}</Text>
                    </View>
                    </View>
        </SafeAreaView>
    );
};


export default Home;

const styles = StyleSheet.create({
  textStyle:{
    color:'black',
    fontSize:40
  }  
})