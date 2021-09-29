import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity, View, TextInput, Image, Text, Dimensions, ScrollView} from 'react-native';
import isURL from '../helpers/checkURL';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from '../store/actions';

export default function ContactCard({contact}) {
  const id = {id: contact.id}
  const navigation = useNavigation()
  const dispatch = useDispatch()

  function handleEdit() {
    navigation.navigate('EditContact', id)
  }
  function handleDelete() {
    dispatch(deleteContact(id))
    .then(response => response.json())
    .then(result=> {
      if(!result.error) {
        console.log(result);
        dispatch(fetchContacts())
      }else {
        console.log(result.error);
      }
    })
  }
  return(
    <View
      onPress={()=> navigation.navigate('Details', id)}
      style={styles.contactCard}
    >
      {isURL(contact.photo) ? (
        <Image
          style={styles.contactImage}
          source={{
            uri: contact.photo,
          }}
        />
      ): (
        <Image
          style={styles.contactImage}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Placeholder_no_text.svg/1024px-Placeholder_no_text.svg.png',
          }}
        />
      )}
      <View style={styles.innerContainer}>
        <Text style={styles.name}>
        {`${contact.firstName}\n${contact.lastName}`}
        </Text>
        <Text style={styles.age}>
        {contact.age} years old
        </Text>
        
        
        <View style={styles.options}>
          <TouchableOpacity
            onPress={handleEdit}
          >
            <Feather name="edit" size={24} color="#F7F6F2" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleDelete}
          >
            <MaterialIcons name="delete-outline" size={24} color="#F7F6F2" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  contactCard: {
    width: Dimensions.get('screen').height/5,    
    alignItems: 'center',
    paddingTop: Dimensions.get('screen').height/20,
    position: 'relative',
    marginVertical: Dimensions.get('screen').height/100
  },
  innerContainer: {
    height: Dimensions.get('screen').height/5,
    backgroundColor: '#4B6587',
    width: '100%',
    paddingTop: Dimensions.get('screen').height/18,
    paddingBottom: Dimensions.get('screen').height/80,
    paddingHorizontal: Dimensions.get('screen').height/80,
    borderRadius: 10,
    justifyContent: 'space-between'

  },
  contactImage: {
    height: Dimensions.get('screen').height/10,
    width: Dimensions.get('screen').height/10,
    resizeMode: 'cover',
    borderRadius: Dimensions.get('screen').height/10,
    position:'absolute',
    top: 0,
    zIndex: 1,
    backgroundColor: '#F7F6F2',
    borderWidth: 2,
    borderColor: '#F0E5CF'
  },
  name: {
    fontSize: Dimensions.get('window').height/40,
    marginLeft: Dimensions.get('window').height/150,
    fontWeight: 'bold',
    color: "#F7F6F2",
    textAlign: 'center'
  },
  age: {
    fontSize: Dimensions.get('window').height/60,
    marginLeft: Dimensions.get('window').height/150,
    fontWeight: '300',
    color: "#F7F6F2",
    textAlign: 'center'
  },
  options: {
    color: '#F7F6F2',
    fontSize: Dimensions.get('screen').height/50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: Dimensions.get('screen').height/80
  }

})