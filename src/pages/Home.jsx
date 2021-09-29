import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, TextInput, Image, Text, Dimensions, ScrollView} from 'react-native';
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
      <ContactCard contact={contact} key={i}/>
    )
  }) 
  return (
    <View style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.cardContainer}
      >
        <Image
          style={{height:Dimensions.get('screen').height/5, width: Dimensions.get('screen').height/5}}
          source={{
            uri: 'https://ik.imagekit.io/ztg2jcaeb0e/ConTech_1__hsE_r14mVQg.png?updatedAt=1632894384091'
          }}
        />
        <View style={styles.cards}>
          {contactCards}
        </View>
      </ScrollView>
      <TouchableOpacity 
        onPress={()=> navigation.navigate('CreateContact')}
        underlayColor='white'
        style={styles.addButton}
      >
        <Feather 
          style={{fontSize: Dimensions.get('screen').height/16, color: '#4B6587', textAlign: 'center',
          textAlignVertical:'center',}}
          name="plus"   
        />
      </TouchableOpacity>
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
    position: 'relative',
    paddingBottom: 20
  },
  cards: {
    width: Dimensions.get('screen').width,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  addButton: {
    height: Dimensions.get('screen').height/15,
    width: Dimensions.get('screen').height/15,
    backgroundColor: '#C8C6C6',
    justifyContent:'center',
    borderRadius: Dimensions.get('screen').height/10,
    position: 'absolute',
    bottom: 30,
    right: 20,
    zIndex: 2
  }

})