import React from "react";
import { View, Text } from "react-native";
import style from "../App.module.css";

export default function Header() {
    return (
        <View style={style.header}>
            <Text style={style.logo}>HEADER</Text>
        </View>
    );
}
