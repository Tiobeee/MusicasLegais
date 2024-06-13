import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import styles from "../config/styles";
import RegisterScreen from "../screens/RegisterScreen";

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
    <View styles={styles.container}>
      <TextInput placeholder="Username" value={email} onChangeText={setEmail} style={styles.textinput} />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        style={styles.textinput}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      {error ? <Text>{error}</Text> : null}
      <Button title="Registrar" onPress={() => {
        navigation.navigate("RegisterScreen");
      }}  />
    </View>
  );
}
