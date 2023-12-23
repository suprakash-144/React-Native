import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
const contact = [
  {
    name: 'Suprakash',
    des: 'Ready to connect',
    image: '',
  },
  {
    name: 'Suprakash',
    des: 'Ready to connect',
    image: '',
  },
  {
    name: 'Suprakash',
    des: 'Ready to connect',
    image: '',
  },
];
export default function Contactlist() {
  return (
    <View>
      <Text>Contactlist</Text>
      <View style={styles.container}>
        {contact.map((item, index) => (
          <View key={index}>
            <Image source={{uri: `${item.image}`}} />
            <View>
              <Text>{item.name}</Text>
              <Text>{item.des}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({container: {}});
