import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity, View, TextInput, Image, Text, Dimensions, ScrollView} from 'react-native';
import isURL from '../helpers/checkURL';
export default function ContactCard({contact}) {
  const id = {id: contact.id}
  const navigation = useNavigation()
  return(
    <TouchableOpacity
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
        {`${contact.firstName} ${contact.lastName}`}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  contactCard: {
    width: Dimensions.get('screen').height/5,    
    alignItems: 'center',
    paddingTop: Dimensions.get('screen').height/20,
    position: 'relative'
  },
  innerContainer: {
    height: Dimensions.get('screen').height/5,
    backgroundColor: '#4B6587',
    width: '100%',
    paddingTop: Dimensions.get('screen').height/20,
    borderRadius: 10,

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
  }

})