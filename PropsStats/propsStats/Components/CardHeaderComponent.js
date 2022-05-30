import { View, Text } from "react-native"
const CardHeaderComponent = ({price}) => {
    return(
        <View style={{borderBottomColor:'#45a7fb',borderBottomWidth:2}}>
            <Text style={{textAlign:'right',fontSize:25}}>{price} €</Text>
        </View>
    )
}

export default CardHeaderComponent