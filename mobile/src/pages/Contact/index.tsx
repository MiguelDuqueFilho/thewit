import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import { MaterialIcons as Icon } from "@expo/vector-icons";
import * as MailComposer from "expo-mail-composer";

import Header from "../Header";
import Footer from "../Footer";

import styles from "./styles";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const navigation = useNavigation();

  function handleComposerMail() {
    MailComposer.composeAsync({
      subject: "Contato via aplicativo The wit",
      recipients: [`${name}<${email}>`],
      body: msg,
    });
    navigation.dispatch(DrawerActions.jumpTo("Home"));
  }
  return (
    <View style={styles.container}>
      <Header drawerLabel="level1" />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          keyboardShouldPersistTaps="always"
          keyboardDismissMode="on-drag"
        >
          <ImageBackground
            source={require("../../assets/img/banner1.png")}
            style={styles.container}
            imageStyle={styles.imageBackground}
          ></ImageBackground>
          <View style={styles.form}>
            <Text style={styles.subtitle}>Entre em contato conosco</Text>
            <TextInput
              style={styles.input}
              placeholder="Seu nome"
              value={name}
              onChangeText={setName}
              maxLength={128}
              autoCorrect={false}
            ></TextInput>
            <TextInput
              style={styles.input}
              placeholder="Seu email"
              value={email}
              onChangeText={setEmail}
              autoCorrect={false}
            ></TextInput>
            <TextInput
              style={styles.inputArea}
              placeholder="Deixe aqui sua Mensagem"
              value={msg}
              onChangeText={setMsg}
              autoCorrect={false}
              multiline={true}
              numberOfLines={5}
            ></TextInput>
            <RectButton style={styles.button} onPress={handleComposerMail}>
              <Icon name="mail" size={24} color="#000" />
              <Text style={styles.buttonText}>Enviar</Text>
            </RectButton>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <Footer />
    </View>
  );
};

export default Contact;
