import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, TextInput, Image, Text, Dimensions, ScrollView} from 'react-native';


export default function ContactCard({route, navigation, contact}) {
  function toContactDetails() {
    const data = {id: contact.id}
    console.log(data);
    // navigation.navigate('Details', data)
  }
  return (
    <ScrollView>
      <TouchableOpacity onPress={toContactDetails}>
        <Text>
        {`${contact.firstName} ${contact.lastName}`}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  )
}