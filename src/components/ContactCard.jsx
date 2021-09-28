import React from 'react';
import { StyleSheet, TouchableOpacity, View, TextInput, Image, Text, Dimensions, ScrollView} from 'react-native';
import { Feather } from '@expo/vector-icons';
import isURL from '../helpers/checkURL';

export default function ContactCard({contact}) {
  return(
    <View
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
        // <Feather 
        //   style={styles.imagePlaceholder}
        //   name="user" 
        // />
        <Image
          style={styles.contactImage}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Placeholder_no_text.svg/1024px-Placeholder_no_text.svg.png',
          }}
        />
      )}
      <Text style={styles.name}>
      {`${contact.firstName} ${contact.lastName}`}
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  contactCard: {
    height: Dimensions.get('window').height/5,
    width: Dimensions.get('window').height/5,
    backgroundColor: '#4B6587',
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    flexDirection: 'column',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 8/10,
    shadowRadius: 5,  
    elevation: 5
  },
  contactImage: {
    height: '70%',
    width: '70%',
    resizeMode: 'cover',
    borderRadius: 10
  },
  imagePlaceholder: {
    height: '70%',
    fontSize: Dimensions.get('window').height/10,
    width: '70%',
    textAlign: 'left',
    textAlignVertical: 'center',
    color: '#F7F6F2',
    backgroundColor: '#C8C6C6',
    borderRadius: 10
  },
  name: {
    fontSize: Dimensions.get('window').height/40,
    marginLeft: Dimensions.get('window').height/150,
    fontWeight: 'bold',
    color: "#F7F6F2",
    textAlign: 'center'
  }

})