import React from 'react';
import {View, 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    Dimensions, 
    ScrollView
} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome"; //icons

const screen = Dimensions.get('window'); 
const TraCuu = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <View style={{height:140 , alignItems:'center',justifyContent:'center'}}>
                    <TouchableOpacity
                        style={{
                            position:'absolute',
                            bottom:20,
                            left:20
                        }}
                        onPress={()=>{navigation.navigate("Home")}}
                    >
                        <Icon name="arrow-left" size={30} color={'white'} />
                    </TouchableOpacity>
                    
                    <Text style={{color:'white',fontSize:24,fontWeight:'bold'}}>Chọn tuyến xe</Text>
                </View>
                <View style={{height:60,flex:1,flexDirection:'row'}}>
                    <TouchableOpacity
                        style={styles.btn1}
                    >
                        <Text style={styles.text_2}>Tất cả</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btn1}
                    >
                        <Text  style={styles.text_1}>Yêu thích</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* <ScrollView 
                style={{}}
            >

            </ScrollView> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    topBar:{
        backgroundColor:'#1B202D',
        height:200
    },
    btn1:{
        width:screen.width /2,
        height:60,
        justifyContent:'center',
        alignItems:'center',
        borderLeftColor:'white',
        borderLeftWidth:1,
    },
    text_1:{
        color:'white',
        fontSize:20,
        fontWeight:'bold'
    }, 
    text_2:{
        color:'#68CB66',
        fontSize:20,
        fontWeight:'bold'
    }
})

export default TraCuu;
