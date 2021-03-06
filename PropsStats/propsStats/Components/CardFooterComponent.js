import {Text,View,Image} from 'react-native'

const CardFooterComponent = ({taille}) => {
    return(
        <View>
            {(taille == "toutes tailles") &&
                <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:24}}>Taille</Text>
                <Image style={{width:24,height:24,margin:10,marginTop:15}} source={require('../assets/img/chevron.png')} />
                </View>
            }
            {(taille != "toutes tailles") &&
             <Text style={{fontSize:20}}>Taille {taille}</Text>   
            }
        </View>
    )
}

export default CardFooterComponent