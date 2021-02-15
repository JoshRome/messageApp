import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback
} from "react-native";
import { ChatRoom } from "../../types";
import styles from "./style";
// import moment from "moment";
// import { useNavigation } from '@react-navigation/native';
// import {
//   Auth,
// } from 'aws-amplify';

export type ChatListItemProps ={
    chatRoom: ChatRoom;
}

const ChatListItem = (props: ChatListItemProps) => {
 const { chatRoom } = props;
return (
    <View> 

        <Text>{chatRoom.lastMessage.content}</Text>
    </View>
    )
}

export default ChatListItem;
