import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Fancycard() {
  return (
    <View>
      <Text style={styles.headingText}>Fancycard</Text>
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1511119210703-b7c40c2c8a0a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.cardimage}
        />
        <View style={styles.cardbody}>
          <Text style={styles.cardtitle}>A beautiful road way</Text>
          <Text style={styles.cardtext}>
            Lorem ipsum dolor sit amet consectetur adipisicing e repdi, porro
            illo distinctio iusto quaerat consequuntur laudantium!
          </Text>
          <Text style={styles.cardfooter}>14 min away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    color: '#008684',
  },
  container: {
    flex: 1,
    marginHorizontal: 12,
    marginVertical: 12,
    backgroundColor: '#DAE0E2',
    elevation: 8,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#616C6F',
    shadowOpacity: 1,
    borderRadius: 16,
  },
  cardimage: {
    height: 300,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardbody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 6,
    marginVertical: 10,
  },
  cardtitle: {
    fontSize: 20,
    color: '#2C3335',
    marginVertical: 2,
    fontWeight: 'bold',
  },
  cardtext: {
    fontSize: 16,
    color: '#2C3335',
    marginVertical: 2,
  },
  cardfooter: {
    fontSize: 16,
    color: '#2C3335',
    marginVertical: 2,
  },
});
