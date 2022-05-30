import { View } from 'react-native'
import CardBodyComponent from './CardBodyComponent'
import CardFooterComponent from './CardFooterComponent'

import CardHeaderComponent from './CardHeaderComponent'
import LikeBtnComponent from './LikeBtnComponent'

const CardComponent = ({ kl, e }) => {

    return (
        <View style={{ width: 300, height: 500, display: 'flex', margin: 40, borderColor: '#45a7fb', borderWidth: 2 }}>
            <CardHeaderComponent price={e.price} />
            <CardBodyComponent title={e.title} description={e.desc} image={e.photo}/>
            <View style={{margin:20,display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <CardFooterComponent taille={e.size} />
                <LikeBtnComponent like_={e.likes} />
            </View>
        </View>
    )
}

export default CardComponent