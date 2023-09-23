import { View, Text, Button } from 'react-native';

function DetailsScreen({ navigation }) {
    return (
        <View>
            <Text>Detail screen!</Text>
            <Button 
                title='Go to Home'
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}

export default DetailsScreen;