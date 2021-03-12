import React,{Component} from 'react'
import{View,Image,TextInput,Text,ImageBackground,TouchableOpacity,ScrollView,Dimensions} from 'react-native'

export default class Login extends Component{
    render(){
        return(
            <ScrollView>
                <View>
                    <ImageBackground source={require('../images/bl.png')} style={{width:"100%",height:Dimensions.get('window').height}}>
                        <Text style={{fontWeight:"bold",fontSize:30,marginLeft:30,marginTop:"30%",textShadowRadius:10,textShadowColor:"floralwhite"}}>Login</Text>
                        <TextInput style={{width:"80%",marginLeft:30}}
                            underlineColorAndroid="black"
                            placeholder="Enter Your Email"
                        />
                        <Text style={{alignSelf:"center",fontSize:30,margin:30}}>Or</Text>
                        <TextInput style={{width:"80%",marginLeft:30}}
                            underlineColorAndroid="black"
                            placeholder="Enter Your Phone no"
                            secureTextEntry
                        />
                        <TouchableOpacity style={{alignItems:"center",alignSelf:"flex-end",backgroundColor:"darkblue",width:"25%",height:"5%",justifyContent:"center",marginRight:30,borderRadius:10,marginTop:30}} onPress={()=>this.props.navigation.navigate('HomeScreen')}>
                            <Text style={{color:"white"}}>
                                Login   
                            </Text>
                        </TouchableOpacity>
                        <View style={{flexDirection:"row",alignSelf:"flex-end",marginRight:30,marginTop:5}}>
                        <Text style={{alignSelf:"flex-end",borderRadius:10}}>
                            Not a member?
                        </Text>
                        <TouchableOpacity >
                            <Text style={{color:"darkblue"}}>
                                Register
                            </Text>
                        </TouchableOpacity>
                        </View>
                        
                    </ImageBackground>
                </View>
            </ScrollView>
        )
    }
}