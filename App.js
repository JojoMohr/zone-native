import React from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import style from "./App.module.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import SoundCard from "./Components/SoundCard";

export default function App() {
    return (
        <>
            <SafeAreaView>
                <View style={style.container}>
                    <Header></Header>
                    <SoundCard
                        image={require("./assets/cloud-drizzle.png")}
                    ></SoundCard>
                    <SoundCard image={require("./assets/wind.png")}></SoundCard>
                    <SoundCard
                        image={require("./assets/cloud-lightning.png")}
                    ></SoundCard>
                    <SoundCard
                        image={require("./assets/coffee.png")}
                    ></SoundCard>
                    <SoundCard image={require("./assets/moon.png")}></SoundCard>
                    <SoundCard
                        image={require("./assets/white-noise.png")}
                    ></SoundCard>

                    <Footer></Footer>
                </View>
            </SafeAreaView>
        </>
    );
}
