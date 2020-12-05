import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

export default class NewsItem extends React.Component {

    render() {

        const typeVal = this.props.type;
        let bgcolor = 'white';

            if (typeVal == 'saglik') {
            bgcolor = 'gray';
        } else if (typeVal == 'siyaset') {
            bgcolor = 'white';
        }

        const titleVal = this.props.title;
        const descriptionVal = this.props.description;

        return (
            <View style={{ backgroundColor: bgcolor }}>
                <Text style={styles.baslik}>{titleVal}</Text>
                <Text style={styles.aciklama}>{descriptionVal}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    baslik: {
        fontSize: 30,
        fontWeight: "bold"
    },
    aciklama: {
        
        fontSize: 20,
        fontWeight: "bold",
        padding: 25
        
    }
});
