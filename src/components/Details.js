import React, {useContext} from 'react';
import {Text, View } from 'react-native'
import { RestaurantContext } from '../../App';



export default function Details(){
    const { selectedRestaurant } = useContext(RestaurantContext)
    return  (
    <Text>{selectedRestaurant.name}</Text>
    )
}