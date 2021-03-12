import React,{Component} from 'react'
import{View,Image,TextInput,Text,ScrollView,ImageBackground,Dimensions,TouchableOpacity,SectionList,StyleSheet,StatusBar} from 'react-native'
import {Footer,Header,Left,Right} from 'native-base'
import { SliderPicker } from 'react-native-slider-picker';

const DATA = [
    {
      title: "Mega Contest",
      data: [
          {price:"50 Lakh",wprice:"10000",left:166970,teams:200000,joinfree:"34"},
          {price:"15 Lakh",wprice:"11500",left:156970,teams:200000,joinfree:"10"}
      ]
    },
    {
      title: "Hot Contest",
      data: [
        {price:"50 Lakh",wprice:"10000",left:146970,teams:200000,joinfree:"34"},
        {price:"15 Lakh",wprice:"10000",left:136970,teams:200000,joinfree:"10"},
      ]
    },
  ];
  const Item = ({ title }) => (
    <View style={{height:200,marginTop:5,borderRadius:20,margin:10,}}>
    <View style={{ backgroundColor: 'white',height:150,elevation:10,width:"100%",borderRadius:10,padding:10}}>
       <View style={{flexDirection:"row"}}>
            <Text>Total Winnings</Text>
            <Text style={{marginLeft:"50%"}}>Winners</Text>   
        </View>
        <SliderPicker 
            minLabel={''}
            maxLabel={''}
            maxValue={160000}
            defaultValue={parseInt(title.wprice)}
            sliderInnerBackgroundColor	={"floralwhite"}
            showFill={true}
            fillColor={'black'}
            labelFontWeight={'bold'}
            showNumberScale={true}
            showSeparatorScale={true}
            buttonBackgroundColor={'white'}
            buttonBorderColor={"#6c7682"}
            buttonBorderWidth={1}
            scaleNumberFontWeight={'300'}
            scaleBorderColor={"black"}
            widthPercentage={80}
          />
        <View style={{flexDirection:"row"}}>
            <Text style={styles.title}>Rs. {title.price}</Text>
            <Text style={{marginLeft:"55%",fontWeight:"bold"}}>{title.wprice}</Text> 
        </View>
        <View style={{flexDirection:"row",marginTop:10}}>
        
            <Text style={{}}>Rs. {title.left}</Text>
            <Text style={{marginLeft:"45%"}}>{title.teams} Teams</Text>
        </View>
        
    </View>
    <View style={{flexDirection:"row",padding:5,borderWidth:0.2,width:"100%",borderRadius:10,alignItems:"center",justifyContent:"center"}}>
        <Text style={styles.title}>C M</Text>
        <Text style={{marginLeft:"30%"}}>Join Free</Text>
            <TouchableOpacity style={{backgroundColor:"blue",marginLeft:"5%",height:30,width:40,alignItems:"center",justifyContent:"center",borderRadius:5}} onPress={()=>this.props.navigation.navigate('Screen3')}
            >
            <Text style={{fontWeight:"bold",color:"white"}}>{title.joinfree}</Text> 
            </TouchableOpacity>
        </View>
    </View>
  );
export default class Screen3 extends Component{
    render(){
        return(
            
            <View style={{flex:1}}>
                <Header>
                    <Left style={{flexDirection:"row",alignItems:"center"}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()} >
                    <Image source={require('../images/back1.png')} style={{width:40,height:30}}/>
                    </TouchableOpacity >
                    <View style={{marginLeft:5}}>
                    <Text style={{color:"white",fontSize:20}}>WI VS SL</Text>
                    <Text style={{color:"white"}}>04H 31M 35S</Text>
                    </View>
                    </Left>
                    <Right>
                    <Image source={require('../images/wallet.jpg')} style={{width:40,height:30}}/>
                    </Right>
                </Header>
                <ScrollView>
                <View style={{flexDirection:"row",alignItems:"center",backgroundColor:"darkblue",margin:10,borderRadius:10,padding:10}}>
                    <Text style={{color:"white",fontSize:15}}>All Contents</Text>
                    <TouchableOpacity style={{marginLeft:"70%"}}>
                    <Image source={require('../images/backarrow.png')} />
                    </TouchableOpacity>
                </View>
                <SectionList
                    sections={DATA}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => <Item title={item} />}
                    renderSectionHeader={({ section: { title } }) => (
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image source={require('../images/ff.png')} style={{width:40,height:40}}/>
                        <View>
                        <Text style={styles.header}>{title}</Text>
                        <Text>Get ready for mega winnings!</Text>
                        </View>
                        </View>
                    )}
                    />
                    </ScrollView>
                    <Footer>
                        <View style={{flexDirection:"row",alignItems:"center",margin:10}}>
                            <TouchableOpacity style={{width:"50%",borderRightWidth:1,borderColor:"white",margin:5,height:"100%",justifyContent:"center"}} onPress={()=>this.props.navigation.navigate('Screen3')}>
                            <Text style={{color:"white",fontSize:15}}>My Contests (2)</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width:"50%",margin:5}}>
                            <Text style={{color:"white",fontSize:15}}>My Play (2)</Text>
                            </TouchableOpacity>
                        </View>
                    </Footer>
                </View>
            
            
            
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      marginHorizontal: 16
    },
    item: {
      backgroundColor: "#f9c2ff",
      padding: 20,
      marginVertical: 8,
      
    },
    header: {
      fontSize: 20,
      fontWeight:"bold",
      margin:2
    },
    title: {
      fontSize:15,
      fontWeight:"bold"

    }
  });