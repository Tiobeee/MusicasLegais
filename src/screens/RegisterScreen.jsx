import { ScrollView, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useState } from "react";
import { styles } from "../config/styles";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";

export default function RegisterScreen({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [erro, setErro] = useState({
    email: false,
    senha: false,
    nome: false,
  });

  function realizaRegistro() {0
    if (nome === "") {
      setErro({ ...erro, nome: true });
      return 0;
    }
    setErro({ ...erro, nome: false });
    if (email === "") {
      setErro({ ...erro, email: true });
      return 0;
    }
    setErro({ ...erro, email: false });
    if (senha === "") {
      setErro({ ...erro, senha: true });
      return 0;
    }
    navigation.navigate("LoginScreen");
    cadastrarNoFirebase();
  }

  async function cadastrarNoFirebase() {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        senha
      );
      const user = userCredential.user;
      console.log("Usuario criado com sucesso:", user);
      const collectionRef = collection(db, "usuarios");

      await setDoc(doc(collectionRef, user.uid), {
        nome: nome,
      });

      // Redireciona para a tela de login após o cadastro bem-sucedido
      navigation.navigate("LoginScreen");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setErrorMessage("Email já está cadastrado.");
      } else {
        setErrorMessage("Erro ao cadastrar usuário: " + error.message);
      }

    }
  }


  return (
    <ScrollView>
          <View>
            <View >
            <Text>{errorMessage}</Text>
              <Text >Faça seu Registro:</Text>
              <TextInput
               
                placeholder="Digite seu nome:"
                onChangeText={setNome}
                value={nome}
                error={erro.nome}
              />
              <TextInput
                
                placeholder="Digite seu e-mail:"
                onChangeText={setEmail}
                value={email}
                error={erro.email}
              />
              <TextInput
                
                placeholder="Digite sua senha:"
                onChangeText={setSenha}
                value={senha}
                secureTextEntry // faz com que o campo seja senha com *
                error={erro.senha}
              />
    
              <Button onPress={realizaRegistro} mode="outlined">
                Fazer Login
              </Button>
              <Button onPress={() => navigation.navigate("LoginScreen")}>
                Voltar ao Login
              </Button>
            </View>
          </View>
    </ScrollView>
  );
}
