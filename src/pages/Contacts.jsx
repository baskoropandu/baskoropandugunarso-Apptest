import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, TextInput, Image, Text, Dimensions, ScrollView} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ContactCard from '../components/ContactCard';
import { fetchContacts } from '../store/actions';


export default function Home({navigation}) {
  useEffect(() => {
    dispatch(fetchContacts())
  }, [])
  const contactCards = contacts.map((contact, i) => {
    return <ContactCard contact={contact} key={i}/>
  }) 
  return (
    <ScrollView>
      <Text>Home</Text>
      <View>
        {contactCards}
      </View>
    </ScrollView>
  )
}