import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";

export default function NewsScreen() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.currentsapi.services/v1/search?keywords=rock+music&language=en&apiKey=4Fbg-uxFFvY02DwfR0BA-iUWSTmMNmnGzUmFnms3io7ZpLQo"
    )
      .then(response => response.json())
      .then(data => {
        console.log('API RESPONSE:', data);
        setNews(data.news);
        console.log('News State:', news);
      })
      .catch(error => console.error('Fetch Error:', error));
    } , []);

  return (
    <View>
      <FlatList
        data={news}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text> <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}
