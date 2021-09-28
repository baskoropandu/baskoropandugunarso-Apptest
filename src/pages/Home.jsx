import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, TextInput, Image, Text, Dimensions, ScrollView} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ContactCard from '../components/ContactCard';
import { fetchContacts } from '../store/actions';


export default function Home({navigation}) {
  const dispatch = useDispatch()
  const contacts = useSelector(state => state.contacts)
  function toMyContacts() {
    
  }
  function toAddNewContact() {
    
  }
  useEffect(() => {
    dispatch(fetchContacts())
  }, [])
  const contactCards = contacts.map((contact, i) => {
    const id = {id: contact.id}
    return (
      <TouchableOpacity onPress={()=>navigation.navigate('Details', id)} key={i}>
        <Text>
        {`${contact.firstName} ${contact.lastName}`}
        </Text>
      </TouchableOpacity>
    )
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