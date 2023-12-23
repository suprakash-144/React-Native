import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Flatcard = (): JSX.Element => {
  return (
    <View>
      <Text style={styles.headingText}>flatcard</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.card1]}>
          <Text>red</Text>
        </View>
        <View style={[styles.card, styles.card2]}>
          <Text>blue</Text>
        </View>
        <View style={[styles.card, styles.card3]}>
          <Text>green</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    color: '#008684',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 100,
    borderRadius: 4,
    margin: 6,
  },
  card1: {
    backgroundColor: '#EF5354',
  },
  card2: {
    backgroundColor: '#008684',
  },
  card3: {
    backgroundColor: 'blue',
  },
});
export default Flatcard;
