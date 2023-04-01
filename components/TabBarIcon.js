import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Image } from 'react-native';

export default function TabBarIcon(props) {
    return (
       <View>
            <Image source={"../../assets/icons/home.png"}/>
       </View>
    );
}