import {
  Appearance,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const colorScheme = Appearance.getColorScheme();

export default function Screen({ children }) {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: Appearance.getColorScheme() === 'dark' ? 'white' : 'black',
  },
  container: {
    flex: 1,
    minHeight: '100%',
  },
});
