import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import styles from "../config/styles";
import { ScrollView } from "react-native";
import * as Location from "expo-location";
import { Button } from "react-native-paper";

export default function NewsScreen() {
  const [news, setNews] = useState([]);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permissão de acesso à localização negada");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);
  const getLocation = async () => {
    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };
  let text = "Aguardando...";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = `Latitude: ${location.coords.latitude}, Longitude: ${location.coords.longitude}`;
  }

  useEffect(() => {
    fetch(
      "https://api.currentsapi.services/v1/search?keywords=musica&language=pt&apiKey=4Fbg-uxFFvY02DwfR0BA-iUWSTmMNmnGzUmFnms3io7ZpLQo"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("API RESPONSE:", data);
        setNews(data.news);
        console.log("News State:", news);
      })
      .catch((error) => console.error("Fetch Error:", error));
  }, []);

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.paragraph}>{text}</Text>
      <Button title="Atualizar Localização" onPress={getLocation}  style={styles.botao} mode="contained"> att loc</Button>
      <FlatList
        data={news}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.textin}>{item.title}</Text>
            <Text style={styles.inputin}>{item.description}</Text>
          </View>
        )}
      />
    </View>
    </ScrollView>
  );
}
