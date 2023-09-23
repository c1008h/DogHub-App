import React, { useState} from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

type Props = {
    navigationProps: NavigationProp<ParamListBase>;
}

const Header: React.FC<Props> = ({ navigationProps }) => {
    const [leftClicked, setLeftClicked] = useState<boolean | null>(false);
    const [rightClicked, setRightClicked] = useState<boolean | null>(false);
    const [profileClicked, setProfileClicked] = useState<boolean | null>(false);
    const [messageClicked, setMessageClicked] = useState<boolean | null>(false);


    const handleProfileClick = () => {
        setProfileClicked(true)
        setMessageClicked(false)
        setLeftClicked(false)
        setRightClicked(false)
        navigationProps.navigate('Profile')
    }

    const handleMessageClick = () => {
        setProfileClicked(false)
        setMessageClicked(true)
        setLeftClicked(false)
        setRightClicked(false)
        navigationProps.navigate('Chat')
    }


    const handleLeftClick = () => {
        if(leftClicked){
            return
        }
        setRightClicked(false)
        setMessageClicked(false)
        setProfileClicked(false)
        setLeftClicked(!leftClicked);
        navigationProps.navigate('Home')

    };

    const handleRightClick = () => {
        if(rightClicked){
            return
        }
        setLeftClicked(false)
        setMessageClicked(false)
        setProfileClicked(false)
        setRightClicked(!rightClicked);
    };

    return (
        <View style={styles.container}>
            <TouchableHighlight style={styles.left} onPress={(handleProfileClick)}>
                <Ionicons name="person" size={24} color="black" />
            </TouchableHighlight>
            <View style={styles.center}>
                <View style={[styles.itemContainer, leftClicked && styles.clicked]}>
                    <TouchableHighlight 
                        style={styles.items}
                        onPress={handleLeftClick}
                    >
                        <Ionicons name="flame-outline" size={24} color="black" />
                    </TouchableHighlight>
                </View>
                <View style={[styles.itemContainer, rightClicked && styles.clicked]}>
                    <TouchableHighlight 
                        style={styles.items}
                        onPress={handleRightClick}
                    >
                        <Ionicons name="people" size={24} color="black" />
                    </TouchableHighlight>
                </View>

            </View>
            <TouchableHighlight 
                style={styles.right}
                onPress={handleMessageClick}
            >
                <AntDesign name="message1" size={24} color="black" />
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    clicked: {
        backgroundColor:'#fe7a86',
        borderRadius: 15,
        height: '100%',
        width:'75%',
        // width: '50%', 
        
    },
    container: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    center: {
        flexDirection:'row',
        alignItems: 'center',
        borderWidth:2,
        borderColor: 'rgb(219, 224, 230)',
        borderRadius: 15,
        paddingVertical: '1%',
        paddingHorizontal:'4%',
        justifyContent:'space-evenly',
        flex:1
    },
    itemContainer: {
        flex: 1,
        overflow: 'hidden', 
        borderRadius: 15,
    },
    items: {
        marginHorizontal: 10,
        // position:'absolute'
    },
    left: {
        flex:1,
        alignItems:'flex-start'
    },
    right: {
        flex:1,
        alignItems:'flex-end',
        paddingRight: 30,
    }
});

export default Header;