import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function Actioncard() {
  function openWebsite(weblink: string) {
    Linking.openURL(weblink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Actioncard</Text>
      <View style={styles.container}>
        <Text>asd</Text>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1511119210703-b7c40c2c8a0a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.cardimage}
        />
        <View>
          <Text> A new way to learn </Text>
        </View>
        <View>
          <Text numberOfLines={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            saepe dolorem voluptatibus tempora eos! Adipisci veritatis similique
            tenetur provident ipsam. Nulla, ex. Reprehenderit ipsam, suscipit
            veritatis ex maiores delectus eum.
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() =>
              openWebsite('https://www.linkedin.com/in/suprakash-gorai/')
            }>
            <Text>Read more </Text>
          </TouchableOpacity>
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
});
