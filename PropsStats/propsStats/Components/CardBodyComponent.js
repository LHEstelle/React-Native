import { Text,View, Image } from "react-native"

const CardBodyComponent = ({image,title,description}) => {
    return(
        <View style={{flex:1,display:'flex',flexDirection:'column'}}>
            <View style={{borderBottomWidth:2,borderColor:'#45a7fb',flex:1,alignItems:'center',justifyContent:'center'}}>
                <Image resizeMode="contain" style={{ flex:1, width:240.5,height:272}} source={image} />
           </View>
            <View style={{margin:20,flex:1}}>
            <Text style ={{fontSize: 25}}>{title}</Text>
            <Text style={{flex:1,marginTop:20}}>{description}</Text>
            </View>
        </View>
    )
}

export default CardBodyComponent