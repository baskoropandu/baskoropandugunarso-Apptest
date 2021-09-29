import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, TextInput, Image, Text, Dimensions, ScrollView} from 'react-native';
import { useDispatch, } from 'react-redux';
import { createContact, fetchContactDetails, fetchContacts, updateContact,} from '../store/actions';
import isURL from '../helpers/checkURL';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

export default function ContactForm({route, navigation}) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')
  const [photo, setPhoto] = useState('')
  dispatch = useDispatch()
  navigation = useNavigation()

  function handleSubmit() {
    if(isURL(photo)){
      let newContact = {
        firstName,
        lastName,
        age: +age,
        photo
      }
      if(route.name === 'EditContact') {
        let id = route.params.id
        dispatch(updateContact(newContact, id))
          .then(response => response.json())
          .then(response => {
            console.log(response);
            dispatch(fetchContacts())
            navigation.navigate('Home')
          })
          .catch(err => {
            console.log(err,'ERROR');
          })
      } else {
        dispatch(createContact(newContact))
          .then(response => response.json())
          .then(result => {
            console.log(result);
            dispatch(fetchContacts())
            navigation.navigate('Home')
          })
          .catch(err => {
            console.log(err,'ERROR');
          })
      }
      
    }else if(photo === '') {
      let newContact = {
        firstName,
        lastName,
        age: +age,
      }
      if(route.name === 'EditContact') {
        dispatch(updateContact(newContact, id))
          .then(response => response.json())
          .then(response => {
            console.log(response);
            navigation.navigate('Home')
          })
          .catch(err => {
            console.log(err,'ERROR');
          })
      } else {
        dispatch(createContact(newContact))
          .then(response => response.json())
          .then(result => {
            console.log(result);
            navigation.navigate('Home')
          })
          .catch(err => {
            console.log(err,'ERROR');
          })
      }
    } else{
      console.log('photo must be in url format');
    }
  }

  useEffect(()=> {
    if(route.name === 'EditContact') {
      let id = route.params.id
      dispatch(fetchContactDetails(id))
        .then(response => response.json())
        .then(({data}) => {
          setFirstName(data.firstName)
          setLastName(data.lastName)
          setAge(data.age.toString())
          setPhoto(data.photo)
        })
    }
  }, [route])
  
  let image 

  if(isURL(photo)) {
    image = (
      <Image
        style={{height:Dimensions.get('screen').height/5, width: Dimensions.get('screen').height/5, borderRadius: Dimensions.get('screen').height/5, borderWidth: 10, borderColor: '#4B6587'}}
        source={{
          uri: photo
        }}
      />
    )
  }else {
    image = (
      <Image
        style={{height:Dimensions.get('screen').height/5, width: Dimensions.get('screen').height/5,borderRadius: Dimensions.get('screen').height/5 }}
        source={{
          uri: 'https://ik.imagekit.io/ztg2jcaeb0e/ConTech_1__hsE_r14mVQg.png?updatedAt=1632894384091'
        }}
      />
    )
  }

  return (
    <ScrollView 
      contentContainerStyle={styles.container}
    >
      {image}
      <Text 
        style={styles.titleText}
      >
        {route.name === 'CreateContact' ? `Add New Contact` : `Edit ${firstName} ${lastName}`}
      </Text>
      <TextInput 
        value={firstName}
        onChangeText={setFirstName}
        style={styles.input}
        placeholder='First Name'
      />
      <TextInput 
        value={lastName}
        onChangeText={setLastName} 
        style={styles.input}
        placeholder='Last Name'
      />
      <TextInput 
        value={age}
        keyboardType='numeric'
        onChangeText={setAge}
        style={styles.input}
        placeholder='Age'
      />
      <TextInput 
        value={photo}
        onChangeText={setPhoto}
        style={styles.input}
        placeholder='Image URL'
      />
      <TouchableOpacity
        onPress={handleSubmit}
        style={styles.submitButton}
      >
        <Text
          style={styles.submitButtonText}
        >Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={()=> navigation.navigate('Home')}
        underlayColor='white'
        style={styles.addButton}
      >
        <Feather 
          style={{fontSize: Dimensions.get('screen').height/16, color: '#4B6587', textAlign: 'center',
          textAlignVertical:'center',}}
          name="arrow-left-circle"   
        />
      </TouchableOpacity>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height,
    paddingTop: Dimensions.get('screen').height/20,
    backgroundColor: '#C8C6C6',
    alignItems: 'center',
  },
  titleText: {
    fontSize: Dimensions.get('screen').height/30,
    fontWeight: 'bold',
    color: '#4B6587'
  },
  input : {
    backgroundColor: '#F7F6F2',
    width: Dimensions.get('screen').width*3/4,
    height: Dimensions.get('screen').height/20,
    borderRadius: 10,
    fontSize: Dimensions.get('screen').height/50,
    marginVertical: Dimensions.get('screen').height/60,
    paddingHorizontal: 10
  },
  submitButton: {
    backgroundColor: '#4B6587',
    width: Dimensions.get('screen').height/10,
    height: Dimensions.get('screen').height/20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  submitButtonText: {
    color:'#fff',
    fontSize: Dimensions.get('screen').height/50,
    fontWeight: '700'
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