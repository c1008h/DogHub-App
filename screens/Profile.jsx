import { View, Text, Button } from 'react-native';

function ProfileScreen({ navigation }) {
    return (
        <View>
            <Text>Profile screen!</Text>
            <Button 
                title='Go to Home'
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}

export default ProfileScreen;