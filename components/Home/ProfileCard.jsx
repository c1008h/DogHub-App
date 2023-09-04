import React, { useEffect, useState } from 'react';
import { View, Text, Button, Image } from 'react-native'
import seed from '../../firebase/seed.json'

const ProfileCard = () => {
    console.log('user details:', seed)
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchImagesForUsers = async () => {
            const updatedUsers = []

            for (const user of seed) {
                console.log('user user user', user)
                try {
                    const response = await fetch(user.fetch)
                    if (response.ok) {
                        const data = await response.json()
                        // console.log('data', data)
                        user.randomImage = data.message; 


                    } else {
                        console.error('Failed to fetch image')
                    }
                } catch (error) {
                    console.error('Error fetching image:', error.message)
                }
                updatedUsers.push(user)
                setUsers(updatedUsers)
            }
        }

        fetchImagesForUsers()
    }, [])
console.log('updated user:', users)

    return (
        <View>
            {users.map((user) => (
                <View key={user.id}>
                    <Text>{user.username}</Text>
                    <Text>{user.randomImage}</Text>
                    {user.randomImage && (
                        <Image source={{ uri: user.randomImage}} />
                    )}
                    {/* <Image src={user.randomImage} style={{height:'200px', width:'200px'}}/> */}
                </View>
            ))}
            <Text>User Profiles</Text>
        </View>

    )
}

export default ProfileCard