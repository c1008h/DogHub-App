import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Button } from 'react-native';

const Profile = () => {
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>();

    function handleName() {
        setName(name)
    }

    return (
        <View>
            <Text>Profile</Text>
            <View style={{margin: 50, flexDirection:'row', alignItems:'center'}}>
                <Text>Name:</Text>
                <TextInput 
                    placeholder='Name'
                    style={{height:40}}
                    value={name}
                    onChangeText={(e) => setName(e)}
                />
            </View>
            <Button 
                title='Edit'
                onPress={() => setIsEdit(true)}
            />
        </View>
    )
}

export default Profile;