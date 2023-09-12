import React, { useEffect, useState } from 'react';
import { View, Text, Button, Image } from 'react-native'
import Swiper from 'react-native-deck-swiper';

import seed from '../../firebase/seed.json'

const ProfileCard = () => {
    console.log('user details:', seed)
    const [users, setUsers] = useState([]);
    const [imageStr, setImageStr] = useState('')

    useEffect(() => {
        const fetchImagesForUsers = async () => {
            const updatedUsers = []

            for (const user of seed) {
                // console.log('user user user', user)
                try {
                    const response = await fetch(user.fetch)
                    if (response.ok) {
                        const data = await response.json()

                        const updatedUser = { 
                            // ...user, 
                            id: user.id,
                            username: user.username,
                            randomImage: data.message 
                        };

                        // console.log('data', data)
                        // user.randomImage = data.message; 

                        updatedUsers.push(updatedUser)
                        setUsers(updatedUsers)
                    } else {
                        console.error('Failed to fetch image')
                    }
                } catch (error) {
                    console.error('Error fetching image:', error.message)
                }
                // updatedUsers.push(user)
                setUsers(updatedUsers)
            }
        }

        fetchImagesForUsers()
    }, [])

    console.log('updated user:', users)

    return (
        <View>
            <Text>User Profiles</Text>
            {users.map((user) => (
                <Swiper 
                    key={user.id}
                    cards={[user]}
                    renderCard={(user) => (
                        <View key={user.id}>
                            {/* <Text>{user.username}</Text> */}
                            {user.randomImage && (
                                <Image 
                                    source={{uri: user.randomImage}} 
                                    style={{ resizeMode: 'cover', width: '75%', height: '75%' }}
                                /> 
                            )}
                        </View>
                    )}
                    onSwipedLeft={(cardIndex) => {
                        console.log(`Swiped left on card at index ${cardIndex}`)
                    }}
                    onSwipedRight={(cardIndex) => {
                        console.log(`Swiped right on card at index ${cardIndex}`)
                    }}
                >
                    <Button title='You Can Press Me' />

                </Swiper>
            ))}
        </View>
    )
}

export default ProfileCard