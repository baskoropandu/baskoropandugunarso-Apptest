import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, TextInput, Image, Text, Dimensions, ScrollView} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { createContact, fetchContacts } from '../store/actions';
import ContactCard from '../components/ContactCard';
import { Feather } from '@expo/vector-icons';
import isURL from '../helpers/checkURL';

export default function Home({navigation}) {
  const [firstName, onChangeFirstName] = useState('')
  const [lastName, onChangeLastName] = useState('')
  const [age, onChangeAge] = useState('')
  const [photo, onChangePhoto] = useState('')
  dispatch = useDispatch()

  function handleSubmit() {
    if(isURL(photo)){
      let newContact = {
        firstName,
        lastName,
        age: +age,
        photo
      }
      dispatch(createContact(newContact))
    }else if(photo === '') {
      let newContact = {
        firstName,
        lastName,
        age: +age,
      }
      dispatch(createContact(newContact))
    } else{
      console.log('photo must be in url format');
    }
  }
  return (
    <View style={styles.container}>
      <TextInput 
        value={firstName}
        onChangeText={onChangeFirstName}
        style={styles.input}
      />
      <TextInput 
        value={lastName}
        onChangeText={onChangeLastName} 
        style={styles.input}
      />
      <TextInput 
        value={age}
        keyboardType='numeric'
        onChangeText={onChangeAge}
        style={styles.input}
      />
      <TextInput 
        value={photo}
        onChangeText={onChangePhoto}
        style={styles.input}
      />
      <TouchableOpacity
        onPress={handleSubmit}
      >
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height,
    paddingTop: Dimensions.get('screen').height/30,
    backgroundColor: '#C8C6C6',
  },
  input : {
    backgroundColor: '#F7F6F2',
    width: Dimensions.get('screen').width*3/4,
    height: Dimensions.get('screen').height/20,
    borderRadius: 10,
    marginVertical: Dimensions.get('screen').height/60
  }

})