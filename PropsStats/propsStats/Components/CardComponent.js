import { View } from 'react-native'

import CardHeaderComponent from './CardHeaderComponent'

const CardComponent = ({ kl, e }) => {

    return (
        <View style={{ width: 300, height: 500, display: 'flex', margin: 40, borderColor: '#45a7fb', borderWidth: 2 }}>
            <CardHeaderComponent price={e.price} />
           
        </View>
    )
}

export default CardComponent