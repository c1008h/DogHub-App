import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
    return (
        <View>
            <Text>Home screen!</Text>
            <Button 
                title='Go to Details'
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    )
}

export default HomeScreen;