import React,{Component} from 'react'
import{View,Image,TextInput,Text,ScrollView,ImageBackground,Dimensions,TouchableOpacity,SectionList,StyleSheet,StatusBar} from 'react-native'
import {Footer,Header,Left,Right, Title} from 'native-base'

const DATA = [
    {
      title: "Upcoming Matches",
      data: [
          {team1:"MI",team2:"CSK",uri1: require("../images/team1.jpg"),uri2:require("../images/team2.jpg"),type:"Karnataka Premier"},
          {team1:"SL",team2:"BIJ",uri1: require("../images/team1.jpg"),uri2:require("../images/team2.jpg"),type:"English T20 Blast"},
          {team1:"DUR",team2:"WAS",uri1: require("../images/team1.jpg"),uri2:require("../images/team2.jpg"),type:"Karnataka Premier"},
          {team1:"SS",team2:"LT",uri1: require("../images/team1.jpg"),uri2:require("../images/team2.jpg"),type:"English T20 Blast"},
      ]
    }
  ];
  const Item = ({ title }) => (
      <View style={{backgroundColor:"white",height:150,marginTop:10,margin:10,elevation:10}}>
        <Text style={{textAlign:"center"}} >{title.type}</Text>
        <View style={{height:80,borderRadius:20,margin:10,flexDirection:"row",alignItems:"center"}}>
        <Image source={title.uri1} style={{width:50,height:50}}/>
        <Text style={{fontWeight:"bold",marginLeft:10}}>{title.team1} </Text>
        <View style={{marginLeft:"20%",}}>
       
        <Text style={{fontWeight:"bold"}}>VS</Text>
        
        </View>
        <Text style={{marginLeft:"20%",fontWeight:"bold",marginRight:10}}>{title.team2}</Text>
        <Image source={title.uri2} style={{width:50,height:50}}/>
        </View>
        <Text style={{fontWeight:"bold",textAlign:"center"}}>23h 35m 2s</Text>
    </View>
  );
export default class Screen3 extends Component{
    
    render(){
        return(
            
            <View style={{flex:1,backgroundColor:"white"}}>
                <Header style={{height:100,alignSelf:"flex-start"}}>
                    <View>
                    <View style={{flexDirection:"row"}}>
                    <TouchableOpacity>
                    <Image source={require('../images/user.png')} style={{margin:10}}/>
                    </TouchableOpacity>
                    <Text style={{fontWeight:"bold",fontSize:30,textShadowRadius:10,textShadowColor:"floralwhite",marginLeft:"30%"}}>Logo</Text>
                    <TouchableOpacity style={{marginLeft:"25%",margin:10}}>
                    <Image source={require('../images/notifications.png')} style={{width:25,height:25}}/>
                    </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:"row",marginTop:"5%"}}>
                    <TouchableOpacity style={{borderBottomColor:"yellow",borderBottomWidth:0.5}}>
                    <Text style={{color:"yellow",fontSize:20}}>Cricket</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft:"60%"}}>
                    <Text style={{color:"white",fontSize:20}}>Kabaddi</Text>
                    </TouchableOpacity>
                    </View>
                    </View>
                </Header>
                <ScrollView>
                <View style={{width:"100%",alignSelf:"center",margin:10,height:100}}>
                    <Image source={require('../images/hhh.jpg')} style={{width:"100%",height:"100%"}}/>
                    
                </View>
                <SectionList
                    sections={DATA}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => <Item title={item} />}
                    renderSectionHeader={({ section: { title } }) => (
                        <View style={{alignItems:"center"}}>
                        <Text style={styles.header}>{title}</Text>
                        </View>
                    )}
                    />
                    </ScrollView>
                    <Footer style={{backgroundColor:"floralwhite",borderTopColor:"white",borderWidth:1}}>
                       <TouchableOpacity > 
                           <Image source={require('../images/home.png')} style={{marginLeft:15,marginRight:110,margin:10}}/>
                           </TouchableOpacity>
                           <TouchableOpacity > 
                           <Image source={require('../images/heart.png')} style={{marginRight:110,margin:10}}/>
                           </TouchableOpacity>
                           <TouchableOpacity > 
                           <Image source={require('../images/User-blue-icon.png')} style={{marginRight:10,width:35,height:35,margin:10}}/>
                           </TouchableOpacity>
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
      fontSize: 25,
      margin:2,
      textAlign:"center"
    },
    title: {
      fontSize:15,
      fontWeight:"bold"

    }
  });