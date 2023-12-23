import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Scrollcard() {
  return (
    <View>
      <Text style={styles.headingText}>Scrollcard</Text>
      <ScrollView style={styles.container} horizontal={true}>
        <View style={[styles.card, styles.cardEleveated]}>
          <Text>asd</Text>
        </View>
        <View style={[styles.card, styles.cardEleveated]}>
          <Text>asd</Text>
        </View>
        <View style={[styles.card, styles.cardEleveated]}>
          <Text>asd</Text>
        </View>
        <View style={[styles.card, styles.cardEleveated]}>
          <Text>asd</Text>
        </View>
        <View style={[styles.card, styles.cardEleveated]}>
          <Text>asasdd</Text>
        </View>
      </ScrollView>
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
    backgroundColor: 'black',
    marginVertical: 2,
    padding: 8,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    margin: 6,
    backgroundColor: '#EF5354',
  },
  cardEleveated: {
    // backgroundColor: 'white',
    elevation: 10,
    shadowColor: 'white',
    shadowOffset: {
      width: 5,
      height: 3,
    },
    shadowOpacity: 1,
  },
});
