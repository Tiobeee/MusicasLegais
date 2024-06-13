import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";

export default function NewsScreen() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.currentsapi.services/v1/search?keywords=musica&language=pt&apiKey=wTylkzOXniX2s-EzsxjQ9OQTif_CSy6TMfn3EO-ieoNnrf7_"
    )
      .then((response) => response.json())
      .then((data) => setNews(data.news))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View>
      <FlatList
        data={news}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => (
          <View>
            {" "}
            <Text>{item.title}</Text> <Text>{item.description}</Text>{" "}
          </View>
        )}
      />{" "}
    </View>
  );
}
