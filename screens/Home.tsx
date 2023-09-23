import React, { useEffect, useState } from 'react';


import { View, Text, Button } from 'react-native';
import ProfileCard from '../../components/Home/ProfileCard';
import seed from '../firebase/seed.json'

function HomeScreen({ navigation }) {
   

    return (
        <View>
            <Text>Home screen!</Text>
            <ProfileCard />
            {/* <Button 
                title='Go to Details'
                onPress={() => navigation.navigate('Details')}
            /> */}
        </View>
    )
}

export default HomeScreen;