import { StyleSheet, Text } from 'react-native';
import React from 'react';
import appStyles from '../config/styles';

export default function AppText({ children, style, otherProps }) {
  return (
    <Text {...otherProps} style={[appStyles.text, style]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({});
