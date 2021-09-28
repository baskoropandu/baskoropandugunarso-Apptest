import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableHighlight, View, TextInput, Image, Text, Dimensions, ScrollView} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../store/actions';
import ContactCard from '../components/ContactCard';
import { Feather } from '@expo/vector-icons';

export default function Home({navigation}) {
  const dispatch = useDispatch()
  const contacts = useSelector(state => state.contacts)
  useEffect(() => {
    dispatch(fetchContacts())
  }, [])
  const contactCards = contacts.map((contact, i) => {
    const id = {id: contact.id}
    return (
      <TouchableHighlight 
        underlayColor='white'
        onPress={()=>navigation.navigate('Details', id)} 
        key={i}
      >
        <ContactCard contact={contact}/>
      </TouchableHighlight>
    )
  }) 
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <ScrollView 
        contentContainerStyle={styles.cardContainer}
      >
        {contactCards}
      </ScrollView>
      <TouchableHighlight 
        onPress={()=> navigation.navigate('CreateContact')}
        underlayColor='white'
      >
        <Feather 
          name="user-plus" 
          style={styles.addButton}  
        />
      </TouchableHighlight>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height,
    paddingTop: Dimensions.get('screen').height/30,
    backgroundColor: '#F0E5CF',
  },
  cardContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
    
  },
  addButton: {
    fontSize: Dimensions.get('screen').height/8,
    color: '#4B6587',
    textAlign: 'right',
    textShadowColor: '#F0E5CF',
    textShadowOffset: {width:1, height:0},
    textShadowRadius: 1,
  }

})