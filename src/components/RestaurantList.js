import React, { useEffect, useState } from "react";
import { Text, View, ScrollView } from "react-native";
import RestaurantCard from "../RestaurantCard";

export default function RestaurantList() {
  const [restaurants, setRestaurants] = useState()
  useEffect(() => {
    // fetch data from API
    fetch("https://bocacode-intranet-api.web.app/restaurants")
      .then((response) => response.json())
      .then(data => setRestaurants(data))
      .catch(alert);
  }, []);
  return (
      <View>
       
        {!restaurants           // if not restaurants
          ? <Text>Loading...</Text> // show Loading...
          : <ScrollView>{restaurants.map(restaurants =>{        //otherwise show restaurants
            return <RestaurantCard 
            key={restaurants.id} 
            restaurant={restaurants}/>
        })}</ScrollView>              
    }
  </View>
)
}
              
