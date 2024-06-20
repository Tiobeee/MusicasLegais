import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import styles from "../config/styles";

import { Button } from "react-native-paper";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigation.navigate("NewsScreen");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textin}>
        {" "}
        Login: pinpin@gmail.com
        <br />
        Senha: pinpin
      </Text>

      <TextInput
        placeholder="Username"
        value={email}
        onChangeText={setEmail}
        style={styles.inputin}
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        style={styles.inputin}
        secureTextEntry
      />

      <Button
        title="Login"
        style={styles.botao}
        onPress={handleLogin}
        mode="contained"
      >
        Logar{" "}
      </Button>

      {error ? <Text>{error}</Text> : null}

      <Button
        title="Registrar"
        style={styles.botao}
        onPress={() => {
          navigation.navigate("RegisterScreen");
        }}
        mode="contained"
      >
        Registrar
      </Button>
    </View>
  );
}
