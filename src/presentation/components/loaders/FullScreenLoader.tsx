import React from 'react';
import { ActivityIndicator, View } from 'react-native';

export const FullScreenLoader = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ flex:1, justifyContent:'center',alignContent:'center' }}>
        <ActivityIndicator size="large" color={'indigo'}/>
    </View>
  );
};
