import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

export default function box(props: ImageSourcePropType | undefined) {
  const handlesubmit = () => {};
  return (
    <View>
      <Pressable
        onPress={() => {
          handlesubmit();
        }}>
        <Image source={props} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({});
