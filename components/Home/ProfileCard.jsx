import React, { useEffect, useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native'
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
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <Text>User Profiles</Text>
                {users.map((user) => (
                    <Swiper 
                        key={user.id}
                        cards={[user]}
                        renderCard={(user) => (
                            <View style={styles.card} key={user.id}>
                                {/* <Text>{user.username}</Text> */}
                                
                                <Text>Img</Text>

                                {user.randomImage && (
                                    <Image 
                                        source={{uri: user.randomImage}}
                                        style={styles.image} 
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
                        cardIndex={0}
                    >
                        {/* <Button title="No" onPress={() => console.log('ew no!')} />
                        <Button title="Yes" onPress={() => console.log('match me!')} /> */}
                    </Swiper>
                ))}
            </View>

            <View style={styles.buttonContainer}>
                <Button title="No" onPress={() => console.log('ew no!')} />
                <Button title="Yes" onPress={() => console.log('match me!')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cardContainer: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    },
    card: {
        // width:'100%',
        // alignItems:'center',
        // flex: 1,
        // justifyContent:'center'
        width: '80%', // Adjust the card width as needed
        height: '80%', // Adjust the card height as needed
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        resizeMode: 'cover', 
        // width: '50%', 
        // height: '75%',
        width: '100%',
        height: '100%',
        borderRadius: 10,

    },
    buttonContainer: {
        flexDirection:'row',
        marginBottom: 20,
    }
})

export default ProfileCard