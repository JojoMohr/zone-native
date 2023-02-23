import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    TouchableHighlight,
    TouchableOpacity,
} from "react-native";
import { Animated } from "react-native";
import style from "../App.module.css";
import Slider from "@react-native-community/slider";

export default function SoundCard({ name, image }) {
    const [soundPlaying, setSoundPlaying] = useState(false);

    const soundOnOff = () => {
        console.log("PLAYINGSOUND");
        setSoundPlaying(!soundPlaying);
    };

    return (
        <TouchableOpacity onPress={soundOnOff}>
            <View style={style.soundCard}>
                {/* <Image source={image} />
            <Slider
                style={style.slider}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
            /> */}
                {soundPlaying ? (
                    <>
                        <Image source={image} />
                        <Slider
                            style={style.slider}
                            minimumValue={0}
                            maximumValue={1}
                            minimumTrackTintColor="#FFFFFF"
                            maximumTrackTintColor="#000000"
                        />
                    </>
                ) : (
                    <Image source={image} />
                )}
            </View>
        </TouchableOpacity>
    );
}
