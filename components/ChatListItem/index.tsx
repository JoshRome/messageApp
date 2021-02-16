import React, {useEffect, useState} from 'react';
import {View,Text,Image,TouchableWithoutFeedback, } from "react-native";
import { ChatRoom } from "../../types";
import styles from "./style";
import moment from "moment";
//import { useNavigation } from '@react-navigation/native';
// import {
//   Auth,
// } from 'aws-amplify';

export type ChatListItemProps ={
    chatRoom: ChatRoom;
}

const ChatListItem = (props: ChatListItemProps) => {
 const { chatRoom } = props;

 const user = chatRoom.users[1];

return (
    <View style={styles.container}>
        <View style ={styles.lefContainer}>
            <Image source={{uri: user.imageURI}} style={styles.avatar}/>

            <View style={styles.midContainer}>
                <Text style={styles.username}>{user.name}</Text>
                <Text numberOfLines={2} style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text> 
            </View>
        </View>

        <Text 
        style={styles.time}> 
        {moment(chatRoom.lastMessage.createdAt).format("MMM")}
        </Text>
    </View>

    )
};

export default ChatListItem;
