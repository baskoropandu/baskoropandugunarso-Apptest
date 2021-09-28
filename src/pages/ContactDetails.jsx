import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, TextInput, Image, Text, Dimensions, ScrollView} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactDetails } from '../store/actions';
import { EvilIcons } from '@expo/vector-icons';

export default function ContactDetails({route, navigation}) {
  const dispatch = useDispatch()
  const {id} = route.params
  const contactDetails = useSelector(state => state.contactDetails)
  function toMyContacts() {
    
  }
  function toAddNewContact() {
    
  }
  useEffect(() => {
    dispatch(fetchContactDetails(id))
  }, [id])
  return (
    <ScrollView>
      <Text>Details</Text>
      <View>
        <Text>{contactDetails.firstName} {contactDetails.lastName}</Text>
        <Text>{contactDetails.age}</Text>
        {contactDetails.photo !== "N/A" ? (
          <Image
            style={{width:Dimensions.get('screen').width/2, height:Dimensions.get('screen').width/2}}
            source={{
              uri: contactDetails.photo,
            }}
          />
        ): (
          <EvilIcons name="user" size={Dimensions.get('screen').width/2} color="black" />
        )}
      </View>
    </ScrollView>
  )
}