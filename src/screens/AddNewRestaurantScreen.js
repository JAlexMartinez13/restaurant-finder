import React from 'react'
import { View, Text } from "react-native";
import { Input, Button } from 'react-native-elements';


export default function AddNewRestaurantScreen() {
    return (
    <>
        <View>
            <Text>Enter New Restaurant </Text>
         <Input placeholder='New Restaurant' 
                spellCheck
                onChange={()=>
                console.log('im typing here')}
                />
         <Input placeholder='Adress'/>
         <Input placeholder='Photo' keyboardType='url'/>
         <Input placeholder='Rating' 
                keyboardType='numeric' 
                maxLength='1'
                />
         <Button title={'Create new restaurant'} />     
        </View>
    </>
    )
}